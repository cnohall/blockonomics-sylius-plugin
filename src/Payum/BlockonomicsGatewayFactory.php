<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Payum;

use Blockonomics\SyliusBlockonomicsPlugin\Payum\Action\CaptureAction;
use Blockonomics\SyliusBlockonomicsPlugin\Payum\Action\StatusAction;
use Blockonomics\SyliusBlockonomicsPlugin\Payum\Action\GeneratePaymentScreenAction;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;
use Twig\Environment;

final class BlockonomicsGatewayFactory extends GatewayFactory
{
    public const FACTORY_NAME = 'blockonomics';

    protected function populateConfig(ArrayObject $config): void
    {
        $config->defaults([
            'payum.factory_name' => 'sylius_payment',
            'payum.factory_title' => 'Sylius Payment',
            'payum.template.generate_payment_screen' => '@BlockonomicsSyliusBlockonomicsPlugin/Action/generate_payment_screen.html.twig',
            'payum.action.generate_payment_screen' => function (ArrayObject $config) {
                return new GeneratePaymentScreenAction($config['payum.template.generate_payment_screen']);
            },
            'payum.action.status' => new StatusAction(),
            'payum.action.capture' => function (ArrayObject $config) {
                return new GeneratePaymentScreenAction($config['payum.template.generate_payment_screen']);
            },
        ]);

        // $config['payum.api'] = function (ArrayObject $config) {
        //     return new SyliusApi($config['api_key']);
        // };

        $config['payum.paths'] = [
            'PayumBlockonomics' => __DIR__ . '/Resources/views',
        ];
    }
}
