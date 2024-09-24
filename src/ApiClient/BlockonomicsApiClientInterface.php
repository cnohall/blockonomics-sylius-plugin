<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\ApiClient;

use Blockonomics\PaymentMethodNonce;
use Blockonomics\Result\Error;
use Blockonomics\Result\Successful;
use Payum\Core\Bridge\Spl\ArrayObject;

interface BlockonomicsApiClientInterface
{
    public const FAILED = 'failed';

    public const AUTHORIZED = 'authorized';

    public const CAPTURED = 'captured';

    public const REFUNDED = 'refunded';

    // public function initialise(array $options): void;

    // public function generateClientToken(array $params): string;

    // public function findPaymentMethodNonce(string $nonceString): PaymentMethodNonce;

    // /**
    //  * @return Successful|Error
    //  */
    // public function sale(ArrayObject $params);

    // /**
    //  * @return Successful|Error
    //  */
    // public function refund(string $transactionId);
}