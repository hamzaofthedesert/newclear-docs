---
id: shopify
title: Shopify Channel
sidebar_label: Shopify
description: Connect your Shopify store to Newclear — sync inventory, list products, and manage pricing including MSRP as compare_at_price.
---

# Shopify Channel

The Shopify integration is Newclear's most comprehensive channel connection. It supports full bidirectional inventory sync, product listing creation, price and MSRP sync, promotional price sync, and order import.

---

## Adding Your Shopify Store

1. Go to **Channel Listings** → **+ Add Channel** → **Shopify**
2. Enter your Shopify store URL (e.g., `yourstore.myshopify.com`)
3. Click **Connect**
4. You'll be redirected to Shopify's OAuth authorization screen
5. Click **Install App** to grant Newclear access
6. You're redirected back to Newclear — your store is now connected

:::note
Newclear requires the following Shopify scopes: `read_products`, `write_products`, `read_inventory`, `write_inventory`, `read_orders`, `write_orders`.
:::

---

## Shopify Location Mapping

Shopify uses **Locations** to track where inventory is stored. You need to map your Newclear warehouses to Shopify locations:

1. Go to **Channel Listings → Shopify → Settings → Locations**
2. Your Shopify locations are listed
3. For each Shopify location, select the matching Newclear warehouse
4. Save

When Newclear updates inventory, it pushes stock to the mapped location in Shopify. This ensures your Shopify inventory levels are accurate by warehouse.

---

## Listing Products on Shopify

### List a Single Product
1. Open any Newclear product
2. Scroll to **Channel Listings**
3. Click **List on Shopify**
4. Configure:
   - **Title** — Defaults to Newclear product name (editable)
   - **Description** — Defaults to Newclear description (editable)
   - **Images** — Select which images to push to Shopify
   - **Shopify Product Type** — Optional categorization
   - **Shopify Vendor** — Defaults to the Newclear seller name
   - **Tags** — Pushed as Shopify tags
5. Click **Publish to Shopify**

### Bulk List Products
1. On the Products List, select multiple products
2. Click **Bulk Actions → List on Shopify**
3. Choose default settings for the batch
4. Confirm

---

## Inventory Sync

Once a product is listed on Shopify:
- Inventory levels are synced from Newclear to Shopify automatically
- POS sales, manual adjustments, and imports in Newclear all trigger an inventory push to Shopify
- The sync is near real-time for POS sales (within 1–2 minutes)

### Inventory Protection
With Channel Protection ON, Shopify cannot reduce Newclear inventory. Stock adjustments made directly in Shopify are ignored; Newclear is always the source of truth.

---

## Price Sync

Product prices are synced from Newclear to Shopify:

- **Price** (selling price) → Shopify `price`
- **MSRP** → Shopify `compare_at_price` (shows as crossed-out original price)

When a product's price is updated in Newclear, it is pushed to Shopify automatically.

---

## Promotional Price Sync

When you run a promotion in Newclear's Promotions Engine:

1. Products on promotion receive a temporary reduced price in Newclear
2. The promo price is pushed to Shopify as the `price`
3. The original price becomes the `compare_at_price` (strikethrough)
4. Customers on Shopify see the sale price with the original crossed out
5. When the promotion ends, Newclear reverts the price and pushes it back to Shopify

:::tip
This creates a seamless "Sale" display on Shopify without manually editing prices in two places. Set it up once in Newclear's Promotions Engine and it works everywhere.
:::

---

## Order Import from Shopify

Newclear automatically imports orders placed on Shopify:

- Orders are synced every 15–30 minutes (or manually triggered)
- Each Shopify order creates an Order record in Newclear with source = "Shopify"
- Customer information is matched to existing Newclear customers or a new customer is created
- Inventory is decremented in Newclear when a Shopify order is imported

---

## Shopify Channel Settings

Access via **Channel Listings → Shopify → Settings**:

| Setting | Description |
|---------|-------------|
| **Channel Protection** | Prevent Shopify from overwriting Newclear data |
| **Auto-list New Products** | Automatically push new Active products to Shopify |
| **Sync Images** | Whether to push product images to Shopify |
| **Sync Tags** | Whether to push Newclear tags as Shopify tags |
| **Default Shopify Collection** | Auto-assign listed products to a Shopify collection |
| **Price Rounding** | Round synced prices to nearest $0.99 or $1.00 |

---

## Disconnecting Shopify

1. Go to **Channel Listings → Shopify → Settings**
2. Click **Disconnect Store**
3. Confirm

This removes Newclear's access token. Your Shopify products and inventory remain unchanged — they just won't sync anymore. To fully remove the app, go to your Shopify admin under **Apps**.
