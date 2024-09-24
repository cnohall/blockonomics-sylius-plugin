<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Payum\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Request\RenderTemplate;
use Payum\Core\Exception\RequestNotSupportedException;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

final class CaptureAction implements ActionInterface
{
  private $twig;

  public function __construct(Environment $twig)
  {
    $this->twig = $twig;
  }

  public function execute($request)
  {
    RequestNotSupportedException::assertSupports($this, $request);

    $template = '@BlockonomicsSyliusBlockonomicsPlugin/Action/generate_payment_screen.html.twig';
    $parameters = [
      // Add your template parameters here
    ];

    $content = $this->twig->render($template, $parameters);
    $response = new Response($content);

    $request->setResponse($response);
  }

  public function supports($request)
  {
    return $request instanceof RenderTemplate;
  }
}