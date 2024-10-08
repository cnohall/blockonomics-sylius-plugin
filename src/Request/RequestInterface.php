<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Request;

interface RequestInterface
{
    public function getResponse();

    public function setResponse(): void;
}