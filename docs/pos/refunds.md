---
id: refunds
title: Refunds
sidebar_label: Refunds
description: Issue full and partial refunds in Newclear POS, including PIN authorization, inventory effects, and affiliate commission handling.
---

# Refunds

Newclear supports full and partial refunds directly from the POS or Sales History. Refunds restore stock, reverse affiliate commissions (for full refunds), and process card refunds back through Stripe Terminal automatically.

---

## Accessing the Refund Flow

### From Sales History
1. Go to **Sales & Finance → Sales History**
2. Find the sale you want to refund
3. Click the sale to open the detail view
4. Click **Issue Refund**

### From POS
1. Open the POS
2. Click **Refund** or **Returns** in the POS menu
3. Search for the original sale by order number, customer name, or date
4. Select the sale to refund

---

## PIN Authorization for Refunds

To prevent unauthorized refunds, Newclear requires **PIN authorization** before processing any refund.

1. After selecting the sale to refund, a **PIN prompt** appears
2. Enter your user PIN (set up in Security settings)
3. If you don't have a PIN, only a Super Admin or authorized manager can proceed

:::note
PIN requirements for refunds can be configured by Super Admins in the permissions settings. Some roles may bypass the PIN requirement if explicitly granted that permission.
:::

---

## Full Refund

A full refund reverses the entire transaction:

1. Open the sale and click **Issue Refund**
2. Enter your PIN
3. Confirm you want to refund the **full amount**
4. Click **Process Full Refund**

### What Happens on a Full Refund:
- ✅ The full sale amount is returned to the customer
- 📦 All items are restocked to inventory (quantities restored)
- 🚫 Any **affiliate commission** tied to this sale is **voided** (set to $0)
- 💳 If paid by card (Stripe), the refund is sent to the original card automatically
- 💰 If paid by store credit, credits are returned to the customer's balance

---

## Partial Refund

A partial refund lets you refund specific items or a custom dollar amount:

1. Open the sale and click **Issue Refund**
2. Enter your PIN
3. Choose **Partial Refund**
4. Two options:

### Option A: Refund by Line Item
- Check the items you want to refund
- Adjust quantities if needed (e.g., refund 1 of 3 units)
- Refunded items are restocked individually

### Option B: Refund Custom Amount
- Enter a specific dollar amount to refund
- No inventory restock occurs (amount-only refund)
- Use this for service fees, shipping adjustments, or goodwill refunds

5. Click **Process Partial Refund**

### What Happens on a Partial Refund:
- 💵 The specified amount is returned to the customer
- 📦 Refunded line items are restocked (if using line-item refund)
- 🏷️ Affiliate commission is **not automatically voided** on partial refunds — only full refunds void commissions

---

## Refund Effects on Inventory

| Refund Type | Inventory Effect |
|-------------|-----------------|
| **Full Refund** | All items restocked to their original warehouse/bin |
| **Partial (line items)** | Only refunded items are restocked, at specified quantities |
| **Partial (amount only)** | No inventory change |

If a product has been discontinued or deleted since the sale, Newclear will attempt to restock it but may flag a warning if the product no longer exists.

---

## Refund Effects on Affiliate Commissions

The Affiliate Reactor tracks commission per sale. The rule is straightforward:

| Scenario | Commission Outcome |
|----------|--------------------|
| **Full Refund** | Commission voided (set to $0, marked as Reversed) |
| **Partial Refund** | Commission unchanged |
| **Exchange (refund + new sale)** | New sale creates a new commission; original is voided |

This policy ensures affiliates are only compensated for sales that result in actual revenue.

---

## Card Refunds via Stripe

If the original payment was made by card through Stripe Terminal:

1. Newclear automatically initiates a Stripe refund to the original card
2. No manual action is needed in the Stripe dashboard
3. Stripe processes the refund within **5–10 business days** (varies by issuing bank)
4. The Stripe refund ID is recorded on the sale record for reference

:::tip
If the original card has been cancelled or the customer used a new card, contact Stripe support to handle the refund manually. Newclear will still record the refund event internally.
:::

---

## Viewing Refund History

All refunds are logged in Sales History. To view refunds:

1. Go to **Sales & Finance → Sales History**
2. Filter by **Type: Refund** or look for the **Refunded** status badge on sales
3. Click any refunded sale to see the full refund details including:
   - Refund amount
   - Refund date and time
   - User who processed the refund
   - Items refunded
   - Stripe refund ID (for card payments)
