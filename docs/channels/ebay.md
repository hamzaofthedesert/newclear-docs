---
id: ebay
title: eBay Channel
sidebar_label: eBay
description: Connect your eBay seller account to Newclear, list products, and sync inventory.
---

# eBay Channel

Newclear's eBay integration lets you list products from your Newclear catalog directly onto eBay, keep inventory levels synchronized, and import eBay orders into Newclear for unified order management.

---

## Connecting Your eBay Account

1. Go to **Channel Listings** → **+ Add Channel** → **eBay**
2. Click **Connect eBay Account**
3. You'll be redirected to eBay's OAuth authorization page
4. Sign in with your eBay seller credentials
5. Click **Agree** to grant Newclear access
6. You're redirected back to Newclear — your eBay account is connected

:::note
Newclear connects using eBay's Trading and Inventory APIs. Ensure your eBay account is a **seller account** with listing permissions enabled.
:::

---

## eBay Account Requirements

- Active eBay seller account in good standing
- Seller limits sufficient for the number of listings you plan to create
- For categories requiring approval (e.g., electronics), ensure category access is granted in eBay

---

## Listing Products on eBay

### Single Product Listing
1. Open a product in Newclear
2. Click **List on eBay** in the Channel Listings section
3. Configure the eBay-specific fields:

| Field | Description |
|-------|-------------|
| **eBay Title** | Up to 80 characters (eBay's limit) |
| **eBay Category** | Map to the appropriate eBay category |
| **Condition** | New, Used, Refurbished (maps to eBay condition IDs) |
| **Listing Duration** | Good Till Cancelled (GTC) recommended |
| **Shipping** | Select a shipping policy from your eBay account |
| **Returns** | Select a return policy |
| **Payment** | Select a payment policy |
| **Item Specifics** | Required attributes per category (brand, MPN, etc.) |

4. Click **List on eBay**

### Bulk Listing
1. Select products from the Products List
2. **Bulk Actions → List on eBay**
3. Apply a listing template (recommended for bulk operations)
4. Confirm

---

## eBay Listing Templates

eBay listings require category-specific item specifics and policies. Creating a **Listing Template** for your most common product types saves significant time.

See [Listing Templates](/docs/channels/listing-templates) for how to set these up.

---

## Inventory Sync

Once products are listed on eBay:
- Stock levels in Newclear are pushed to eBay after every inventory change
- When a product sells on eBay, the order is imported and inventory decremented in Newclear
- This prevents overselling across POS, Shopify, and eBay simultaneously

---

## Price Sync

- Newclear's product price is pushed to eBay as the Buy It Now price
- Price updates in Newclear propagate to eBay automatically
- Promotional prices from Newclear's Promotions Engine also sync to eBay

---

## eBay Order Import

1. eBay orders are pulled into Newclear's Orders section on sync
2. Each eBay order shows source = "eBay"
3. Customer info is stored or matched to existing customers
4. Fulfillment updates made in Newclear can be pushed back to eBay (marking the item as shipped with tracking)

---

## eBay Channel Settings

Navigate to **Channel Listings → eBay → Settings**:

| Setting | Description |
|---------|-------------|
| **Channel Protection** | Prevent eBay from overwriting Newclear prices/inventory |
| **Auto-end listings** | End eBay listings when Newclear stock reaches 0 |
| **Auto-relist** | Automatically relist when stock is restored |
| **Default Shipping Policy** | Applied to all listings without a specific policy |
| **Default Return Policy** | Applied to all listings without a specific policy |

---

## eBay Fees

eBay charges insertion fees and final value fees on sales. These are handled by eBay directly and are not tracked in Newclear. Consider these costs when setting prices for eBay listings.

---

## Troubleshooting eBay Listings

**Listing failed with "Missing item specifics"**
- eBay requires specific attributes for certain categories
- Open the failed product, click "Edit eBay Listing", and fill in all required item specifics

**Inventory not syncing to eBay**
- Check that Channel Protection is set appropriately
- Verify the eBay OAuth token hasn't expired (reconnect if needed)
- Check the sync log in **Channel Listings → eBay → Sync Log**
