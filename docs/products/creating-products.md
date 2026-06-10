---
id: creating-products
title: Creating Products
sidebar_label: Creating Products
description: Learn how to create a new product in Newclear — all fields, sections, and the complete product form workflow.
---

# Creating Products

Adding a new product to Newclear is done through the **Product Form** — a structured page that captures every detail about an item, from pricing and images to warehouse location and AI-generated content.

**To create a product:** Go to **Products** → click **+ New Product** (or navigate to `/products/create`)

---

## Product Form Sections

The product form is organized into logical sections. You can fill them in order or jump between sections.

---

## Section 1: Basic Information

### SKU *(required)*
Your internal stock-keeping unit identifier. Must be unique across your catalog.

- Use a consistent naming convention (e.g., `FURN-SOFA-001`)
- SKUs are used for barcode generation and inventory tracking
- Once set, changing a SKU is not recommended as it may break channel listings

### Product Name *(required)*
The display name of the product. This appears in the POS, channel listings, and all reports.

:::tip
If you have the AI Enhancer Reactor connected, you can click **Generate with AI** to auto-create an optimized product title from the SKU or a brief description.
:::

### Description
A detailed product description. Supports rich text formatting (bold, lists, links).

- Used in channel listings (Shopify, eBay, etc.)
- AI Enhancer can generate this automatically
- Keep it accurate and keyword-rich for SEO

### Condition
Select the product condition from the dropdown:

- **New** — Brand new, unopened item
- **Refurbished** — Professionally restored
- **Used - Like New** — Minimal wear
- **Used - Good** — Normal wear
- **Used - Acceptable** — Significant wear but functional
- **For Parts** — Not fully functional

---

## Section 2: Pricing

### Price *(required)*
The selling price customers pay. Used as the POS default price and the base price for channel listings.

### MSRP (Manufacturer's Suggested Retail Price)
The recommended retail price set by the manufacturer. In Newclear:
- Displayed alongside the selling price when applicable
- Pushed to Shopify as `compare_at_price` (shows a strikethrough original price)
- Used by the Promotions Engine as a reference point

### Cost (Unit Cost)
Your landed cost per unit — what you paid for the item. Used for:
- Gross profit calculations in reports
- Margin analysis
- Not visible to customers or synced to channels

---

## Section 3: Images

Upload one or more product images:

1. Click **Upload Image** or drag and drop files onto the image zone
2. Supported formats: JPG, PNG, WebP (max 10MB per image)
3. The **first image** becomes the primary/featured image
4. Drag images to reorder them
5. Click the **X** on any image to remove it

Images are synced to channel listings (Shopify, eBay, etc.) when you list the product.

---

## Section 4: Organization

### Category
Assign the product to a category. Categories help organize your catalog and can be used as promotion targets.

- Click the Category dropdown and select an existing category
- Or create a new one inline (if permitted by your role)
- See [Categories](/docs/products/categories) for full category management

### Seller / Vendor
Assign this product to a seller (vendor/supplier). Useful for:

- Filtering products by supplier
- Tracking which vendor provided the item
- Seller-based reporting

See [Sellers](/docs/settings/sellers) for how to create and manage sellers.

### Tags
Add comma-separated tags to label this product:

```
clearance, living-room, ashley, bundle
```

Tags can be used for:
- Promotion targeting (apply a discount to all `clearance` items)
- Bulk filtering
- Channel listing metadata

---

## Section 5: Inventory & Location

### Warehouse
Select which warehouse this product is stocked in. If you have multiple warehouses, you can assign inventory to each separately.

### Bin Location
Specify the bin, shelf, or location within the warehouse (e.g., `Aisle 3, Shelf B`). This helps staff find products during picking.

### Quantity on Hand
Enter the current stock level. You can also adjust this later from the Inventory page.

### Reorder Point
The stock level at which Newclear should trigger a **Reorder Alert**. When quantity drops to or below this number, the product appears in the dashboard Reorder Alerts widget.

### Reorder Quantity
The suggested quantity to order when restocking. Informational only — does not auto-generate purchase orders.

---

## Section 6: Barcode / UPC

### UPC / Barcode
Enter the Universal Product Code or EAN barcode for this item. Used for:

- Barcode scanning in POS
- Inventory scanning in the Inventory page
- Import/export matching

If no barcode exists, Newclear can generate one based on the SKU.

---

## Saving the Product

When you're done filling in the form:

- Click **Save as Draft** to save the product without publishing it (status = Draft)
- Click **Save & Publish** to immediately make it Active and available for sale

:::note
A product in **Draft** status will not appear in POS searches and will not sync to connected channels. Use Draft when you're still configuring a product.
:::

---

## Duplicating a Product

If you need to create multiple similar products (e.g., the same item in different conditions or sizes):

1. Find the product in the Products List
2. Click the **Duplicate** icon in the Actions column
3. A copy of the product will be created in Draft status with all fields copied
4. Change the SKU, adjust any fields, then save

---

## AI-Assisted Product Creation

If the **AI Enhancer Reactor** is installed and an AI API key is configured, you can:

1. Enter a basic product name or SKU
2. Click **AI Enhance** in the product form
3. Newclear will generate:
   - An optimized product title
   - A detailed description
   - Relevant tags
4. Review and save the generated content

See [AI Enhancement](/docs/products/ai-enhancement) for full setup and usage instructions.
