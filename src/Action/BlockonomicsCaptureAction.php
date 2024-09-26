<?php

declare(strict_types=1);

namespace Blockonomics\SyliusBlockonomicsPlugin\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Capture;
use Payum\Core\Exception\RequestNotSupportedException;
use Symfony\Component\HttpFoundation\Response;
use Payum\Core\Request\RenderTemplate;
use Payum\Core\Reply\HttpResponse;

class BlockonomicsCaptureAction implements ActionInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    private string $templateName;
    private $config;

    public function __construct(string $templateName, ArrayObject $config)
    {
        $this->templateName = $templateName;
        // Retrieve the API key
        $this->apiKey = $config['apiKey'] ?? null;
        if (!$this->apiKey) {
            throw new \LogicException('The api key parameter is required');
        }
    }

    private function makeApiRequest(string $url, array $headers = []): array
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        $response = curl_exec($ch);
        echo var_dump($response);

        if (curl_errno($ch)) {
            return [
                'success' => false,
                'message' => 'Something went wrong: ' . curl_error($ch),
            ];
        }

        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($http_code == 200) {
            return [
                'success' => true,
                'data' => json_decode($response, true),
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Something went wrong',
            ];
        }
    }

    public function getBTCPrice(string $currencyCode)
    {
        $url = 'https://www.blockonomics.co/api/price?currency=' . $currencyCode;
        $response = $this->makeApiRequest($url);

        if ($response['success']) {
            $data = $response['data'];
            if (isset($data['price'])) {
                return $data['price'];
            } else {
                return 'Price not found in response';
            }
        } else {
            return $response['message'];
        }
    }

    // TODO: Clean up this function and implement use of makeApiRequest
    public function getBTCAddress(): string
    {
        $api_key = $this->apiKey;
        $url = 'https://www.blockonomics.co/api/new_address?reset=1';

        $ch = curl_init();curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        $header = "Authorization: Bearer " . $api_key;
        $headers = array();
        $headers[] = $header;
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $contents = curl_exec($ch);
        if (curl_errno($ch)) {
            echo "Error:" . curl_error($ch);
        }
        $responseObj = json_decode($contents);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close ($ch);if ($status == 200) {
        return $responseObj->address;
        } else {
            echo "ERROR: " . $status . ' ' . $responseObj->message;
        }
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $model = ArrayObject::ensureArrayObject($request->getModel());


        // Render and display the payment screen
        $response = new Response(
            $this->renderTemplate($this->templateName, ['model' => $model])
        );
        $response->send();
        exit;


        // Here, implement the logic to check if the payment was successful
        // You might need to make API calls to Blockonomics to verify the payment status
        
        // If payment is confirmed, update the model
        // $model['status'] = 'paid';
    }

    public function supports($request): bool
    {
        return
            $request instanceof Capture &&
            $request->getModel() instanceof \ArrayAccess;
    }

    private function renderTemplate(string $templateName, array $parameters): string
    {
        $model = $parameters['model'];
        $btcAddress = $this->getBTCAddress();
        $currency = $model['currency'];
        $btcPrice = $this->getBTCPrice($currency);
        $amount = $model['amount'] / 100; // Example amount
        $btcAmount = round($amount / $btcPrice, 10);
        $orderNumber = $model['invoiceNumber']; // Example order number

        $this->gateway->execute($template = new RenderTemplate($this->templateName, [
            'btc_address' => $btcAddress,
            'btc_amount' => $btcAmount,
            'btc_price' => $btcPrice,
            'currency' => $currency,
            'formAction' => '',
            'amount' => $amount,
            'order_number' => $orderNumber,
        ]));
          throw new HttpResponse($template->getResult());
    }
}