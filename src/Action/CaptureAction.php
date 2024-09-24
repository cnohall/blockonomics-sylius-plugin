<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Blockonomics\SyliusBlockonomicsPlugin\Request\Purchase;
use Payum\Core\Action\ActionInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Capture;

final class CaptureAction implements ActionInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $this->gateway->execute(new Purchase($request->getModel()));
    }

    public function supports($request): bool
    {
        return $request instanceof Capture && $request->getModel() instanceof \ArrayAccess;
    }
}