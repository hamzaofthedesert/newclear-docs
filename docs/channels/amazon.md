---
id: amazon
title: Amazon Channel
sidebar_label: Amazon
description: Connect Amazon Seller Central to Newclear via OAuth, select marketplaces, and sync inventory.
---

# Amazon Channel

The Amazon integration connects your Newclear catalog to Amazon Seller Central, enabling inventory synchronization and order import across any Amazon marketplace worldwide.

---

## Prerequisites

- An **Amazon Seller Central** account (Individual or Professional plan — Professional recommended for API access)
- Your account must be approved for the marketplace(s) you want to sell on
- MWS (Marketplace Web Services) or SP-API access enabled on your seller account

---

## Connecting Amazon via OAuth

1. Go to **Channel Listings** → **+ Add Channel** → **Amazon**
2. Click **Connect Amazon Seller Central**
3. You'll be redirected to Amazon's SP-API OAuth authorization page
4. Sign in with your Seller Central credentials
5. Select the **marketplace(s)** you want to authorize (e.g., Amazon.com, Amazon.ca, Amazon.co.uk)
6. Click **Authorize**
7. You're redirected back to Newclear — your Amazon account is connected

:::note
Each marketplace region requires a separate authorization. If you sell on both Amazon.com (US) and Amazon.co.uk (UK), you'll go through the OAuth flow twice.
:::

---

## Marketplace Selection

After connecting, choose which marketplaces to enable for sync:

1. Go to **Channel Listings → Amazon → Settings → Marketplaces**
2. Toggle on the marketplaces you want to use:
   - Amazon.com (US)
   - Amazon.ca (Canada)
   - Amazon.co.uk (UK)
   - Amazon.de (Germany)
   - Amazon.fr (France)
   - Amazon.es (Spain)
   - Amazon.it (Italy)
   - Amazon.co.jp (Japan)
   - Amazon.com.au (Australia)
   - Amazon.in (India)
3. Save

---

## Listing Products on Amazon

Amazon product listings are more complex than other channels — they require:
- An existing ASIN (Amazon Standard Identification Number) to attach inventory to
- Or a full new product submission (brand registration required for most categories)

### Matching to Existing ASINs
1. Open a product in Newclear
2. Click **List on Amazon**
3. Enter the ASIN you want to match to
4. Map your SKU to that ASIN
5. Set price and quantity
6. Submit

### Creating New ASINs
New ASIN creation requires Amazon Brand Registry in most categories. Contact Amazon seller support for your specific category.

---

## Inventory Sync

Once products are matched to ASINs:
- Newclear pushes inventory updates to Amazon after every stock change
- Amazon's "fulfillable quantity" is updated to match Newclear's on-hand quantity
- Prevents overselling across Amazon and other channels

---

## Price Sync

- Newclear `price` is pushed as the Amazon listing price
- Promotional prices from the Promotions Engine sync to Amazon as sale prices

---

## Order Import

Amazon orders are pulled into Newclear:
- Source = "Amazon"
- Orders include customer info (note: Amazon often anonymizes customer email addresses)
- Fulfillment updates (shipped + tracking) can be pushed back to Amazon

---

## Amazon Channel Settings

| Setting | Description |
|---------|-------------|
| **Channel Protection** | Prevent Amazon price changes from affecting Newclear |
| **FBA Support** | Track FBA (Fulfilled by Amazon) inventory separately |
| **Auto-submit tracking** | Push shipping tracking numbers to Amazon automatically |
| **Marketplace currency** | Handle multi-currency pricing per marketplace |

---

## Amazon Fees

Amazon charges referral fees and, for FBA, fulfillment fees. These are not tracked in Newclear and are handled by Amazon directly.

---

## Common Amazon Issues

**"Invalid ASIN" error**
- Verify the ASIN exists and is active on the target marketplace
- Some ASINs are region-specific

**Inventory not updating**
- Amazon can take 15–60 minutes to reflect inventory changes
- Check Amazon's SP-API status page for any ongoing issues

**Orders not importing**
- Ensure SP-API permissions include `orders:read`
- Re-authorize if the token has expired
