---
id: customers
title: Customer Management
sidebar_label: Customers
description: Create and manage customers in Newclear — profile, purchase history, loyalty credits, and POS integration.
---

# Customer Management

Newclear includes a built-in CRM for tracking customer information, purchase history, and loyalty credit balances. Customers can be created from POS during a sale or managed directly from the Customers section.

**Location:** `/customers`

---

## Customer Profile

Each customer record contains:

| Field | Description |
|-------|-------------|
| **Name** | Full name |
| **Email** | Email address (used for receipts and notifications) |
| **Phone** | Mobile or landline |
| **Address** | Shipping/billing address |
| **Created Date** | When the customer was added |
| **Total Sales** | Lifetime purchase value |
| **Total Orders** | Number of completed transactions |
| **Credit Balance** | Current loyalty/store credit balance |
| **Referral Code** | If associated with the Affiliate program |
| **Notes** | Internal notes (not visible to customer) |

---

## Creating a Customer

### From the Customers Page
1. Go to **Customers** in the navigation
2. Click **+ New Customer**
3. Fill in the customer details (name required; email and phone recommended)
4. Click **Save**

### From POS (Quick Create)
1. During a sale, click **Select Customer** in the right panel
2. Click **+ New Customer**
3. Enter name and contact info
4. Click **Save** — the new customer is linked to the current sale immediately

The customer is added to the global customer list and available for future transactions.

---

## Searching Customers

On the Customers page, use the search bar to find customers by:
- Full name or partial name
- Email address
- Phone number
- Customer ID

Search is live and returns results as you type.

---

## Viewing Customer Sale History

Click on any customer to open their profile. The **Sales History** tab shows every transaction linked to this customer:

| Column | Description |
|--------|-------------|
| **Date** | Transaction date and time |
| **Order #** | Sale reference number |
| **Items** | Number of line items |
| **Total** | Sale total |
| **Payment Method** | How the sale was paid |
| **Status** | Completed, Refunded, etc. |

Click any sale to see the full transaction detail.

:::tip
Use customer sale history to spot loyal customers, identify purchase patterns, and handle customer service inquiries with full context.
:::

---

## Customer Credits & Loyalty Balance

Newclear's loyalty/credit system lets you reward customers with store credits that can be used at POS checkout.

### Viewing Credit Balance
The customer's current credit balance is shown prominently on their profile page. It's also visible in the POS when a customer is selected.

### Manually Adding Credits
1. Open the customer profile
2. Click **Add Credits** (or **Adjust Balance**)
3. Enter the credit amount to add
4. Add a note explaining why (optional)
5. Click **Save**

Credits can also be awarded automatically through the Loyalty Rules engine. See [Loyalty & Credits](/docs/sales-finance/loyalty-credits) for details.

### Redeeming Credits at POS
1. At checkout, select the customer
2. In the Payment section, select **Store Credit**
3. Available balance is displayed
4. Credits are applied (up to the order total)
5. If the credit balance exceeds the total, only the needed amount is used

---

## Editing Customer Information

1. Open the customer profile
2. Click **Edit**
3. Update any fields
4. Click **Save**

Changes are reflected immediately in all future transactions and reports.

---

## Merging Duplicate Customers

If the same customer was created twice (e.g., once in POS without email, once later with email):

1. Open one of the duplicate profiles
2. Click **Merge Customer**
3. Search for and select the duplicate
4. Choose which profile's data to keep (master record)
5. Confirm — the duplicate is merged and all sales history is consolidated

---

## Deleting a Customer

1. Open the customer profile
2. Click **Delete Customer**
3. Confirm the deletion

:::warning
Deleting a customer does NOT delete their transaction history — past sales remain in Sales History but will show as "Guest" or unlinked. Credit balances are also lost. Consider deactivating instead of deleting.
:::

---

## Customer Import

You can bulk-import customers via CSV:

1. Go to **Customers** → **Import**
2. Download the customer CSV template
3. Fill in your customer data (name, email, phone, credit balance)
4. Upload the CSV

This is useful when migrating from another POS system.

---

## Customer Segments & Filtering

Filter the customer list by:
- **Has Credits** — Customers with a positive balance
- **New This Month** — Customers added recently
- **High Value** — Top spenders by total sales
- **No Email** — Missing contact info (for cleanup)

Use these filters to run targeted promotions or outreach campaigns.
