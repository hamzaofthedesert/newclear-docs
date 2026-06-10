---
id: promotions
title: Promotions Engine
sidebar_label: Promotions
description: Create and manage promotions in Newclear — percentage and fixed discounts, product scope, scheduling, and channel sync.
---

# Promotions Engine

Newclear's **Promotions Engine** lets you create time-bound discounts that automatically apply at POS checkout and sync to connected channels like Shopify. Set up a promotion once and it works everywhere — no manual price updates needed.

**Location:** `/sales/promotions`

---

## Promotions List

The Promotions page shows all promotions with:
- Name
- Type (Percentage / Fixed)
- Discount amount
- Scope (All Products / Category / Tag / Specific)
- Status (Scheduled, Active, Expired)
- Start / End dates

---

## Creating a Promotion (5-Step Modal)

Click **+ New Promotion** to open the creation modal. The process is divided into 5 clear steps:

---

### Step 1: Name

- **Promotion Name** *(required)* — Internal name (e.g., "Summer Sale 2024", "Clearance 30% Off")
- **Description** — Optional internal notes about the promotion

The promotion name is for your reference only — customers don't see it (they see the discount applied at checkout).

---

### Step 2: Type

Choose the promotion type:

| Type | Description | Example |
|------|-------------|---------|
| **Percentage Off** | Reduces price by a % of the original | 20% off → $100 item = $80 |
| **Fixed Amount Off** | Reduces price by a flat dollar amount | $15 off → $100 item = $85 |

Select the type and enter the discount value:
- For Percentage: Enter a number 1–100 (e.g., `20` for 20% off)
- For Fixed: Enter a dollar amount (e.g., `15.00` for $15 off)

---

### Step 3: Discount Scope (Products)

Choose which products this promotion applies to:

| Scope | Description |
|-------|-------------|
| **All Products** | Every product in your catalog is discounted |
| **By Category** | All products in a specific category |
| **By Tag** | All products with a specific tag |
| **Specific Products** | Hand-pick individual SKUs |

#### All Products
No additional configuration needed. Every active product participates.

#### By Category
1. Select the category from the dropdown
2. All current and future products in that category participate

#### By Tag
1. Enter a tag name
2. All products with that tag participate (regardless of category)
3. Useful for cross-category sales (e.g., "clearance" tag across all departments)

#### Specific Products
1. Search and select individual products
2. A **Live Count** shows how many products are currently selected
3. Add or remove products from the selection at any time

:::tip
The live count updates in real time as you adjust scope settings, so you always know exactly how many products will be discounted before you save.
:::

---

### Step 4: Schedule

Set when the promotion is active:

- **Start Date/Time** — When the promotion begins
- **End Date/Time** — When the promotion expires (leave blank for no end date)

The promotion engine handles activation and expiration automatically — no manual intervention needed.

**Promotion States:**
- **Scheduled** — Promotion is set up but hasn't started yet
- **Active** — Running now; discounts are being applied
- **Expired** — Past end date; no longer applying discounts

---

### Step 5: Review & Save

Review all promotion settings:
- Name and type
- Discount amount
- Product scope and live count
- Schedule

Click **Save Promotion** to create it.

---

## How Promotions Apply at POS

When a customer's cart contains an item covered by an active promotion:

1. The discount is applied automatically to the line item
2. The original price and discounted price are both shown in the cart
3. A promotion label (e.g., "20% Off — Summer Sale") appears on the line
4. The cart total reflects the discounted amount

No coupon code is needed — active promotions apply automatically.

---

## Promotions and Channel Sync

Active promotions sync to connected channels:

### Shopify
- Discounted price → Shopify `price`
- Original price → Shopify `compare_at_price` (strikethrough)
- Customers see "Sale" badge on products

### eBay, WooCommerce, Amazon, Walmart
- Discounted price is pushed as the current listing price
- When promotion ends, original price is restored

Sync happens automatically when the promotion activates and when it expires.

---

## Promotion Analytics Tab

Click on any promotion to view its **Analytics** tab:

- **Total Discounts Given** — Dollar amount discounted across all sales
- **Units Sold on Promotion** — How many items were sold at the promo price
- **Revenue Generated** — Total revenue from promoted sales
- **Participating Products** — Which specific products sold
- **Sales Over Time** — Chart of promotional sales by day

Use analytics to evaluate promotion effectiveness and plan future campaigns.

---

## Stacking Promotions

By default, only one promotion applies per product at a time. If multiple promotions target the same product:
- The **best discount** for the customer is applied
- The other promotion is not applied

This behavior can be configured — contact your Newclear admin for stacking rules.

---

## Editing and Pausing Promotions

- **Edit** — You can edit an active or scheduled promotion (changes apply immediately or at next sync)
- **Pause** — Temporarily suspend a promotion without deleting it
- **Resume** — Re-activate a paused promotion
- **Delete** — Remove a promotion permanently (restores original prices to all channels)
