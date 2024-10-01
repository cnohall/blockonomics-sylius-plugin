<?php

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Request\GetStatusInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;

class BlockonomicsStatusAction implements ActionInterface
{
    public function execute($request)
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());
        $status = $details['status'];
        // Access txid from the details array
        $txid = isset($details['txid']) ? $details['txid'] : "it's not set";

        echo var_dump($txid);

        if ($status === 'pending') {

            // $txid = $request->request->get('txid');
            // $model['txid'] = $txid;
            // $request->markPending();
        } else {
            // $request->markNew();
        }
    }

    public function supports($request)
    {
        return $request instanceof GetStatusInterface;
    }
}
