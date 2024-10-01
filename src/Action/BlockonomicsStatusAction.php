<?php

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Request\GetStatusInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Doctrine\ORM\EntityManagerInterface;

class BlockonomicsStatusAction implements ActionInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    
    public function execute($request)
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());
        $status = $details['status'];
        $notes = $details['notes'];
        echo "notes: $notes\n";

        if ($status === 'pending') {

            // $request->markPending();
        } else {
            $request->markNew();
        }
    }

    public function supports($request)
    {
        return $request instanceof GetStatusInterface;
    }
}
