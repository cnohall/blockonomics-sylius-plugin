<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Payum\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Request\RenderTemplate;
use Payum\Core\Exception\RequestNotSupportedException;
use Symfony\Component\HttpFoundation\Response;

class GeneratePaymentScreenAction implements ActionInterface
{
private string $templateName;

    public function __construct(string $templateName)
    {
      $this->templateName = $templateName;
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $template = '@BlockonomicsSyliusBlockonomicsPlugin/Action/generate_payment_screen.html.twig';
        $parameters = [
            // Add your template parameters here
        ];

        $content = $this->twig->render($this->template, $parameters);
        $response = new Response($content);

        $request->setResponse($response);
    }

    public function supports($request): bool
    {
        return $request instanceof RenderTemplate;
    }
}
