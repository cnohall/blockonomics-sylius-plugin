<?php

// src/Service/CallbackUrlManager.php
namespace Blockonomics\SyliusBlockonomicsPlugin\Service;

class CallbackUrlManager
{
    private $callbackUrl;

    public function getCallbackUrl(): ?string
    {
        return $this->callbackUrl;
    }

    public function setCallbackUrl(string $callbackUrl): void
    {
        $this->callbackUrl = $callbackUrl;
    }
}
