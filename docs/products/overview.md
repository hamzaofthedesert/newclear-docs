---
id: overview
title: Products Overview
sidebar_label: Overview
description: Navigate the Newclear Products List — search, filter, bulk actions, status management, and tags.
---

# Products Overview

The **Products List** is your central catalog management page. Every SKU in your system lives here. From this page you can search, filter, create, edit, bulk-update, and organize your entire product catalog.

**Location:** `/products`

---

## Products List Layout

The Products List displays products in a sortable, filterable table with the following columns:

| Column | Description |
|--------|-------------|
| **Image** | Product thumbnail |
| **SKU** | Unique stock-keeping unit identifier |
| **Name** | Product title |
| **Price** | Current selling price |
| **Cost** | Your cost / landed cost |
| **Qty** | Total quantity on hand across all warehouses |
| **Status** | Active or Draft |
| **Tags** | Comma-separated labels |
| **Actions** | Edit, duplicate, delete |

---

## Searching Products

Use the **Search bar** at the top of the Products List to find products instantly. Search matches against:
- Product name
- SKU
- Barcode/UPC
- Tags

The search is live — results update as you type.

---

## Filtering Products

Click the **Filters** button to open the filter panel. Available filters include:

- **Status** — Active, Draft, or All
- **Category** — Filter by product category
- **Seller** — Filter by vendor/supplier
- **Tag** — Filter by one or more tags
- **Warehouse** — Show only products assigned to a specific warehouse
- **Condition** — New, Refurbished, Used, etc.
- **Price Range** — Min and max price
- **Stock Level** — In stock, out of stock, or low stock

Filters can be combined. Active filters are shown as chips at the top of the list for easy removal.

---

## Product Status

Every product has a **status** that controls its visibility and behavior:

### Active
- Product is live and available for sale
- Visible in the POS product search
- Eligible for channel listing sync
- Counted in Active Products dashboard widget

### Draft
- Product is saved but not yet published
- Hidden from POS product search
- **Not** synced to any connected channels
- Useful for products you're still configuring or haven't received in stock yet

To change a product's status, click the status badge in the list or open the product and toggle the status in the product form.

---

## Bulk Actions

Select multiple products using the **checkbox** on each row, then use the **Bulk Actions** dropdown to apply changes to all selected items at once:

| Bulk Action | What It Does |
|-------------|--------------|
| **Set Active** | Marks all selected products as Active |
| **Set Draft** | Marks all selected products as Draft |
| **Add Tag** | Appends a tag to all selected products |
| **Remove Tag** | Removes a specified tag from all selected products |
| **Change Category** | Assigns all selected to a new category |
| **Delete** | Permanently deletes selected products (with confirmation) |

:::warning
Deleting products is permanent and cannot be undone. If you need to hide a product without losing its history, set it to **Draft** instead of deleting it.
:::

---

## Tags

Tags are free-text labels you can attach to any product. They serve multiple purposes:

- **Organization** — Group related products (e.g., `clearance`, `seasonal`, `bundle`)
- **Filtering** — Filter the product list by tag
- **Promotions** — Target a promotion at all products with a specific tag
- **Channel Listings** — Use tags as metadata for channel exports

Tags are comma-separated and can be added/removed at any time without affecting product status.

---

## Sorting

Click any column header to sort the product list by that column. Click again to reverse the sort order. Sorting is available for:
- Name
- SKU
- Price
- Cost
- Quantity
- Status

---

## Pagination

By default, the Products List shows **25 products per page**. Use the pagination controls at the bottom to navigate pages or change the items-per-page count (25, 50, 100).

---

## Quick Actions

From the Actions column on each row:

- **Edit (pencil icon)** — Opens the product form for full editing
- **Duplicate** — Creates a copy of the product with a new SKU field ready to fill in
- **Delete (trash icon)** — Removes the product permanently (confirmation required)

---

## Next Steps

- [Creating Products](/docs/products/creating-products) — Add new items to your catalog
- [Inventory Management](/docs/products/inventory) — Adjust stock levels
- [Import/Export](/docs/products/import-export) — Bulk import products via CSV
- [AI Enhancement](/docs/products/ai-enhancement) — Auto-generate descriptions with AI
