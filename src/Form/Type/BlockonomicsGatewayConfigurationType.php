<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Form\Type;

use Blockonomics\SyliusBlockonomicsPlugin\Service\CallbackUrlManager;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\HttpFoundation\RequestStack;

final class BlockonomicsGatewayConfigurationType extends AbstractType
{
    private $requestStack;
    private $callbackUrlManager;

    public function __construct(RequestStack $requestStack, CallbackUrlManager $callbackUrlManager)
    {
        $this->requestStack = $requestStack;
        $this->callbackUrlManager = $callbackUrlManager;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $request = $this->requestStack->getCurrentRequest();
        $baseUrl = $request->getSchemeAndHttpHost();

        $builder
            ->add('apiKey', TextType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.api_key',
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'blockonomics_sylius_blockonomics_plugin.api_key.not_blank',
                        'groups' => 'sylius',
                    ]),
                ],
            ])
            ->add('callbackUrl', TextType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.callback_url',
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'blockonomics_sylius_blockonomics_plugin.callback_url.not_blank',
                        'groups' => 'sylius',
                    ]),
                ],
            ])
            // TODO: Add callback secret that is in sync with the callback url
            // ->add('callbackSecret', HiddenType::class)
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($baseUrl) {
                $data = $event->getData();
                if (empty($data['callbackUrl'])) {
                    $randomBytes = random_bytes(20);
                    $callbackSecret = sha1($randomBytes);
                    $data['callbackUrl'] = $baseUrl . "/api/blockonomics/update-order-status?secret=" . $callbackSecret;
                }

                $this->callbackUrlManager->setCallbackUrl($data['callbackUrl']);
                $data['payum.http_client'] = '@blockonomics_sylius_blockonomics_plugin.api_client.blockonomics';
                $event->setData($data);
            });
    }
}