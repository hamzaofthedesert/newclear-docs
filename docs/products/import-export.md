---
id: import-export
title: Import & Export
sidebar_label: Import / Export
description: Bulk import products via CSV or Google Sheets, and export your catalog from Newclear's Import/Export page.
---

# Import & Export

The **Import/Export** page lets you manage your product catalog in bulk — importing new products, updating existing ones, and exporting your full catalog for backup or external use.

**Location:** `/products/import-export`

---

## Import Methods

Newclear supports three import methods:

1. **CSV File Upload** — Upload a formatted `.csv` file directly
2. **Google Sheets** — Connect a Google Sheet and import from it
3. **Feed URL** — Provide a URL to a hosted CSV or JSON feed

---

## CSV Import

### Step 1: Download the Template
Click **Download CSV Template** to get a properly formatted spreadsheet with all supported column headers. Always use this template — it ensures column order and names match what Newclear expects.

### Template Columns

| Column | Required | Description |
|--------|----------|-------------|
| `sku` | ✅ | Unique product identifier |
| `name` | ✅ | Product name/title |
| `description` | | Product description (HTML allowed) |
| `price` | ✅ | Selling price (numeric, no currency symbol) |
| `msrp` | | Manufacturer's suggested retail price |
| `cost` | | Your unit cost |
| `quantity` | | Stock quantity |
| `category` | | Category name (must match existing category) |
| `seller` | | Seller name (must match existing seller) |
| `tags` | | Comma-separated tags |
| `condition` | | new / refurbished / used |
| `upc` | | Barcode/UPC |
| `warehouse` | | Warehouse name |
| `bin_location` | | Bin location identifier |
| `status` | | active / draft |
| `images` | | Comma-separated image URLs |
| `reorder_point` | | Reorder alert threshold |
| `weight` | | Weight (for shipping) |

### Step 2: Fill in Your Data
- Each row = one product
- Leave optional cells blank (do not delete columns)
- For **existing products**, include the `sku` — Newclear will update them
- For **new products**, include all required fields

### Step 3: Upload the CSV
1. Click **Choose File** or drag your CSV onto the upload zone
2. Newclear will parse the file and show a **preview** of the first 5 rows
3. Verify the column mapping looks correct

### Step 4: Configure Import Settings

Before confirming the import, choose your settings:

| Setting | Options | Description |
|---------|---------|-------------|
| **If product exists (by SKU)** | Update / Skip / Error | What to do with SKUs already in the system |
| **Status for new products** | Draft / Active | Default status for imported products |
| **Image import** | Yes / No | Whether to download and import image URLs |
| **Overwrite existing prices** | Yes / No | Whether price updates apply to existing products |

### Step 5: Run the Import
Click **Import** to begin. Newclear processes the file and shows:
- ✅ Products created
- 🔄 Products updated
- ⚠️ Rows with warnings (non-fatal issues)
- ❌ Rows with errors (skipped)

Download the **Import Report** to review any issues.

---

## Google Sheets Import

Connect a Google Sheet to import products directly:

### Setup
1. On the Import/Export page, click **Google Sheets**
2. Paste the **Google Sheets URL** or the Sheet ID
3. Make sure the sheet is set to **"Anyone with the link can view"** (public read access)
4. Newclear will fetch the sheet and map columns

### Using Google Sheets
The Google Sheet must use the same column headers as the CSV template. You can keep a "master catalog" sheet in Google Sheets and import from it on demand.

:::tip
Use Google Sheets for collaborative catalog management — multiple team members can update the sheet, then you do a single import into Newclear when ready.
:::

---

## Feed URL Import

For automated or scheduled imports from an external source:

1. Click **Feed URL**
2. Enter the URL of a hosted CSV or JSON product feed
3. Test the connection
4. Configure column mapping if the feed uses different column names
5. Set the import schedule (manual, daily, hourly)

Feed imports are useful for:
- Supplier product feeds
- ERP or warehouse system exports
- Automated catalog updates

---

## Exporting Products

### Export All Products
1. Go to **Products → Import/Export**
2. Click **Export Products**
3. Choose your format: **CSV** or **Excel**
4. Choose which columns to include (or select All)
5. Click **Download**

### Export Filtered Products
If you want to export only a subset:
1. Go to **Products List** and apply your filters
2. With filters active, click **Export** from the Actions menu
3. Only the filtered products will be exported

### Export Fields
You can choose to include or exclude any product field in the export, including custom fields and inventory data.

---

## Import / Export Log

All import and export operations are logged. To view history:

1. Go to Import/Export page
2. Click the **History** tab
3. See all past imports with timestamps, result counts, and downloadable reports

This lets you audit what was imported when, and by whom.

---

:::warning
Large imports (10,000+ products) may take several minutes to process. Do not close the browser tab during an import. You'll receive an in-app notification when the import completes.
:::
