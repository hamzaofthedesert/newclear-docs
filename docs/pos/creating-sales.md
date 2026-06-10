---
id: creating-sales
title: Creating a POS Sale
sidebar_label: Creating Sales
description: Step-by-step guide to creating a sale in Newclear POS — scanning, discounts, customer lookup, referral codes, and completing checkout.
---

# Creating a POS Sale

This guide walks you through the complete POS checkout workflow — from opening a new transaction to completing the sale and issuing a receipt.

---

## Step 1: Open a New Tab

Navigate to the POS (`/pos`). A new empty tab is created automatically when you arrive.

- Click **+ New Tab** if you need to start a fresh transaction while another is in progress
- Each tab is an independent cart

---

## Step 2: Add Products to the Cart

### Search by Name or SKU
Type in the **Search Products** bar. Results appear instantly as you type. Click a product to add it to the cart.

### Scan a Barcode
Place focus in the barcode field (or it may already be focused by default) and scan the product's barcode with a USB/Bluetooth scanner. The item is added to the cart immediately.

### Adding Multiples
- After adding an item, click the **+** button on the cart line to increase quantity
- Or type a quantity directly into the qty field
- You can also scan the same barcode multiple times — each scan adds 1 unit

### Removing an Item
Click the **trash icon** on any cart line to remove that item.

---

## Step 3: Select a Customer (Optional but Recommended)

While not required, linking a sale to a customer enables:
- Sale history on the customer's profile
- Loyalty credit accrual (if enabled)
- Affiliate commission tracking (if a referral code is used)

### Finding a Customer
1. Click **Select Customer** in the right panel
2. Search by name, phone, or email
3. Click the customer's name to link them to the current sale

### Creating a New Customer at POS
1. Click **Select Customer** → **+ New Customer**
2. Enter name, phone, and/or email
3. Click **Save** — the new customer is linked immediately and added to your CRM

---

## Step 4: Apply Discounts

### Line-Item Discount
Apply a discount to a specific product in the cart:
1. Click the **discount icon** on the cart line item
2. Choose **Percentage** (e.g., 10%) or **Fixed** (e.g., $5.00 off)
3. Enter the value and confirm

### Whole-Cart Discount
Apply a discount to the entire order:
1. Click **Cart Discount** at the bottom of the cart
2. Choose Percentage or Fixed
3. Enter the value

### Promotion Codes
If a promotion is active, eligible products receive discounts automatically — no code needed. The discount appears as a line item in the cart summary.

---

## Step 5: Enter a Referral Code (Affiliate)

If your business runs an affiliate referral program:

1. In the right panel, find the **Referral Code** field
2. Enter the affiliate's referral code
3. Newclear validates the code and associates the sale with that affiliate
4. The affiliate earns a commission on this sale

:::note
Commission amounts are set by the affiliate tier configuration. Once a sale is completed with a referral code, the commission is **immutable** — it cannot be changed after the fact. A full refund will void the commission.
:::

---

## Step 6: Choose Payment Method

Select how the customer is paying:

### Cash
1. Select **Cash**
2. Enter the amount tendered
3. Newclear shows the change due

### Card (Stripe Terminal)
1. Select **Card**
2. Ensure a WisePOS E reader is paired and online
3. Click **Charge Card** — the reader activates
4. Customer taps, inserts, or swipes their card
5. Confirmation appears in both the POS and on the reader

See [Stripe Terminal](/docs/pos/stripe-terminal) for setup instructions.

### Store Credit
If the customer has a loyalty credit balance:
1. Select **Store Credit**
2. Available balance is shown
3. Credits are applied up to the order total

### Split Payment
To split between two methods (e.g., part card, part cash):
1. Select the first method and enter the partial amount
2. Click **Add Another Payment Method**
3. Select the second method for the remainder

---

## Step 7: Complete the Sale

Click **Complete Sale** (or the **Charge** button for card payments).

Newclear will:
1. Deduct inventory from stock
2. Record the transaction in Sales History
3. Update the customer's purchase history (if linked)
4. Calculate any affiliate commission (if referral code was used)
5. Apply any loyalty credit accruals

---

## Step 8: Receipt

After the sale completes:

- **Print Receipt** — Sends to a connected receipt printer
- **Email Receipt** — Emails to the customer's address on file
- **SMS Receipt** — Sends a text confirmation (if SMS gateway is configured)
- **Skip** — Complete without a receipt

The POS then resets to a fresh empty cart, ready for the next sale.

---

## Holding a Sale

If a customer needs to step away or you need to pause a transaction:
- Simply switch to a new tab — the current cart is preserved
- Return to the tab at any time to continue

---

## Common POS Tips

:::tip
**Speed mode:** Once you've scanned all items, press Enter or click Complete to jump straight to payment. With a Stripe reader, the customer can tap while you're still confirming the total.
:::

:::tip
**Quick keys:** Use `Ctrl+K` to instantly focus the search bar without touching the mouse.
:::

:::warning
**Don't refresh the page** during an active card transaction. Wait for the payment confirmation before navigating away.
:::
