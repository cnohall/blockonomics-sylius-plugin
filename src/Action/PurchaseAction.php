<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Purchase;

final class PurchaseAction implements ActionInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        if ($details->offsetExists('status')) {
            return;
        }

        // Implement your purchase logic here
        // For example:
        // $details['status'] = 'pending';
        // $details['created_at'] = new \DateTime();
        // ... other purchase-related operations
    }

    public function supports($request): bool
    {
        return
            $request instanceof Purchase &&
            $request->getModel() instanceof \ArrayAccess;
    }
}