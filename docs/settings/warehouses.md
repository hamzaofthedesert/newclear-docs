---
id: warehouses
title: Warehouses
sidebar_label: Warehouses
description: Create and manage warehouses and bin locations in Newclear for multi-location inventory control.
---

# Warehouses

Newclear supports **multi-warehouse inventory management**. Each warehouse represents a physical location where you store inventory — whether that's your main store stockroom, an off-site warehouse, a fulfillment center, or a consignment location.

**Location:** `/settings/warehouses`

---

## Warehouses Overview

The Warehouses page shows all configured locations with:
- Warehouse name
- Address
- Number of products assigned
- Total stock value (if cost data is populated)
- Status (Active / Inactive)

---

## Creating a Warehouse

1. Go to **Settings → Warehouses**
2. Click **+ New Warehouse**
3. Fill in:

| Field | Description |
|-------|-------------|
| **Name** *(required)* | e.g., "Main Store", "Bailey Warehouse", "Overflow Storage" |
| **Code** | Short identifier (e.g., `MAIN`, `BAY`, `OVF`) used in reports |
| **Address** | Physical address of the warehouse |
| **Manager** | Assign a Newclear user as the warehouse manager |
| **Notes** | Internal operational notes |

4. Click **Save**

The new warehouse is immediately available for product assignment and inventory operations.

---

## Bin Locations

**Bins** are sub-locations within a warehouse — shelves, rows, aisles, pallets, or zones. They help your team locate products quickly without searching the entire warehouse.

### Creating Bin Locations

Bins can be created in two ways:

#### Option A: Manually via Settings
1. Open a warehouse from **Settings → Warehouses**
2. Click the **Bins** tab
3. Click **+ Add Bin**
4. Enter a bin name/code (e.g., `A1-01`, `Shelf-B-3`, `Zone-Cold-5`)
5. Optional: Description or capacity notes
6. Save

#### Option B: Ad-hoc during Product Assignment
When assigning a product to a bin:
1. If the bin doesn't exist yet, type the new bin name
2. Click **Create "[bin name]"** in the dropdown
3. The bin is created and assigned simultaneously

### Bin Naming Conventions

Consistency matters. Common formats:
- `[Zone]-[Aisle]-[Shelf]-[Position]` → `A-03-B-12`
- `[Row][Column][Level]` → `R02C05L01`
- Simple labels → `Shelf A`, `Pallet 7`, `Bin 14`

Whatever format you choose, document it and use it consistently across all warehouses.

---

## Assigning Products to a Warehouse

### Single Product
1. Open the product in edit mode
2. In the **Inventory & Location** section, select the **Warehouse**
3. Optionally select or enter a **Bin Location**
4. Save the product

### Bulk Assignment
1. On the Products List, filter by the products you want to move
2. Select all (checkbox in header)
3. **Bulk Actions → Change Warehouse**
4. Select the target warehouse
5. Confirm

---

## Multi-Warehouse Inventory

Products can have separate inventory records per warehouse:

- A product can have 10 units in "Main Store" and 50 units in "Bailey Warehouse"
- The **Products List** shows total quantity across all warehouses
- The **Inventory page** lets you filter by warehouse to see per-location stock

### Transferring Stock Between Warehouses

To move stock from one warehouse to another:

1. Go to **Products → Inventory**
2. Find the product
3. Click **Transfer Stock**
4. Select:
   - **From Warehouse** — Source
   - **To Warehouse** — Destination
   - **Quantity** — How many units to move
5. Confirm

The transfer is logged in the inventory history.

---

## Channel Mapping

When using multi-warehouse, map each warehouse to the corresponding location in your connected channels:

- **Shopify** — Map Newclear warehouses to Shopify Locations
- **Amazon** — Map to FBA or merchant-fulfilled warehouses

This ensures inventory levels sync to the correct channel location.

---

## Deactivating a Warehouse

If you no longer use a warehouse:
1. Open it in Settings → Warehouses
2. Click **Deactivate**

Deactivated warehouses are hidden from the inventory interface but preserved for historical records. Products with stock in a deactivated warehouse retain their inventory data.

:::warning
Before deactivating, transfer all remaining stock to an active warehouse or adjust stock to 0. Leaving stock in a deactivated warehouse can cause discrepancies in your total on-hand counts.
:::
