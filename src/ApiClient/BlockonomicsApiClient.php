<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\ApiClient;

use Blockonomics\ClientToken;
use Blockonomics\Configuration;
use Blockonomics\PaymentMethodNonce;
use Blockonomics\Result\Error;
use Blockonomics\Result\Successful;
use Blockonomics\Transaction;
use Payum\Core\Bridge\Spl\ArrayObject;

class BlockonomicsApiClient implements BlockonomicsApiClientInterface
{
    /** @var array */
    protected $options = [];

    public function initialise(array $options): void
    {
        $this->options = $options;

        Configuration::reset();

        Configuration::apiKey($this->options['apiKey']);
        Configuration::callbackSecret($this->options['callbackSecret']);
        Configuration::callbackUrl($this->options['callbackUrl']);
    }
}