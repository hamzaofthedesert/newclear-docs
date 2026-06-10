---
id: store-general
title: Store General Settings
sidebar_label: Store General
description: Configure your Newclear store settings — name, logo, address, timezone, currency, and contact information.
---

# Store General Settings

The **Store General** settings page is where you configure the foundational identity of your Newclear account — your store name, branding, address, timezone, and contact details. These settings affect how your store appears throughout Newclear and on customer-facing materials like receipts.

**Location:** `/settings/general`

---

## Store Identity

### Store Name *(required)*
Your business's display name. Appears on:
- Receipts and invoices
- Customer emails
- Product flyers (if using the Flyer Reactor)
- The Newclear app header

### Store Logo
Upload your business logo:
1. Click **Upload Logo**
2. Select an image file (JPG, PNG, SVG — recommended: 200×200px or larger square)
3. The logo is resized automatically

The logo appears in the navigation bar, receipts, and flyer templates.

---

## Contact Information

### Business Phone
Your primary contact phone number. Appears on receipts and flyer templates.

### Business Email
Your primary contact email. Used for:
- Customer receipt copies
- Order notifications
- System alerts to administrators

### Website URL
Your business website (optional). Can appear on receipts and customer-facing materials.

---

## Address

### Street Address
Your primary business address. Used for:
- Tax calculation (some regions require store address for tax purposes)
- Receipts
- Shipping label sender address

Fill in:
- **Address Line 1** — Street number and name
- **Address Line 2** — Suite, floor, unit (optional)
- **City**
- **State / Province**
- **ZIP / Postal Code**
- **Country**

---

## Timezone

### Store Timezone
Select the timezone your store operates in. This affects:
- Timestamps on sales and orders
- Report date ranges (e.g., "today" and "this week" are calculated in your timezone)
- Promotion scheduling (start/end times are in this timezone)
- Attendance clock-in/out records

Example timezones:
- `America/New_York` (US Eastern)
- `America/Chicago` (US Central)
- `America/Los_Angeles` (US Pacific)
- `Europe/London` (UK)

:::warning
Set your timezone correctly before creating any reports or promotions. Changing it later will shift all historical timestamps. If you operate in multiple timezones, select the timezone of your primary location.
:::

---

## Currency

### Store Currency
Select your primary currency. This affects:
- All pricing displays throughout Newclear
- Receipts and invoices
- Reports and financial summaries

:::note
Currency is set once during initial setup. Changing currency after you have historical sales data is not recommended and should be discussed with your Newclear account manager.
:::

---

## Tax Settings

### Tax Name
Label for the tax displayed on receipts (e.g., "Sales Tax", "GST", "VAT").

### Tax Rate
Default tax rate as a percentage (e.g., `8.25` for 8.25%).

:::tip
If you need different tax rates for different product types (e.g., food vs. general merchandise), use Newclear's per-category tax rules instead of the default rate. Contact support for advanced tax configuration.
:::

---

## Receipt Settings

### Receipt Header
Custom text that appears at the top of all receipts (e.g., a welcome message or tagline).

### Receipt Footer
Custom text at the bottom of receipts (e.g., return policy, website URL, social media handles).

### Receipt Format
- **Digital** — Email and SMS receipts
- **Printed** — For use with a connected receipt printer

---

## Saving Changes

All settings on this page save when you click **Save Changes** at the bottom. Changes take effect immediately.
