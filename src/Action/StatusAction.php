<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Blockonomics\SyliusBlockonomicsPlugin\ApiClient\BlockonomicsApiClientInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Request\GetStatusInterface;

final class StatusAction implements ActionInterface
{
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        $status = $details['status'];

        if (null != $status) {
            switch ($status) {
                case BlockonomicsApiClientInterface::FAILED:
                    $request->markFailed();

                    return;
                case BlockonomicsApiClientInterface::AUTHORIZED:
                    if ($this->hasSuccessfulTransaction($details)) {
                        $request->markAuthorized();
                    } else {
                        $request->markUnknown();
                    }

                    return;
                case BlockonomicsApiClientInterface::CAPTURED:
                    if ($this->hasSuccessfulTransaction($details)) {
                        $request->markCaptured();
                    } else {
                        $request->markUnknown();
                    }

                    return;
            }
        }

        if ($details['paymentMethodNonce']) {
            $request->markPending();

            return;
        }

        $request->markNew();
    }

    public function supports($request): bool
    {
        return
            $request instanceof GetStatusInterface &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }

    private function hasSuccessfulTransaction($details): bool
    {
        return $details['sale'] && $details['sale']['success'];
    }
}