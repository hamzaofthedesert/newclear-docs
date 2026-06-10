---
id: stock-check
title: Stock Check
sidebar_label: Stock Check
description: Use Newclear's Stock Check tool to verify and audit stock at specific bin locations using barcode scanning.
---

# Stock Check

The **Stock Check** page is a dedicated inventory auditing tool. Use it to verify that products are actually where your system says they are — a critical process for maintaining inventory accuracy.

**Location:** `/products/rescan_location`

---

## What Is Stock Check?

Stock Check (also called "rescan location") is a barcode-driven audit workflow. You bring a scanner to a specific bin location, scan every product in that bin, and Newclear compares what you scanned against what the system expects to be there.

This is different from a full inventory count — it's designed for **spot-checking a single location** quickly.

---

## When to Use Stock Check

- After receiving a new shipment into a bin
- When a pick is reported as "item not found" by warehouse staff
- As a random daily audit of a few locations
- When investigating a discrepancy between system and physical count
- Before a channel listing goes live (verify stock is actually there)

---

## How to Use Stock Check

### Step 1: Navigate to Stock Check
Go to `/products/rescan_location` or find **Stock Check** in your Operations navigation.

### Step 2: Select or Scan a Location
You have two options to specify the location you're checking:

**Option A: Scan the Bin QR Code**
If your bins have QR codes printed on them:
1. Click into the **Scan Location** field
2. Scan the bin's QR code
3. The location is auto-selected and the system shows expected products

**Option B: Type the Bin Name**
1. Click the **Location** dropdown
2. Type or select the bin name (e.g., `Aisle 3 / Shelf B`)
3. Confirm

### Step 3: View Expected Products
Once a location is selected, Newclear shows what the system expects to be in that bin:
- Product name and SKU
- Expected quantity

### Step 4: Scan Products in the Bin
Start scanning every product in the physical bin:
1. Ensure focus is on the **Scan Product** field
2. Scan each product's barcode
3. As each scan registers, the product is checked off in the list
4. A running count shows: Scanned vs. Expected

### Step 5: Review Results

After scanning all items, the Stock Check summary shows:

| Status | Meaning |
|--------|---------|
| ✅ **Match** | Physical count matches system count |
| ⚠️ **Over** | More units scanned than system expected |
| ❌ **Short** | Fewer units scanned than system expected |
| 🔍 **Not in System** | Scanned a barcode not assigned to this location |

### Step 6: Apply Corrections

For any discrepancies:

- **Short**: Click **Adjust** → remove the shortage from stock or investigate
- **Over**: Click **Adjust** → add the extra units to the bin's count
- **Not in System**: Click **Assign to Location** → update the product's bin assignment

Each correction is logged with a timestamp and the user who made the adjustment.

---

## Printing Bin QR Codes

For the fastest Stock Check workflow, print QR codes for each bin location:

1. Go to **Settings → Warehouses → [Warehouse] → Bins**
2. Select the bins you want to print
3. Click **Print QR Codes**
4. Affix the printed QR codes to the physical bin/shelf

Now warehouse staff can scan the bin QR to instantly load the expected inventory for that location.

---

## Stock Check History

Every stock check session is recorded:

1. Go to **Operations → Stock Check → History**
2. See all past sessions with:
   - Date and time
   - Location checked
   - User who performed the check
   - Number of discrepancies found
   - Whether corrections were applied

This audit trail is useful for identifying recurring problem locations or patterns of shrinkage.

---

:::tip
Build a daily habit of checking 3–5 random bin locations each morning. It takes 5 minutes and keeps your system inventory accurate over time.
:::
