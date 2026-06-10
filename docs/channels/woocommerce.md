---
id: woocommerce
title: WooCommerce Channel
sidebar_label: WooCommerce
description: Connect your WooCommerce store to Newclear and sync products and inventory.
---

# WooCommerce Channel

Newclear integrates with WooCommerce via the REST API, enabling you to push products from Newclear to your WordPress/WooCommerce store and keep inventory synchronized in real time.

---

## Prerequisites

- A WordPress site with **WooCommerce** installed and active
- WooCommerce REST API enabled
- A WooCommerce **API Key** (Consumer Key + Consumer Secret)

---

## Generating WooCommerce API Keys

1. In your WordPress admin, go to **WooCommerce → Settings → Advanced → REST API**
2. Click **Add Key**
3. Set:
   - **Description**: Newclear Integration
   - **User**: Select your admin user
   - **Permissions**: Read/Write
4. Click **Generate API Key**
5. Copy the **Consumer Key** and **Consumer Secret** (you won't see these again)

---

## Connecting WooCommerce to Newclear

1. Go to **Channel Listings** → **+ Add Channel** → **WooCommerce**
2. Enter:
   - **Store URL**: `https://yourstore.com`
   - **Consumer Key**: Paste from above
   - **Consumer Secret**: Paste from above
3. Click **Connect**
4. Newclear tests the connection — if successful, the channel is added

---

## Product Sync

### Pushing Products to WooCommerce
1. Open a product in Newclear
2. Scroll to **Channel Listings**
3. Click **List on WooCommerce**
4. Configure:
   - **Product Type**: Simple, Variable, etc.
   - **WooCommerce Category**: Select or create
   - **Short Description**: For WooCommerce product card
5. Click **Publish**

The product is created in WooCommerce with your Newclear name, description, images, price, and SKU.

### Inventory Sync
- When stock changes in Newclear, the WooCommerce product's stock quantity is updated
- WooCommerce "In Stock" / "Out of Stock" status is also updated automatically
- Channel Protection prevents WooCommerce from pushing stock changes back to Newclear

---

## Price Sync

- Newclear's `price` → WooCommerce `regular_price`
- Newclear's promo price → WooCommerce `sale_price`
- Newclear's MSRP can be mapped to a WooCommerce custom field

When a promotion ends in Newclear, the WooCommerce `sale_price` is cleared and `regular_price` is restored.

---

## Order Import

WooCommerce orders are imported into Newclear on sync:
- New orders appear in Newclear with source = "WooCommerce"
- Order status changes in Newclear can push back to WooCommerce (e.g., marking "Completed")
- Customer data is matched or created

---

## WooCommerce Channel Settings

| Setting | Description |
|---------|-------------|
| **Channel Protection** | Prevent WooCommerce from overwriting Newclear data |
| **Auto-list New Products** | Push all new Active products to WooCommerce automatically |
| **Sync Images** | Push product images to WooCommerce media library |
| **Virtual Products** | Handle downloadable/virtual products (no inventory) |
| **Tax Class** | Default tax class for synced products |

---

## Troubleshooting

**Connection failed — 401 Unauthorized**
- Verify Consumer Key and Secret are correct
- Ensure the WooCommerce API user has admin permissions
- Confirm REST API is enabled in WooCommerce settings

**Products not appearing in WooCommerce**
- Check that the product status in WooCommerce is "Published"
- Verify images were uploaded successfully
- Review the sync log for errors

**Inventory not syncing**
- Confirm "Manage stock" is enabled on the WooCommerce product
- Check Channel Protection settings
