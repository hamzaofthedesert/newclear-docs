---
id: payments
title: Payments & Stripe
sidebar_label: Payments
description: Set up Stripe payments in Newclear — connecting Stripe accounts, creating payment channels, and pairing WisePOS E readers.
---

# Payments & Stripe

Newclear integrates with **Stripe** for in-person card payments via Stripe Terminal. The Payments settings page is where you connect Stripe accounts, create payment channels, and pair WisePOS E card readers.

**Location:** `/settings/payments`

---

## Overview

The payment flow in Newclear works as follows:

```
Customer's Card
       ↓
WisePOS E Reader (Stripe Terminal)
       ↓
Stripe (processes the payment)
       ↓
Newclear (records the sale)
```

Stripe handles all payment processing — Newclear never stores card data.

---

## Connecting a Stripe Account

1. Go to **Settings → Payments**
2. Click **+ Connect Stripe Account**
3. You'll be redirected to Stripe's OAuth authorization flow
4. Log in with your Stripe credentials (or create a Stripe account if you don't have one)
5. Select whether to use **Live mode** (real payments) or **Test mode** (testing only)
6. Click **Authorize Access**
7. You're redirected back to Newclear — your Stripe account appears in the connected accounts list

### Multiple Stripe Accounts
You can connect multiple Stripe accounts — useful for:
- Multi-location businesses with separate Stripe accounts per store
- Testing with a Stripe test account alongside your live account

---

## Creating a Payment Channel

A **Payment Channel** is a named configuration that links a Stripe account to your POS workflow.

1. Go to **Settings → Payments → Payment Channels**
2. Click **+ Add Payment Channel**
3. Configure:

| Field | Description |
|-------|-------------|
| **Channel Name** | e.g., "Main Register", "Counter 2", "Online" |
| **Stripe Account** | Select the connected Stripe account to use |
| **Currency** | Payment currency (e.g., USD) |
| **Default for POS** | Set as the default payment channel in POS |

4. Click **Save**

The payment channel is now available in the POS payment method selector.

---

## Pairing a WisePOS E Reader

The **Stripe WisePOS E** is a smart countertop card reader with a display screen. It supports:
- Contactless/NFC (Apple Pay, Google Pay, tap cards)
- EMV chip
- Magnetic swipe (fallback)

### Requirements
- WisePOS E device powered on
- Device connected to the same Wi-Fi network as the POS browser

### Pairing Steps

1. On the WisePOS E, navigate to **Settings → Generate Pairing Code**
2. A 6-character alphanumeric code appears on the screen (e.g., `ABCD12`)
3. In Newclear: **Settings → Payments → Readers**
4. Click **+ Pair Reader**
5. Fill in:
   - **Pairing Code** — Enter the code from the device
   - **Reader Name** — Friendly name (e.g., "Front Desk Reader")
   - **Payment Channel** — Associate with a payment channel
6. Click **Pair**

The reader appears as **Online** in your reader list once paired.

### Multiple Readers
Pair as many readers as needed. Each can be associated with a different payment channel or counter. In the POS, if multiple readers are online, staff select which reader to use before charging.

---

## Testing Your Setup

Before going live:

1. Ensure your Stripe account is in **Live mode**
2. Open the POS and add a product to the cart
3. Select **Card** as payment method
4. Click **Charge** — the reader should activate
5. Use a test card (if Stripe test account) or your own card briefly (you can refund it)
6. Confirm the payment appears in your Stripe dashboard

---

## Payment Channel in POS

When a cashier selects **Card** at POS:
1. Newclear automatically uses the **default payment channel**
2. If multiple channels are configured, the cashier can select which one
3. The linked Stripe account and reader are used for the transaction

---

## Reader Status and Management

From **Settings → Payments → Readers**:

| Status | Meaning |
|--------|---------|
| 🟢 Online | Connected and ready |
| 🟡 Idle | Connected but no active payment |
| 🔴 Offline | Cannot be reached — check Wi-Fi |

**Actions:**
- **Rename** — Change the reader's friendly name
- **Unpair** — Remove the reader from Newclear
- **Test** — Send a test ping to verify connectivity

---

## Stripe Dashboard Access

All transactions, refunds, and payouts are visible in your Stripe Dashboard at [dashboard.stripe.com](https://dashboard.stripe.com). Newclear syncs transaction records but Stripe is the system of record for financial settlement.

Payouts from Stripe to your bank account are managed entirely within Stripe's platform.
