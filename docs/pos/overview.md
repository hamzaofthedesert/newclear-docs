---
id: overview
title: Point of Sale Overview
sidebar_label: Overview
description: Learn about Newclear's Point of Sale system — multi-tab support, card payments, and how POS fits into your business.
---

# Point of Sale Overview

The **Newclear Point of Sale (POS)** is a full-featured, browser-based retail checkout system designed for speed and flexibility. From a single screen, your staff can search or scan products, apply discounts, process card payments via Stripe Terminal, look up customer accounts, and issue receipts — without ever leaving the POS interface.

**Location:** `/pos`

---

## What POS Does

The POS is the face of your retail operation. It bridges your Newclear inventory with real-world customer transactions:

- 🛒 **Sell products** — Search or scan any active product from your catalog
- 💳 **Accept payments** — Cash, card (Stripe Terminal), store credit, or split payment
- 🎁 **Apply discounts** — Line-item discounts, whole-cart discounts, or promotional codes
- 👤 **Manage customers** — Look up existing customers or create new ones on the spot
- 🏷️ **Use referral codes** — Accept affiliate referral codes at checkout
- 🧾 **Issue receipts** — Print or email a receipt after every transaction
- 🔄 **Process refunds** — Issue full or partial refunds with PIN authorization

---

## Multi-Tab Support

Newclear POS supports **multiple open tabs** (transactions) simultaneously. This is essential for busy retail environments where staff may need to:

- Hold a transaction while helping another customer
- Run multiple cashier lanes from the same POS screen
- Keep a frequently-used cart open while creating new ones

### How Tabs Work
- Each POS session can have multiple open tabs at the top of the screen
- Click **+ New Tab** to open a fresh transaction
- Click any existing tab to switch between transactions
- Tabs persist until they are completed or manually closed
- Each tab has its own cart, customer, and discount state

:::tip
Use tabs to build common "quick sale" carts — e.g., a tab pre-loaded with frequently purchased items that you can complete quickly.
:::

---

## How POS Fits into Newclear

The POS is fully integrated with the rest of Newclear:

| Integration | How It Works |
|-------------|-------------|
| **Inventory** | Every sale automatically decrements product stock in real time |
| **Products** | Any Active product is searchable/scannable in POS |
| **Customers** | Customer records are shared with the CRM — POS sales appear in customer history |
| **Promotions** | Active promotions auto-apply to eligible products at checkout |
| **Affiliates** | Referral codes from the Affiliate Reactor can be entered at checkout |
| **Stripe** | WisePOS E card reader processes payments and syncs directly to Newclear |
| **Reports** | POS transactions appear in Sales History and financial reports |
| **Orders** | Completed POS sales create order records visible in the Orders section |

---

## POS Screen Layout

The POS screen is divided into three main areas:

### Left Panel — Product Search
- Search bar for product name/SKU
- Barcode scanner input
- Recent/favorite products
- Category quick-filter tabs

### Center Panel — Cart
- Items added to the current sale
- Quantity adjusters per line item
- Line-item discount fields
- Cart totals (subtotal, discounts, tax, total)

### Right Panel — Checkout
- Customer selection / creation
- Payment method selector
- Referral code field
- Complete Sale button
- Active tab list at the top

---

## Accessing POS

Any user with the **POS** permission can access the Point of Sale. Navigate to `/pos` from the sidebar or top navigation.

The POS is optimized for:
- Desktop browsers (Chrome recommended)
- Tablet devices (iPad, Android tablet)
- Touchscreen displays

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Focus product search bar |
| `Ctrl/Cmd + T` | New tab |
| `Ctrl/Cmd + W` | Close current tab |
| `Escape` | Cancel current action |
| `Enter` | Confirm scan / add to cart |

---

## Next Steps

- [Creating a Sale](/docs/pos/creating-sales) — Step-by-step POS workflow
- [Stripe Terminal Setup](/docs/pos/stripe-terminal) — Pair your card reader
- [Refunds](/docs/pos/refunds) — How to issue refunds
- [Customers](/docs/pos/customers) — Managing customer accounts in POS
