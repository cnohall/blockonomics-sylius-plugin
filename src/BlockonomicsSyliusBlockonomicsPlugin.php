<?php
declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin;

use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class BlockonomicsSyliusBlockonomicsPlugin extends Bundle
{
    use SyliusPluginTrait;
}