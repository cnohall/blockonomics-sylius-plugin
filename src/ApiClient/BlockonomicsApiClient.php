<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\ApiClient;

use Blockonomics\Configuration;

class BlockonomicsApiClient
{
    private array $options;

    public function initialise(array $options): void
    {
        $this->options = $options;

        Configuration::reset();

        Configuration::apiKey($this->options['apiKey']);
        Configuration::callbackSecret($this->options['callbackSecret']);
        Configuration::callbackUrl($this->options['callbackUrl']);
    }

    // Other methods...
}