<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\NotBlank;

final class BlockonomicsGatewayConfigurationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('merchantId', TextType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.merchant_id',
                'constraints' => [
                    new NotBlank([
                        'message' => 'blockonomics_sylius_blockonomics_plugin.merchant_id.not_blank',
                        'groups' => 'sylius',
                    ]),
                ],
            ])
            ->add('publicKey', TextType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.public_key',
                'constraints' => [
                    new NotBlank([
                        'message' => 'blockonomics_sylius_blockonomics_plugin.public_key.not_blank',
                        'groups' => 'sylius',
                    ]),
                ],
            ])
            ->add('privateKey', TextType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.private_key',
                'constraints' => [
                    new NotBlank([
                        'message' => 'blockonomics_sylius_blockonomics_plugin.private_key.not_blank',
                        'groups' => 'sylius',
                    ]),
                ],
            ])
            ->add('sandbox', CheckboxType::class, [
                'label' => 'blockonomics_sylius_blockonomics_plugin.ui.sandbox',
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                $data = $event->getData();

                $data['payum.http_client'] = '@blockonomics_sylius_blockonomics_plugin.api_client.blockonomics';

                $event->setData($data);
            })
        ;
    }
}