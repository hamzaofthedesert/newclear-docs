---
id: ashley-sync
title: Ashley Warehouse Sync Reactor
sidebar_label: Ashley Sync
description: Automate inventory and pricing updates from Ashley Direct with Newclear's Ashley Warehouse Sync Reactor.
---

# Ashley Warehouse Sync Reactor

The **Ashley Warehouse Sync Reactor** automates the process of keeping your Newclear inventory aligned with Ashley Direct's catalog. It pulls product availability and pricing data from the Ashley Direct API on a daily schedule, updating your stock and costs automatically.

:::note
This Reactor is specifically built for **Value Furniture & Decor** (Bailey Store) and businesses that source inventory from Ashley Furniture Industries via the Ashley Direct wholesale program.
:::

---

## What the Ashley Sync Reactor Does

- **Daily inventory sync** — Checks Ashley Direct for current stock availability for every Ashley SKU in your catalog
- **Price updates** — Updates your product costs when Ashley's pricing changes
- **Bundle pricing** — Automatically calculates bundle sell prices as `cost × 2`
- **Stock zeroing** — If Ashley shows a SKU as discontinued or unavailable, the corresponding Newclear product is flagged or zeroed out
- **New product discovery** — Optionally creates new Newclear product records for newly available Ashley SKUs

---

## How It Works

### The Ashley Direct API
The Reactor connects to the Ashley Direct API using your Ashley dealer credentials. It queries product availability, pricing, and stock status for all SKUs in your catalog.

### Sync Schedule
The sync runs automatically at **midnight** each night (00:00 in your store's configured timezone).

This means every morning when your team arrives:
- Stock levels reflect Ashley's current availability
- Costs are updated to reflect any pricing changes from Ashley
- Any discontinued items have been flagged

### Manual Sync
You can also trigger a manual sync at any time:
1. Go to **Settings → Reactors → Ashley Warehouse Sync**
2. Click **Sync Now**
3. The sync runs immediately and shows a progress log

---

## Bundle Pricing Logic

Ashley sells many products as kits (bundles with multiple components). The Reactor handles bundle pricing automatically:

```
Bundle Sell Price = Ashley Cost × 2
```

This applies a standard **100% markup** (or 50% margin) on all bundle/kit items.

If you want to adjust the markup multiplier:
1. Go to **Settings → Reactors → Ashley Warehouse Sync → Pricing Rules**
2. Change the **Bundle Markup Multiplier** (default: 2.0)
3. Save

The new multiplier applies on the next sync.

---

## Configuration

### Setting Up Ashley Direct API Credentials

1. Install the Ashley Warehouse Sync Reactor from **Settings → Reactors**
2. Go to **Settings → Reactors → Ashley Warehouse Sync**
3. Enter:
   - **Ashley Dealer Number** — Your assigned Ashley dealer ID
   - **API Username** — Ashley Direct API username
   - **API Password** — Ashley Direct API password
4. Click **Test Connection**
5. If successful, click **Save**

### Warehouse Assignment
Configure which Newclear warehouse receives Ashley inventory updates:

1. In the Reactor settings, select **Warehouse for Ashley Stock**
2. Typically this is the "Bailey Store" warehouse or your primary Ashley receiving location
3. Save

---

## What Gets Updated

| Field | Update Behavior |
|-------|----------------|
| **Quantity on Hand** | Set to Ashley's reported available quantity |
| **Cost** | Updated to Ashley's current dealer price |
| **Sell Price** | Updated only for bundles (cost × multiplier) |
| **Status** | Set to Draft if Ashley marks item as discontinued |

Fields that are **not** modified by the sync:
- Product name
- Description
- Images
- Category
- Tags
- Custom fields

---

## Sync Log

Every sync (scheduled or manual) creates a log entry:

1. Go to **Settings → Reactors → Ashley Warehouse Sync → Sync Log**
2. View:
   - Sync date/time
   - Products updated
   - Products with errors
   - New products discovered
   - Discontinued items flagged

Download the sync log as CSV for auditing.

---

## Error Handling

If the Ashley API is unreachable during a scheduled sync:
- Newclear retries 3 times (5 minutes apart)
- If all retries fail, an error notification is sent to Super Admins
- The previous inventory data is preserved (no changes are made on failure)

---

:::tip
After the nightly sync runs, review the Sync Log each morning to catch any items that were discontinued or had pricing changes. This keeps your catalog and channel listings current.
:::
