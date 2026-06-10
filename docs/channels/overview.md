---
id: overview
title: Channel Listings Overview
sidebar_label: Overview
description: Connect Newclear to external sales channels — Shopify, eBay, Amazon, WooCommerce, and Walmart. Sync inventory and listings automatically.
---

# Channel Listings Overview

**Channel Listings** is Newclear's multi-channel commerce engine. Connect your Newclear catalog to external sales platforms and keep inventory, pricing, and product data synchronized across all of them from a single dashboard.

**Location:** `/channels`

---

## What Are Channel Listings?

When you connect an external channel (like Shopify or Amazon) to Newclear:

1. Your Newclear products become the **master catalog**
2. You push products to the channel as listings
3. When a sale occurs on the channel, Newclear pulls the order
4. When inventory changes in Newclear, it updates the channel listing

Think of Newclear as the **single source of truth** for all your product data. Channels are just storefronts that display your products.

---

## Supported Channels

| Channel | Listings | Inventory Sync | Order Sync | Price Sync |
|---------|----------|----------------|------------|------------|
| **Shopify** | ✅ | ✅ | ✅ | ✅ |
| **eBay** | ✅ | ✅ | ✅ | ✅ |
| **WooCommerce** | ✅ | ✅ | ✅ | ✅ |
| **Amazon** | ✅ | ✅ | ✅ | ✅ |
| **Walmart** | ✅ | ✅ | ✅ | ✅ |

---

## How Sync Works

### Inventory Sync
When a product's stock level changes in Newclear (through a sale, adjustment, or import), the updated quantity is pushed to all connected channels where that product is listed.

This prevents overselling across multiple channels.

### Price Sync
When you update a product's price in Newclear, the new price is pushed to connected channels. Promotional prices from the Promotions Engine also sync to channels — products on promotion show the discounted price on Shopify, for example.

### Order Sync
Orders placed on connected channels are pulled into Newclear's Orders section automatically. This gives you a unified order management view regardless of where the sale originated.

---

## Channel Protection Toggle

The **Channel Protection** toggle is a critical safety feature:

- **Protection ON** ✅ — Prevents the channel from overwriting Newclear data. Newclear is the master; channel updates are ignored.
- **Protection OFF** ❌ — Allows two-way sync. Changes made directly in Shopify/eBay etc. can overwrite Newclear data.

:::warning
We strongly recommend keeping Channel Protection **ON** unless you intentionally manage products directly in the channel. Having protection off can lead to data conflicts and price discrepancies.
:::

The protection toggle is available per-channel in the channel settings.

---

## Adding a Channel

1. Go to **Channel Listings** in the navigation
2. Click **+ Add Channel**
3. Select your channel from the list
4. Follow the channel-specific setup wizard (OAuth or API key)
5. Configure sync settings
6. Save

Detailed setup guides for each channel:
- [Shopify](/docs/channels/shopify)
- [eBay](/docs/channels/ebay)
- [WooCommerce](/docs/channels/woocommerce)
- [Amazon](/docs/channels/amazon)
- [Walmart](/docs/channels/walmart)

---

## Listing a Product on a Channel

Once a channel is connected:

1. Go to **Products → [Product]** and open the product
2. Scroll to the **Channel Listings** section
3. Click **List on [Channel Name]**
4. Configure any channel-specific fields
5. Save

Alternatively, from the channel's listing management page, you can select multiple products and list them in bulk.

---

## Listing Templates

Use **Listing Templates** to define standard settings (title format, description template, price rules) that apply when listing products on a channel. This saves time when listing many products.

See [Listing Templates](/docs/channels/listing-templates) for details.

---

## Sync Schedule

By default, Newclear syncs channels:
- **Inventory** — Every 15 minutes
- **Prices** — On change (real-time push)
- **Orders** — Every 15–30 minutes

You can also trigger a manual sync from each channel's settings page.

---

## Channel Status Indicators

On the Channel Listings page, each connected channel shows a status badge:

| Status | Meaning |
|--------|---------|
| 🟢 **Active** | Connected and syncing normally |
| 🟡 **Warning** | Syncing but with recent errors (click to see details) |
| 🔴 **Error** | Connection failed — action required |
| ⚫ **Disconnected** | Channel paused or OAuth expired |

If a channel shows an error, check the channel's settings page for the specific error message and resolution steps.
