---
id: categories
title: Product Categories
sidebar_label: Categories
description: Create and manage product categories in Newclear. Organize your catalog with system and custom categories.
---

# Product Categories

Product categories help you organize your catalog into logical groups. Categories are used for filtering in the Products List, targeting promotions, channel listing organization, and reporting.

**Location:** `/products/categories`

---

## Categories Overview

The Categories page shows all categories in your system in a hierarchical list. Each category displays:

- **Name** — The category label
- **Parent Category** — For nested/sub-categories
- **Product Count** — How many products are assigned to this category
- **Type** — System or Custom
- **Actions** — Edit, delete

---

## System Categories vs. Custom Categories

### System Categories
System categories are created automatically or pre-loaded with your account. They may include standard retail categories relevant to your industry. System categories:

- **Cannot be deleted** (they have a lock icon)
- Can be renamed in most cases
- Serve as the foundation for channel category mapping

### Custom Categories
Custom categories are created by you to match your specific business structure. Examples:
- `Living Room Furniture`
- `Electronics - Refurbished`
- `Clearance Items`
- `Seasonal - Winter`

Custom categories can be:
- Created freely
- Nested under parent categories
- Edited or deleted at any time
- Used for promotion targeting

---

## Creating a Category

1. Go to **Products → Categories**
2. Click **+ New Category**
3. Fill in the form:
   - **Name** *(required)* — The category label
   - **Parent Category** — Optional. Select a parent to create a sub-category
   - **Description** — Optional notes about this category
   - **Image** — Optional thumbnail for the category
4. Click **Save**

The new category is immediately available for assignment in the Product Form.

---

## Creating Sub-Categories (Nested Categories)

Newclear supports multi-level category hierarchies:

```
Furniture
├── Living Room
│   ├── Sofas
│   └── Coffee Tables
├── Bedroom
│   ├── Beds
│   └── Dressers
└── Office
    └── Desks
```

To create a sub-category:
1. Click **+ New Category**
2. In the **Parent Category** field, select the parent
3. Save

Sub-categories inherit their parent's context for filtering and reporting.

---

## Assigning Products to Categories

### From the Product Form
1. Open any product (edit mode)
2. Scroll to the **Organization** section
3. Click the **Category** dropdown
4. Search or scroll to your category
5. Save the product

### From the Products List (Bulk)
1. Select multiple products using the checkboxes
2. Open **Bulk Actions** → **Change Category**
3. Choose the new category
4. Confirm

---

## Editing a Category

1. Find the category in the Categories list
2. Click the **Edit (pencil)** icon
3. Update the name, parent, or description
4. Click **Save**

:::note
Renaming a category updates it everywhere — the Products List filter, Promotions engine, and any channel listing references that use this category.
:::

---

## Deleting a Category

1. Find the category in the list
2. Click the **Delete (trash)** icon
3. Confirm the deletion

:::warning
Deleting a category does NOT delete the products in it. Products will become **uncategorized** (assigned to no category). You should reassign those products before deleting their category.
:::

---

## Categories in Promotions

When creating a promotion, you can target it at a specific category:

- "Apply 20% off all products in the **Living Room** category"

The promotion engine dynamically includes all products in that category at time of checkout.

See [Promotions](/docs/sales-finance/promotions) for details.

---

## Categories in Channel Listings

Some channels (like eBay and Amazon) require products to be mapped to their own category systems. Newclear's internal categories can be mapped to external marketplace categories during channel setup.

See [Channel Listings](/docs/channels/overview) for more.
