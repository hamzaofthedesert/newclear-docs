---
id: walmart
title: Walmart Channel
sidebar_label: Walmart
description: Connect your Walmart Marketplace seller account to Newclear and sync catalog and inventory.
---

# Walmart Channel

Newclear supports Walmart Marketplace integration, allowing you to list products, sync inventory, and import orders from Walmart.com directly into your Newclear dashboard.

---

## Prerequisites

- An approved **Walmart Marketplace** seller account
- Walmart Marketplace API credentials (Client ID and Client Secret)
- Products that meet Walmart's content quality requirements

---

## Getting Walmart API Credentials

1. Log into your **Walmart Seller Center** at [seller.walmart.com](https://seller.walmart.com)
2. Go to **Settings → API Credentials**
3. Click **Generate API Keys** (or copy existing Client ID and Client Secret)
4. Note both the **Client ID** and **Client Secret**

---

## Connecting Walmart to Newclear

1. Go to **Channel Listings** → **+ Add Channel** → **Walmart**
2. Enter:
   - **Client ID** — From your Walmart Seller Center
   - **Client Secret** — From your Walmart Seller Center
3. Click **Connect**
4. Newclear validates the credentials against the Walmart API
5. On success, the Walmart channel is added

---

## Category Mapping

Walmart requires every product to be assigned to a Walmart item category. Newclear's category mapping tool lets you map your internal categories to Walmart's taxonomy:

1. Go to **Channel Listings → Walmart → Settings → Category Mapping**
2. Your Newclear categories are listed on the left
3. For each, select the matching Walmart category from the dropdown
4. Save the mappings

### Common Walmart Categories
- Furniture → Furniture > Living Room Furniture
- Electronics → Electronics > TV & Video
- Clothing → Clothing > Men's Clothing

Correct category mapping is required for listings to be accepted by Walmart.

---

## Listing Products on Walmart

1. Open a product in Newclear
2. Click **List on Walmart**
3. Configure required fields:
   - **Walmart Item Name** — Up to 200 characters
   - **Short Description** — Required by Walmart
   - **Key Features** — Bullet points (up to 5)
   - **Brand** — Must match Walmart's brand registry
   - **Category** — Auto-populated from your mapping
   - **Tax Code** — Walmart product tax category
4. Click **Submit to Walmart**

Walmart reviews new listings before they go live (typically 24–72 hours).

---

## Inventory Sync

- Inventory updates in Newclear are pushed to Walmart after every change
- When a Walmart sale occurs, the order is imported and stock decremented in Newclear
- Walmart requires inventory to be updated in whole units only (no fractional quantities)

---

## Price Sync

- Newclear price → Walmart's item price
- Promotional prices from Newclear's Promotions Engine sync to Walmart

---

## Order Import

Walmart orders are pulled into Newclear with source = "Walmart":
- Orders include customer name and shipping address
- Fulfillment status updates and tracking numbers can be pushed back to Walmart
- Tracking must be submitted to Walmart within their required timeframe to avoid late shipment penalties

---

## Walmart Channel Settings

| Setting | Description |
|---------|-------------|
| **Channel Protection** | Prevent Walmart from overwriting Newclear data |
| **Auto-acknowledge orders** | Automatically acknowledge new Walmart orders |
| **Shipping template** | Default shipping method for Walmart listings |
| **Return policy** | Walmart return window (typically 90 days for most categories) |

---

## Walmart Performance Metrics

Walmart monitors seller performance closely. Key metrics to maintain:
- **Order Defect Rate (ODR)** < 2%
- **On-Time Shipping Rate** > 99%
- **Valid Tracking Rate** > 99%

Failure to meet these metrics can result in listing removal or account suspension.
