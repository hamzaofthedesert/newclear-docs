---
id: preferences
title: Dashboard Preferences
sidebar_label: Preferences
description: Customize your Newclear dashboard by enabling or disabling widgets from the Dashboard Preferences page.
---

# Dashboard Preferences

The **Dashboard Preferences** page lets you control exactly which widgets appear on your dashboard. Every user can configure their own dashboard layout independently — your settings don't affect other team members.

**Location:** `/settings/preferences/dashboard`

---

## Accessing Dashboard Preferences

1. Click your **profile avatar** in the top-right corner
2. Select **Preferences** from the dropdown
3. Click the **Dashboard** tab
   — OR —
Navigate directly to `/settings/preferences/dashboard`

---

## The 12 Dashboard Widgets

Below is the complete list of toggleable dashboard widgets and what each one does:

| Widget | Description | Recommended For |
|--------|-------------|-----------------|
| **Active Products** | Count of products in Active status | All users |
| **Orders Chart** | Visual chart of order volume over time | Managers, Operations |
| **POS Sale Statistics** | POS transaction count, revenue, avg. sale | Store Managers, Sales |
| **Sales Chart** | Total revenue chart (all channels) | Owners, Finance |
| **Pending Sales Payments** | Sales awaiting payment collection | Finance, Sales staff |
| **Pending Sales Delivery** | Paid orders awaiting fulfillment | Warehouse, Operations |
| **Reorder Alerts** | Products below reorder threshold | Warehouse, Inventory |
| **Total Revenue** | Cumulative revenue for current period | Owners, Finance |
| **New Customers** | New customers added this period | Sales, CRM |
| **Top Selling Products** | Best-performing products by volume | Owners, Buyers |
| **Low Stock Warning** | Products approaching reorder threshold | Warehouse, Buyers |
| **Recent Activity Feed** | Live log of system actions | Admins, Super Admins |

---

## How to Toggle a Widget

1. Find the widget you want to enable or disable in the list
2. Click the **toggle switch** next to it
3. Green = enabled (will appear on your dashboard)
4. Grey = disabled (hidden from your dashboard)
5. Changes save automatically — no submit button needed

:::tip
Start by enabling all widgets, then disable the ones that aren't relevant to your daily workflow. A cleaner dashboard means faster decisions.
:::

---

## Widget Defaults

When a new user account is created, the following widgets are **enabled by default**:

- Active Products
- Sales Chart
- Pending Sales Payments
- Pending Sales Delivery
- Reorder Alerts

All other widgets start **disabled** and must be manually turned on.

---

## Resetting to Defaults

If you want to return to the default widget configuration:

1. Go to `/settings/preferences/dashboard`
2. Click **Reset to Defaults** (if available)
3. All widgets will revert to the default enabled/disabled state

:::note
If no Reset button is visible, you can manually re-configure widgets to match the defaults listed above.
:::

---

## Per-User Configuration

Dashboard widget preferences are stored **per user**, not per company. This means:

- Each team member has their own widget layout
- Changing your preferences does not affect other users' dashboards
- Super Admins can see all widgets regardless of configuration

---

## Related Settings

Beyond widget toggles, the Preferences section also includes:

- **Notification Preferences** — Control which events trigger in-app notifications
- **Display Preferences** — Theme and language settings

See [Preferences Settings](/docs/settings/preferences) for the full preferences documentation.
