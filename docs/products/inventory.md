---
id: inventory
title: Inventory Management
sidebar_label: Inventory
description: Manage stock levels, scan barcodes, adjust quantities, and assign bin locations in Newclear's Inventory page.
---

# Inventory Management

The **Inventory** page is your dedicated stock management workspace. Use it to view real-time stock levels across all warehouses, scan barcodes to look up items, manually adjust quantities, and assign or update bin locations.

**Location:** `/products/inventory`

---

## Inventory Page Overview

The Inventory page shows a table of all products with their current stock data:

| Column | Description |
|--------|-------------|
| **SKU** | Product identifier |
| **Product Name** | Display name |
| **Warehouse** | Assigned warehouse |
| **Bin Location** | Shelf/bin within the warehouse |
| **Qty on Hand** | Current stock level |
| **Reorder Point** | Alert threshold |
| **Last Updated** | When stock was last modified |

---

## Barcode Scanning

Newclear's inventory page supports **live barcode scanning** for rapid lookups without typing.

### How to Scan
1. Connect a USB or Bluetooth barcode scanner to your device
2. Open the Inventory page
3. Click inside the **Scan Barcode** field (or press the shortcut key)
4. Scan a product's barcode
5. The product row highlights immediately with its current stock details

### What Scanning Does
- Jumps directly to the product in the inventory list
- Pre-fills an adjustment form so you can quickly update the quantity
- Works with standard 1D barcodes (Code 128, UPC-A, EAN-13) and QR codes

:::tip
Keep a barcode scanner at your receiving area. When a shipment arrives, scan each item to quickly view and update its stock count.
:::

---

## Adjusting Stock

You can update stock levels manually at any time without going through a sale or receiving workflow.

### To Adjust a Single Product:
1. Find the product in the Inventory list (or scan its barcode)
2. Click the **Edit / Adjust** icon on the row
3. An adjustment panel appears with:
   - **Current Quantity** (read-only)
   - **Adjustment Type**: Add, Remove, or Set
   - **Adjustment Quantity**: Enter the amount
   - **Notes**: Optional reason for adjustment (e.g., "Damaged goods removed", "Received shipment")
4. Click **Save** to apply

### Adjustment Types

| Type | Behavior |
|------|----------|
| **Add** | Increases stock by the entered amount (`current + adjustment`) |
| **Remove** | Decreases stock by the entered amount (`current - adjustment`) |
| **Set** | Sets stock to exactly the entered amount (full override) |

:::warning
Use **Set** carefully — it will override the current count entirely. Use **Add** or **Remove** for incremental adjustments to maintain an audit trail.
:::

---

## Bin Locations

Bin locations help your warehouse staff find products quickly by specifying exactly where an item lives in your physical space.

### Assigning a Bin Location
1. Open any product's inventory row
2. Click **Edit Bin Location**
3. Type the bin identifier (e.g., `Aisle 3 / Shelf B / Bin 12`)
4. Click Save

### Bin Location Best Practices

- Use a consistent format across all products: `[Zone]-[Aisle]-[Shelf]-[Bin]`
  - Example: `W1-A03-B02` = Warehouse 1, Aisle 3, Shelf B, Position 2
- Include bin location in product labels and shelf tags
- Use the **Stock Check** tool (`/products/rescan_location`) to audit bin accuracy

---

## Warehouse Assignment

If your business operates multiple warehouses, you can assign products to specific locations:

1. Open the product's inventory record
2. Click the **Warehouse** dropdown
3. Select the warehouse where this stock resides
4. Save the assignment

Products can exist in multiple warehouses with separate quantity records per location. The Products List shows **total** quantity across all warehouses.

---

## Filtering the Inventory List

Use filters to narrow down the inventory view:

- **Warehouse** — Show only items in a specific warehouse
- **Low Stock** — Show only items at or below reorder point
- **Out of Stock** — Show items with qty = 0
- **Bin Location** — Filter by bin assignment status

---

## Bulk Inventory Updates

For large-scale stock adjustments, use the **Import/Export** feature:

1. Go to **Products → Import/Export**
2. Download the inventory CSV template
3. Fill in new stock quantities
4. Upload the CSV
5. Quantities are updated in bulk

See [Import/Export](/docs/products/import-export) for detailed instructions.

---

## Inventory History / Audit Log

Every stock adjustment is logged with:
- Timestamp
- User who made the change
- Adjustment type and amount
- Notes

To view the history for a product, open the product detail page and look for the **Inventory Log** tab.

---

## Reorder Alerts

When a product's quantity drops to or below its **Reorder Point**, it appears in:

1. The **Reorder Alerts** dashboard widget
2. The **Low Stock** inventory filter

Reorder points are set per product in either the [Product Form](/docs/products/creating-products) or the Inventory adjustment panel.
