---
id: product-flyer
title: Product Flyer Reactor
sidebar_label: Product Flyer
description: Design and print product promotional flyers using Newclear's Product Flyer Reactor.
---

# Product Flyer Reactor

The **Product Flyer Reactor** gives you a built-in flyer designer for creating professional product promotional materials. Design a template once, then generate flyers for any product in seconds — perfect for in-store displays, price tags, or social media posts.

**Access:** `/settings/reactors/product-flyer`

---

## Prerequisites

The Product Flyer Reactor must be installed:
1. Go to **Settings → Reactors**
2. Find **Product Flyer**
3. Click **Install**

---

## Accessing the Flyer Designer

After installation:
1. Go to **Settings → Reactors → Product Flyer**
2. The Flyer Designer opens — a canvas-based template editor

---

## Designing a Flyer Template

The flyer designer is a WYSIWYG (What You See Is What You Get) canvas editor.

### Canvas Setup
- Choose a **canvas size**:
  - 4×6 inch (standard product flyer)
  - 5×7 inch
  - 8.5×11 inch (full page)
  - Square (for social media)
- Choose **orientation**: Portrait or Landscape

### Design Elements
Drag and drop elements onto the canvas:

#### Text Blocks
- Add text boxes for headings, prices, and descriptions
- **Dynamic fields** pull live product data:
  - `{{product.name}}` — Product name
  - `{{product.price}}` — Current price
  - `{{product.msrp}}` — MSRP / original price
  - `{{product.sku}}` — SKU
  - `{{product.description}}` — Product description
  - `{{product.condition}}` — Condition
  - `{{store.name}}` — Your store name
  - `{{store.phone}}` — Store phone

#### Image Placeholder
- Add an image zone for the product photo
- At print time, the selected product's image fills this zone
- Resize and position the image zone on the canvas

#### Product Cards
- Add pre-designed "product card" blocks that auto-populate with product data
- Product cards include name, price, and image in a formatted layout

#### Shapes & Decorations
- Rectangles, circles, lines
- Colorful banner / ribbon elements
- Background color or gradient fills

#### Logo / Branding
- Upload your store logo once — it's saved to the template permanently
- Resize and position on the canvas

### Styling
- Fonts: Choose from 20+ web-safe fonts
- Colors: Custom hex color picker
- Borders and shadows on elements
- Newclear's brand indigo (`#6366f1`) is available as a preset

### Saving the Template
Click **Save Template** to save your design. Give it a name (e.g., "Standard Price Tag", "Clearance Flyer").

Multiple templates can be saved.

---

## Printing a Flyer (Print Flyer Modal)

Once your template is designed, you can generate a flyer for any product:

### Opening the Print Flyer Modal
From any product:
1. Open the product detail page
2. Click **Print Flyer** (appears in the product actions menu)

OR from the Products List:
1. Right-click or open the Actions menu on a product
2. Select **Print Flyer**

### The Print Flyer Modal — 5 Steps

#### Step 1: Select Template
Choose which flyer template to use from your saved templates.

#### Step 2: Product Image
- The product's primary image is selected by default
- Click **Change Image** to select a different product image
- Or upload a new one-time image

#### Step 3: Product Cards
- If your template includes product card zones, choose how many products to include
- Select additional products if you want a multi-product flyer (e.g., 4-product comparison sheet)

#### Step 4: Values / Override Fields
Review and optionally override dynamic field values for this specific print:
- Price shown on flyer (defaults to current price)
- Name (defaults to product name)
- Any other template field

This lets you customize the flyer without changing the actual product data.

#### Step 5: Preview & Download
- A **live preview** renders the flyer with your selected product data
- Verify everything looks correct
- Click **Download as JPEG** to save the flyer image
- Click **Print** to send directly to your printer

---

## Use Cases

| Use Case | Template Suggestion |
|----------|-------------------|
| Shelf price tags | Small template, product name + price + barcode |
| Sale flyers | Full page, bold sale price + MSRP strikethrough |
| Social media posts | Square template, product photo + price |
| Window displays | Large landscape, multiple product cards |
| Customer handouts | 4×6 portrait, full description |

---

:::tip
Create a "Quick Price Tag" template with just the product name, SKU, and price — small enough to print on label stock. Use this to quickly print tags for new arrivals straight from the product page.
:::
