---
id: overview
title: Orders Overview
sidebar_label: Orders
description: Manage and track orders in Newclear — order statuses, channel sync, fulfillment workflow, and order detail view.
---

# Orders Overview

The **Orders** section gives you a unified view of all orders across every sales channel — whether they came through your POS, Shopify, eBay, Amazon, WooCommerce, or any other connected channel. From here, you can track fulfillment status, update order states, and manage the complete order lifecycle.

**Location:** `/orders`

---

## Orders List

The Orders List displays all orders in reverse chronological order. Each row shows:

| Column | Description |
|--------|-------------|
| **Order #** | Unique order identifier |
| **Source** | Where the order came from (POS, Shopify, eBay, etc.) |
| **Customer** | Customer name or "Guest" |
| **Date** | Order date and time |
| **Items** | Number of line items |
| **Total** | Order value |
| **Payment Status** | Paid, Pending, Partial, Refunded |
| **Fulfillment Status** | Pending, Processing, Shipped, Delivered, Cancelled |
| **Actions** | View, update status |

---

## Order Statuses

### Payment Status

| Status | Meaning |
|--------|---------|
| **Paid** | Payment collected in full |
| **Pending** | Awaiting payment |
| **Partial** | Partially paid (deposit or partial payment collected) |
| **Refunded** | Fully refunded |
| **Partially Refunded** | Partial refund issued |
| **Voided** | Order cancelled before payment |

### Fulfillment Status

| Status | Meaning |
|--------|---------|
| **Pending** | Order received, not yet started |
| **Processing** | Being picked, packed, or prepared |
| **Shipped** | Dispatched to customer (tracking number may be present) |
| **Delivered** | Confirmed delivery |
| **Cancelled** | Order cancelled |
| **On Hold** | Awaiting action (customer issue, stock, etc.) |

---

## Order Sources

Orders in Newclear come from:

- **POS** — Transactions completed at the Point of Sale
- **Shopify** — Orders synced from your connected Shopify store
- **eBay** — Orders synced from eBay listings
- **WooCommerce** — Orders synced from WooCommerce
- **Amazon** — Orders synced from Amazon Seller Central
- **Walmart** — Orders synced from Walmart Marketplace
- **Manual** — Orders created directly in Newclear

Each order shows its source badge so you always know where it originated.

---

## Syncing Orders from Channels

Newclear automatically syncs orders from connected channels on a regular schedule (typically every 15–30 minutes). You can also trigger a manual sync:

1. Go to **Channel Listings → [Channel Name]**
2. Click **Sync Now**

Or from the Orders page:
1. Click the **Sync Orders** button in the top toolbar
2. Newclear fetches the latest orders from all connected channels

:::note
Order sync pulls new orders and updates the status of existing ones. Historical orders from before you connected a channel are not retroactively imported (depending on channel API limits).
:::

---

## Updating Order Status

You can manually update the fulfillment status of any order:

1. Click the order to open its detail view
2. Click **Update Status** or the status dropdown
3. Select the new fulfillment status
4. Optionally add a note (e.g., tracking number)
5. Click **Save**

For Shopify and WooCommerce orders, Newclear can push the status update back to the channel so the customer receives a fulfillment notification from the original channel.

---

## Order Detail View

Click any order to see the full detail:

### Header
- Order number, source badge, date
- Customer info (name, email, phone)
- Payment status and fulfillment status badges

### Line Items
- Product name, SKU, condition
- Quantity ordered
- Unit price and line total
- Discount applied (if any)

### Financials
- Subtotal
- Discounts
- Shipping (if applicable)
- Tax
- **Total**
- Payment method and collected amount

### Fulfillment
- Warehouse assigned
- Tracking number (if entered)
- Shipment notes

### History Log
- Every status change with timestamp and user

---

## Filtering Orders

Use the filter panel to narrow the orders list:

- **Source** — Filter by channel (POS, Shopify, eBay, etc.)
- **Payment Status** — Paid, Pending, Refunded
- **Fulfillment Status** — Any fulfillment state
- **Date Range** — From/to date picker
- **Customer** — Filter by customer name or email
- **Product** — Filter orders containing a specific SKU

---

## Dashboard Order Widgets

Two dashboard widgets are directly tied to the Orders system:

- **Pending Sales Payments** — Orders where payment is not yet collected
- **Pending Sales Delivery** — Paid orders awaiting fulfillment

See [Dashboard Overview](/docs/dashboard/overview) for details.
