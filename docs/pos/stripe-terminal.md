---
id: stripe-terminal
title: Stripe Terminal (WisePOS E)
sidebar_label: Stripe Terminal
description: Set up and use Stripe Terminal with a WisePOS E reader in Newclear POS for in-person card payments.
---

# Stripe Terminal (WisePOS E)

Newclear integrates natively with **Stripe Terminal** to accept in-person card payments through the **Stripe WisePOS E** smart reader. Customers can tap, insert, or swipe their card directly on the reader — no separate payment processing app needed.

---

## Prerequisites

- A **Stripe account** (live mode, not test mode for real payments)
- A **Stripe WisePOS E reader** device
- The WisePOS E must be connected to the same network as the POS device (Wi-Fi)

---

## Step 1: Connect Your Stripe Account to Newclear

1. Go to **Settings → Payments**
2. Click **Connect Stripe Account**
3. You'll be redirected to Stripe's OAuth flow
4. Log in with your Stripe credentials
5. Authorize Newclear to access your Stripe account
6. You'll be redirected back to Newclear — your Stripe account is now connected

:::note
Newclear supports connecting multiple Stripe accounts (for multi-location businesses). Each location can have its own Stripe account and reader.
:::

---

## Step 2: Create a Payment Channel

After connecting Stripe:

1. Go to **Settings → Payments → Payment Channels**
2. Click **+ Add Payment Channel**
3. Fill in:
   - **Name** — e.g., "Main Register" or "Store Front"
   - **Stripe Account** — Select the connected Stripe account
   - **Currency** — USD (or your local currency)
4. Click **Save**

---

## Step 3: Pair a WisePOS E Reader

1. Power on your WisePOS E device
2. On the reader, go to **Settings → Generate Pairing Code**
3. Note the 6-character pairing code displayed
4. In Newclear: **Settings → Payments → Readers**
5. Click **+ Pair Reader**
6. Enter the pairing code from the device
7. Give the reader a name (e.g., "Register 1")
8. Click **Pair**

The reader should show as **Online** once paired. It will remain paired unless you unpair it from settings.

:::tip
The WisePOS E must be on the same Wi-Fi network as the browser running Newclear POS. They communicate locally via Stripe Terminal SDK.
:::

---

## Step 4: Taking a Card Payment at POS

Once your reader is paired and online:

1. Build the customer's cart in POS as normal
2. At checkout, select **Card** as the payment method
3. Click **Charge [Amount]**
4. The WisePOS E screen activates and prompts the customer to present their card
5. Customer **taps** (NFC/contactless), **inserts** (chip), or **swipes** (magstripe)
6. The reader processes the payment through Stripe
7. Stripe returns an approval or decline
8. POS shows **Payment Approved** ✅ (or declined ❌)
9. The sale is completed automatically on approval

### What the Reader Displays
- Your store name
- Transaction amount
- "Tap, insert, or swipe" prompt
- Processing spinner
- "Approved" or "Declined" result

---

## Card Payment Flow (Technical)

Behind the scenes:
1. Newclear creates a **PaymentIntent** via Stripe API
2. The intent is sent to the WisePOS E via Stripe Terminal SDK
3. The reader collects the payment method from the card
4. Stripe processes the charge and confirms
5. Newclear receives the confirmation webhook and marks the sale as paid

---

## Cancelling a Payment

If you need to cancel a payment that's in progress (reader is waiting for card):

1. In the POS, click **Cancel Payment**
2. The WisePOS E will return to its idle screen
3. The PaymentIntent is cancelled in Stripe

:::warning
Do not power off or unplug the reader while a payment is processing. Wait for the current transaction to complete or cancel it via POS first.
:::

---

## Declined Payments

If a card is declined:
- The reader shows "Declined"
- POS shows the decline reason (if provided by Stripe)
- You can retry with a different card or switch to cash/store credit
- No charge is made to the customer's card on a decline

---

## Reader Offline / Connection Issues

If the reader shows as offline in Newclear:

1. Check that the WisePOS E is powered on and connected to Wi-Fi
2. Verify the POS browser device is on the same Wi-Fi network
3. Try going to Settings → Payments → Readers and clicking **Reconnect**
4. If still offline, power cycle the WisePOS E device and re-pair

---

## Refunds via Stripe

Card payment refunds are handled through the POS Refund flow. See [Refunds](/docs/pos/refunds) for full instructions. Stripe processes the refund back to the original card.

---

## Test Mode

For testing without real transactions:

1. Connect a Stripe test account (use test API keys)
2. Pair a simulated reader or use Stripe's built-in test card numbers
3. Test cards: `4242 4242 4242 4242` (approval), `4000 0000 0000 9995` (decline)

:::warning
Never use test API keys in production. Ensure your live Stripe account is connected before going live.
:::
