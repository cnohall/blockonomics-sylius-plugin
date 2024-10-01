<?php

namespace Blockonomics\SyliusBlockonomicsPlugin\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\OrderRepository;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class BlockonomicsController extends AbstractController
{
    private $httpClient;
    private $orderRepository;
    private $entityManager;

    public function __construct(HttpClientInterface $httpClient, OrderRepository $orderRepository, EntityManagerInterface $entityManager)
    {
        $this->httpClient = $httpClient;
        $this->orderRepository = $orderRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/api/blockonomics/price", name="blockonomics_price")
     */
    public function getPrice(Request $request): JsonResponse
    {
        $currencyCode = $request->query->get('currency', 'USD');
        $url = 'https://www.blockonomics.co/api/price?currency=' . $currencyCode;

        $response = $this->httpClient->request('GET', $url);

        try {
            $response = $this->httpClient->request('GET', $url);

            if ($response->getStatusCode() === 200) {
                $data = $response->toArray();
                if (isset($data['price'])) {
                    return new JsonResponse($data['price']);
                } else {
                    return new JsonResponse(['error' => 'Price not found in response'], 500);
                }
            } else {
                return new JsonResponse(['error' => 'Something went wrong'], $response->getStatusCode());
            }
        } catch (ClientExceptionInterface | RedirectionExceptionInterface | ServerExceptionInterface | TransportExceptionInterface $e) {
            return new JsonResponse(['error' => 'HTTP request failed: ' . $e->getMessage()], 500);
        }
    }

    /**
     * @Route("/api/blockonomics/update-order-note", name="order_note_update")
     */
    public function updateOrderNote(Request $request): Response {
        try {
            $txid = $request->query->get('txid', 'txid not provided');
            $order = $this->orderRepository->findOneBy(['notes' => $txid]);
            
            if (!$order) {
                throw $this->createNotFoundException('Order not found');
            }
            
            $currentNotes = $order->getNotes();
            $newNote = $currentNotes . "\n" . "TXID: " . $txid;
            $order->setNotes($newNote); 

            $this->entityManager->persist($order);
            $this->entityManager->flush();
            
            return new Response('Order note updated successfully');
        } catch (Exception $e) {
            return new JsonResponse(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    /**
     * @Route("/api/blockonomics/update-order-status", name="order_status_update")
     */
    public function updateOrderStatus(Request $request): Response {
        try {
            $txid = $request->query->get('txid');
            $status = $request->query->get('status', 'status not provided');
            $order = $this->orderRepository->findOneByNotesContainingTxid(['notes' => $txid]);
            
            if (!$order) {
                throw $this->createNotFoundException('Order not found');
            }
            
            $order->setState($status); 

            $this->entityManager->persist($order);
            $this->entityManager->flush();
            
            return new Response('Order status updated successfully');
        } catch (Exception $e) {
            return new JsonResponse(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

}