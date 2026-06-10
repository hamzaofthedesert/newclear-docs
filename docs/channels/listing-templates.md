---
id: listing-templates
title: Listing Templates
sidebar_label: Listing Templates
description: Create and apply listing templates in Newclear to standardize channel listings across products.
---

# Listing Templates

**Listing Templates** let you define reusable configurations for channel listings. Instead of manually filling in the same fields for every product you list on a channel, you create a template once and apply it to many products.

**Location:** `/channels/templates`

---

## What Listing Templates Do

A listing template stores:
- Channel-specific settings (e.g., Shopify collection, eBay category)
- Default title and description formats (with variable substitution)
- Pricing rules (e.g., add 10% markup over Newclear price)
- Shipping and return policies (for eBay, Walmart)
- Item specifics and required attributes

Templates are applied when listing a product, pre-filling all the template fields automatically.

---

## Creating a Listing Template

1. Go to **Channel Listings → Templates**
2. Click **+ New Template**
3. Select the **Channel** this template is for (Shopify, eBay, Amazon, etc.)
4. Give the template a **Name** (e.g., "eBay Used Furniture" or "Shopify Electronics")

### Template Fields

#### General
- **Template Name** — Internal name for organization
- **Channel** — Which channel this applies to
- **Default Status** — Active or Draft when applied

#### Title Format
Define how the listing title is generated using variable substitution:

```
{name} - {condition} | Free Shipping
```

Available variables:
- `{name}` — Product name
- `{sku}` — Product SKU
- `{condition}` — Product condition
- `{category}` — Product category
- `{brand}` — Seller/vendor name
- `{price}` — Current price

#### Description Template
Provide a base description with variables:

```html
<h2>{name}</h2>
<p>Condition: {condition}</p>
<p>{description}</p>
<p>SKU: {sku}</p>
```

#### Pricing Rules
Set how the listing price is calculated:

| Rule | Description |
|------|-------------|
| **Use Newclear Price** | List at Newclear's current price |
| **Markup %** | Add a percentage to Newclear's price (e.g., +15%) |
| **Fixed Markup** | Add a fixed amount to Newclear's price (e.g., +$5.00) |
| **Fixed Price** | Override all products with a specific price |

#### Channel-Specific Fields (eBay Example)
- **eBay Category ID** — Category to list in
- **eBay Condition** — Condition code
- **Shipping Policy** — eBay business policy name
- **Return Policy** — eBay return policy
- **Payment Policy** — eBay payment terms
- **Item Specifics** — Pre-filled required attributes

#### Channel-Specific Fields (Shopify Example)
- **Shopify Collection** — Auto-add to this collection
- **Product Type** — Shopify product type field
- **Vendor** — Override vendor field
- **Tags** — Add these tags to all listings from this template

5. Click **Save Template**

---

## Applying a Template to a Product

### Single Product
1. Open a product
2. Click **List on [Channel]**
3. In the listing setup modal, click **Apply Template**
4. Select your template from the dropdown
5. All template fields are pre-filled
6. Modify any fields as needed for this specific product
7. Click **Publish**

### Bulk Listing with Template
1. On the Products List, select multiple products
2. **Bulk Actions → List on [Channel]**
3. Select a template to apply to all
4. Confirm

---

## Editing a Template

1. Go to **Channel Listings → Templates**
2. Click the template to open it
3. Make changes
4. Click **Save**

:::note
Editing a template does **not** retroactively update existing listings that used the template. Templates are applied at listing creation time only. To update existing listings, you need to edit them individually or re-list using the updated template.
:::

---

## Template Best Practices

- Create one template per product type per channel (e.g., "Shopify Sofas", "eBay Electronics Refurbished")
- Use title variables to ensure consistent, keyword-rich listing titles
- Set pricing rules with a small markup to account for channel fees
- Keep description templates clean and use `{description}` to pull in the Newclear product description automatically
