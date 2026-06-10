---
id: sales-history
title: Sales History
sidebar_label: Sales History
description: View, filter, and export your complete sales history in Newclear.
---

# Sales History

The **Sales History** page gives you a complete, searchable record of every transaction — POS sales, channel orders, and refunds. Use it to look up individual sales, audit transactions, and export data for accounting or reporting purposes.

**Location:** `/sales/history`

---

## Sales History List

The list shows all completed transactions in reverse chronological order:

| Column | Description |
|--------|-------------|
| **Date/Time** | When the sale was completed |
| **Order #** | Unique sale reference |
| **Source** | POS, Shopify, eBay, etc. |
| **Customer** | Customer name or "Guest" |
| **Items** | Number of line items |
| **Total** | Sale total (after discounts) |
| **Payment** | Payment method used |
| **Status** | Completed, Refunded, Partially Refunded |

---

## Filtering Sales History

Click **Filters** to open the filter panel:

| Filter | Options |
|--------|---------|
| **Date Range** | Today, Yesterday, This Week, This Month, Custom |
| **Source** | POS, Shopify, eBay, WooCommerce, Amazon, Walmart |
| **Payment Method** | Cash, Card, Store Credit, Split |
| **Status** | Completed, Refunded, Partially Refunded |
| **Customer** | Search by customer name or email |
| **Product** | Show sales containing a specific SKU |
| **User** | Filter by which staff member processed the sale |
| **Amount Range** | Minimum and maximum sale total |

Multiple filters can be combined. Active filters appear as chips above the list.

---

## Searching Sales

Use the **Search** bar to quickly find a sale by:
- Order number
- Customer name or email
- Product SKU or name

---

## Viewing Sale Details

Click any sale to open the full detail view:

### Summary
- Order number, date, source badge
- Customer name and contact info
- Staff member who processed it

### Line Items
- Product name and SKU
- Quantity
- Unit price
- Discount applied
- Line total

### Payment Summary
- Subtotal
- Discounts
- Tax
- **Grand Total**
- Payment method(s) and amounts collected

### Refund History
If any refunds were issued on this sale, they appear here with:
- Refund date
- Amount refunded
- Items refunded
- Staff who processed the refund

---

## Exporting Sales History

### CSV Export
1. Apply any desired filters
2. Click **Export** → **CSV**
3. Choose the columns to include
4. Download the file

### Excel Export
Same process as CSV — select **Excel (.xlsx)** format.

### Export Fields Available
- Order number
- Date
- Customer name and email
- Source channel
- Each line item (product, qty, price)
- Discounts
- Tax
- Total
- Payment method
- Refund amounts

:::tip
For monthly accounting reconciliation, filter by "This Month" and export all completed sales. The export includes all the data your accountant needs.
:::

---

## Voiding a Sale

If a sale was recorded in error (e.g., test transaction), you can void it:

1. Open the sale detail
2. Click **Void Sale**
3. Enter your PIN to authorize
4. Confirm

:::warning
Voiding reverses inventory (returns stock) but does NOT process a card refund through Stripe. If the customer was charged, issue a refund first, then void.
:::

---

## Sales History and Reports

Sales History is the raw transaction log. For aggregated data, summaries, and charts, use the **Reports** section:

- **Sales History** = every individual transaction
- **Reports** = aggregated summaries, charts, date comparisons

See [Reporting](/docs/sales-finance/reporting) for the full reports documentation.
