---
id: navigation
title: Navigation Control
sidebar_label: Navigation
description: Customize your Newclear sidebar and header navigation — assign menu items, choose icons, and organize the 5 navigation groups.
---

# Navigation Control

Newclear's **Navigation** page lets every user customize which menu items appear in which navigation locations. Whether you want a streamlined POS-focused layout or a full operational dashboard, you control what's visible and where.

**Location:** `/account/navigation`

---

## Navigation Locations

Newclear has three navigation zones you can populate:

| Zone | Description |
|------|-------------|
| **Aside (Sidebar)** | The main left sidebar — primary navigation for most users |
| **Top Header** | The top navigation bar — quick-access items |
| **Profile Menu** | Items in the user profile/avatar dropdown |

Each navigation item can be assigned to one (or more) of these zones.

---

## The 5 Navigation Groups

Navigation items are organized into 5 groups. Each group contains related features:

### 1. Core
Fundamental product and inventory tools:
- Dashboard
- Products List
- Product Categories
- Inventory
- Import/Export

### 2. Operations
Day-to-day operational tools:
- Orders
- Stock Check
- Attendance
- Shipday (if Reactor installed)

### 3. Sales & Finance
Revenue and customer management:
- Point of Sale (POS)
- Sales History
- Customers
- Promotions
- Loyalty & Credits
- Affiliates
- Reports

### 4. Settings
Business configuration:
- Store General
- Users & Accounts
- Warehouses
- Sellers
- Payments
- API Keys
- Reactors
- Channel Listings

### 5. Account
Personal account items:
- My Profile
- Security
- Preferences
- Navigation (this page)
- Logout

---

## Assigning Navigation Items

To customize your navigation:

1. Go to **Account → Navigation** (or `/account/navigation`)
2. You'll see a list of all navigation items grouped by category
3. For each item, toggle which zones it appears in:
   - ☑ **Aside** — Include in sidebar
   - ☑ **Top Header** — Include in header
   - ☑ **Profile Menu** — Include in profile dropdown
4. Changes save automatically as you toggle

---

## Icon Picker

Every navigation item can have a custom icon. Newclear includes **160+ Font Awesome icons** to choose from.

### Changing an Icon

1. Find the navigation item in the list
2. Click the **icon thumbnail** next to the item name
3. The icon picker opens
4. Browse or **search** for an icon (e.g., type "box" for inventory-related icons)
5. Click an icon to select it
6. The icon updates in the navigation immediately

### Popular Icon Suggestions

| Feature | Suggested Icon |
|---------|----------------|
| Dashboard | `fa-tachometer-alt` |
| Products | `fa-box` or `fa-tag` |
| Inventory | `fa-warehouse` |
| POS | `fa-cash-register` |
| Orders | `fa-clipboard-list` |
| Customers | `fa-users` |
| Reports | `fa-chart-bar` |
| Settings | `fa-cog` |
| Promotions | `fa-percent` |
| Attendance | `fa-fingerprint` |

---

## Reordering Navigation Items

Within each zone, you can drag navigation items to reorder them:

1. Hover over an item in the navigation list
2. Grab the **drag handle** (⠿ icon) on the left
3. Drag to the desired position
4. Release — the order is saved

The sidebar, header, and profile menu all respect your custom order.

---

## Resetting Navigation

If you want to restore the default navigation layout:

1. At the bottom of the Navigation page, click **Reset to Defaults**
2. Confirm

All items return to their default zone assignments and icon choices.

---

## Per-User Navigation

Navigation preferences are **per user** — each team member can have their own custom layout.

A warehouse manager might have Inventory and Stock Check prominently in their sidebar, while a cashier might have POS as their only sidebar item.

---

:::tip
**Minimalist POS layout:** For dedicated cashier workstations, set up navigation with only POS in the Aside and nothing else. This creates a focused, distraction-free checkout interface.
:::
