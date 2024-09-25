<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin;

use Blockonomics\SyliusBlockonomicsPlugin\Action\BlockonomicsPaymentScreen;
use Blockonomics\SyliusBlockonomicsPlugin\Action\BlockonomicsStatusAction;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;

final class BlockonomicsGatewayFactory extends GatewayFactory
{
    public const FACTORY_NAME = 'blockonomics';

    protected function populateConfig(ArrayObject $config)
    {
        $config->defaults([
            'payum.factory_name' => self::FACTORY_NAME,
            'payum.factory_title' => 'blockonomics',
            'payum.http_client' => '@blockonomics_sylius_blockonomics_plugin.api_client.blockonomics',
            'payum.template.blockonomics_payment_screen' => '@BlockonomicsSyliusBlockonomicsPlugin/Action/blockonomics_payment_screen.html.twig',
            'payum.action.capture' => function (ArrayObject $config) {
                return new BlockonomicsPaymentScreen($config['payum.template.blockonomics_payment_screen']);
            },
            'payum.action.status' => function (ArrayObject $config) {
                return new BlockonomicsStatusAction();
            },
        ]);

        $config['payum.paths'] = [
            'PayumBlockonomics' => __DIR__ . '/Resources/views',
        ];
    }
}