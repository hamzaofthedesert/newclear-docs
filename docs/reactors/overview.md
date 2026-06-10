---
id: overview
title: Reactors Overview
sidebar_label: Overview
description: Learn what Newclear Reactors are — modular, installable feature extensions that add capabilities to your Newclear account.
---

# Reactors Overview

**Reactors** are Newclear's modular plugin system. They're optional, installable feature packages that extend Newclear's core capabilities without cluttering the interface for businesses that don't need them.

Think of Reactors as apps for Newclear — each one adds a specific, self-contained capability.

**Location:** `/settings/reactors`

---

## What Reactors Do

Each Reactor adds a focused set of features:

| Reactor | What It Does |
|---------|-------------|
| **AI Enhancer** | AI-powered product content generation (titles, descriptions, tags) |
| **Product Flyer** | Design and print product promotional flyers |
| **Ashley Warehouse Sync** | Auto-sync inventory and pricing from Ashley Direct |
| **Shipday Integration** | Delivery dispatch and tracking via Shipday |
| **Affiliate Program** | Referral code system with commission tracking |

More Reactors are added with each Newclear update.

---

## Who Can Manage Reactors?

Only **Super Admins** can install or uninstall Reactors.

Regular admins and staff can **use** installed Reactors but cannot install, configure, or remove them.

---

## Viewing Installed Reactors

1. Go to **Settings → Reactors**
2. You'll see a grid of all available Reactors
3. Each card shows:
   - Reactor name and icon
   - Short description
   - Status: **Installed** (green) or **Not Installed** (grey)
   - **Install** or **Uninstall** button

---

## Installing a Reactor

1. Go to **Settings → Reactors**
2. Find the Reactor you want to install
3. Click **Install**
4. Some Reactors require configuration before they're active (API keys, etc.)
5. Once installed:
   - The Reactor's features appear in the relevant sections of Newclear
   - A new settings page may appear under the Reactor card

:::note
Installing a Reactor is instant and does not require a restart or page reload. The new features are available immediately.
:::

---

## Configuring a Reactor

After installing, most Reactors have a configuration page:

1. On the Reactors page, find the installed Reactor
2. Click **Configure** or the settings icon
3. Fill in required configuration (API keys, preferences, etc.)
4. Save

Each Reactor's configuration is documented in its individual page:
- [AI Enhancer Configuration](/docs/reactors/ai-enhancer)
- [Product Flyer Configuration](/docs/reactors/product-flyer)
- [Ashley Warehouse Sync](/docs/reactors/ashley-sync)
- [Shipday Integration](/docs/reactors/shipday)

---

## Uninstalling a Reactor

1. Go to **Settings → Reactors**
2. Find the Reactor
3. Click **Uninstall**
4. Confirm

:::warning
Uninstalling a Reactor hides its features from all users. Any data created by the Reactor (e.g., affiliate commissions, flyer templates) is preserved but inaccessible until the Reactor is reinstalled.
:::

---

## Reactor Access by Role

| Role | Can Install | Can Configure | Can Use |
|------|-------------|---------------|---------|
| Super Admin | ✅ | ✅ | ✅ |
| Admin | ❌ | ✅ (if installed) | ✅ |
| Manager | ❌ | ❌ | ✅ |
| Staff | ❌ | ❌ | ✅ (if permitted) |

---

## Coming Soon Reactors

Newclear's Reactor marketplace continues to grow. Upcoming Reactors include:
- **QuickBooks Sync** — Accounting integration
- **ShipStation** — Shipping label generation
- **SMS Notifications** — Customer text alerts
- **Barcode Label Printer** — Direct label printing integration

Stay tuned to Newclear release notes for new Reactor announcements.
