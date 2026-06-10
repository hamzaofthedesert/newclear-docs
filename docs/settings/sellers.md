---
id: sellers
title: Sellers
sidebar_label: Sellers
description: Manage sellers (vendors/suppliers) in Newclear — creating sellers, assigning SKUs, and seller reporting.
---

# Sellers

In Newclear, **Sellers** represent your vendors, suppliers, or consignment partners — the businesses or individuals who provide the products you sell. Assigning a seller to a product enables vendor-based filtering, reporting, and commission tracking.

**Location:** `/settings/sellers`

---

## What Are Sellers?

Sellers are your product sources — not your customers. Examples:
- A furniture manufacturer you buy from wholesale
- An individual who consigns items for sale in your store
- A brand whose products you carry
- A subsidiary or brand under your business umbrella

Every product can be assigned to exactly one seller. Sellers appear in:
- Product filters
- Reports (revenue by seller, margin by seller)
- Purchase history
- User assignment (linking a staff member to a seller)

---

## Sellers List

The Sellers page shows all configured sellers with:
- Seller name
- Contact information
- Number of products assigned
- Total inventory value

---

## Creating a Seller

1. Go to **Settings → Sellers**
2. Click **+ New Seller**
3. Fill in:

| Field | Description |
|-------|-------------|
| **Name** *(required)* | Business or individual name |
| **Code** | Short internal identifier (e.g., `ASHLEY`, `VENDOR01`) |
| **Email** | Primary contact email |
| **Phone** | Contact phone number |
| **Address** | Mailing/business address |
| **Website** | Vendor's website URL |
| **Notes** | Internal notes (payment terms, contact preferences, etc.) |
| **Commission Rate** | Default commission % if this seller earns commission on sales |

4. Click **Save**

---

## Assigning SKUs to a Seller

### During Product Creation
When creating or editing a product, select the seller in the **Organization** section.

### Bulk Assignment
1. On the Products List, select the products to assign
2. **Bulk Actions → Change Seller**
3. Choose the seller
4. Confirm

---

## Seller Management

### Viewing Seller Products
1. Open the seller from **Settings → Sellers**
2. Click the **Products** tab
3. All products assigned to this seller are listed with current stock and pricing

### Editing a Seller
1. Click the seller name or the edit icon
2. Update any fields
3. Click **Save**

### Deleting a Seller
1. Open the seller
2. Click **Delete Seller**
3. Confirm

:::warning
Deleting a seller does not delete the products assigned to them. Products will become seller-less (unassigned). Reassign them to another seller before deleting, or leave them as unassigned.
:::

---

## Seller Reporting

From **Sales & Finance → Reports → By Seller**:

- **Revenue by Seller** — How much revenue each seller's products generated
- **Units Sold by Seller** — Volume breakdown
- **Margin by Seller** — Gross profit per seller (requires cost data)
- **Inventory Value by Seller** — Current stock worth per vendor

These reports are useful for:
- Evaluating vendor performance
- Negotiating terms with top-performing suppliers
- Identifying slow-moving vendor lines

---

## Sellers and Users

You can associate a Newclear **user** with a **seller**. This is useful for:

- Sales staff who represent specific vendors
- Consignment sellers who have limited login access to view their own inventory and sales
- Tracking which staff member manages which vendor relationship

See [Users & Accounts](/docs/settings/users) for how to link a user to a seller.
