<?php

declare(strict_types=1);

namespace Tests\Blockonomics\SyliusBlockonomicsPlugin\Behat\Context\Ui\Shop;

use Behat\Behat\Context\Context;
use Sylius\Behat\Page\Shop\Order\ShowPageInterface;
use Tests\Blockonomics\SyliusBlockonomicsPlugin\Behat\Mocker\BlockonomicsApiMocker;
use Sylius\Behat\Page\Shop\Checkout\CompletePageInterface;
use Tests\Blockonomics\SyliusBlockonomicsPlugin\Behat\Page\Shop\Payum\CapturePageInterface;

final class CheckoutContext implements Context
{
    /** @var CompletePageInterface */
    private $summaryPage;

    /** @var ShowPageInterface */
    private $orderDetails;

    /** @var BlockonomicsApiMocker */
    private $braintreeApiMocker;

    /** @var CapturePageInterface */
    private $capturePage;

    public function __construct(
        CompletePageInterface $summaryPage,
        ShowPageInterface $orderDetails,
        BlockonomicsApiMocker $braintreeApiMocker,
        CapturePageInterface $capturePage
    ) {
        $this->summaryPage = $summaryPage;
        $this->orderDetails = $orderDetails;
        $this->braintreeApiMocker = $braintreeApiMocker;
        $this->capturePage = $capturePage;
    }

    /**
     * @When I confirm my order with Blockonomics payment
     * @Given I have confirmed my order with Blockonomics payment
     */
    public function iConfirmMyOrderWithBlockonomicsPayment(): void
    {
        $this->braintreeApiMocker->mockApiCreatePayment(function () {
            $this->summaryPage->confirmOrder();
        });
    }

    /**
     * @When I sign in to Blockonomics and pay successfully
     */
    public function iSignInToBlockonomicsAndPaySuccessfully(): void
    {
        $this->braintreeApiMocker->mockApiSuccessfulPayment(function () {
            $this->capturePage->confirmPayment('paypal');
        });
    }

    /**
     * @When I try to pay again Blockonomics payment
     */
    public function iTryToPayAgainBlockonomicsPayment(): void
    {
        $this->braintreeApiMocker->mockApiCreatePayment(function () {
            $this->orderDetails->pay();
        });
    }

    /**
     * @Then I should be notified that my payment has been failed
     */
    public function iShouldBeNotifiedThatMyPaymentHasBeenFailed(): void
    {
        $this->assertNotification('Payment has failed.');
    }

    /**
     * @Given I have failed Blockonomics payment
     * @When I fail my Blockonomics payment
     */
    public function iHaveFailedBlockonomicsPayment(): void
    {
        $this->braintreeApiMocker->mockApiFailedPayment(function () {
            $this->capturePage->confirmPayment('paypal');
        });
    }

    private function assertNotification($expectedNotification): void
    {
        $notifications = $this->orderDetails->getNotifications();
        $hasNotifications = '';

        foreach ($notifications as $notification) {
            $hasNotifications .= $notification;
            if ($notification === $expectedNotification) {
                return;
            }
        }

        throw new \RuntimeException(sprintf('There is no notificaiton with "%s". Got "%s"', $expectedNotification, $hasNotifications));
    }
}