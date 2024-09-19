<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin;

use Blockonomics\SyliusBlockonomicsPlugin\Action\Api\DoSaleAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\Api\FindPaymentMethodNonceAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\Api\GenerateClientTokenAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\CaptureAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\ConvertPaymentAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\ObtainCardholderAuthenticationAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\ObtainPaymentMethodNonceAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\PurchaseAction;
use Blockonomics\SyliusBlockonomicsPlugin\Action\StatusAction;
use Blockonomics\SyliusBlockonomicsPlugin\ApiClient\BlockonomicsApiClientInterface;
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

            'payum.template.obtain_payment_method_nonce' => '@BlockonomicsSyliusBlockonomicsPlugin/Action/obtain_payment_method_nonce.html.twig',
            'payum.template.obtain_cardholder_authentication' => '@BlockonomicsSyliusBlockonomicsPlugin/Action/obtain_cardholder_authentication.html.twig',

            'payum.action.capture' => new CaptureAction(),

            'payum.action.purchase' => function (ArrayObject $config) {
                $action = new PurchaseAction();
                $action->setCardholderAuthenticationRequired($config['cardholderAuthenticationRequired']);

                return $action;
            },

            'payum.action.convert_payment' => new ConvertPaymentAction(),

            'payum.action.obtain_payment_method_nonce' => function (ArrayObject $config) {
                $action = new ObtainPaymentMethodNonceAction($config['payum.template.obtain_payment_method_nonce']);
                $action->setCardholderAuthenticationRequired($config['cardholderAuthenticationRequired']);

                return $action;
            },

            'payum.action.obtain_cardholder_authentication' => function (ArrayObject $config) {
                return new ObtainCardholderAuthenticationAction($config['payum.template.obtain_cardholder_authentication']);
            },

            'payum.action.status' => new StatusAction(),

            'payum.action.api.generate_client_token' => new GenerateClientTokenAction(),
            'payum.action.api.find_payment_method_nonce' => new FindPaymentMethodNonceAction(),
            'payum.action.api.do_sale' => new DoSaleAction(),

            'cardholderAuthenticationRequired' => true,
        ]);

        if (false == $config['payum.api']) {
            $config['payum.default_options'] = [
                'sandbox' => true,
                'storeInVault' => null,
                'storeInVaultOnSuccess' => null,
                'storeShippingAddressInVault' => null,
                'addBillingAddressToPaymentMethod' => null,
            ];
            $config->defaults($config['payum.default_options']);
            $config['payum.required_options'] = [];

            $config['payum.api'] = function (ArrayObject $config) {
//                $config->validateNotEmpty($config['payum.required_options']);
//
//                return new Api((array) $config, $config['payum.http_client'], $config['httplug.message_factory']);

                /** @var BlockonomicsApiClientInterface $apiClient */
                $apiClient = $config['payum.http_client'];

                $apiClient->initialise((array) $config);

                return $apiClient;
            };
        }

        $config['payum.paths'] = [
            'PayumBlockonomics' => __DIR__ . '/Resources/views',
        ];
    }
}