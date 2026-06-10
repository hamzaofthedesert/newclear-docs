---
id: preferences
title: Preferences
sidebar_label: Preferences
description: Manage your Newclear notification preferences and dashboard widget settings.
---

# Preferences

The **Preferences** page lets you customize how Newclear behaves for your account — controlling which notifications you receive and which dashboard widgets are displayed.

**Location:** `/settings/preferences`

---

## Preference Categories

The Preferences page is organized into tabs:

1. **Dashboard** — Widget visibility settings
2. **Notifications** — Which events trigger alerts
3. **Display** — UI and accessibility options

---

## Dashboard Preferences

Control which widgets appear on your home dashboard. See the full documentation at [Dashboard Preferences](/docs/dashboard/preferences).

**Quick summary:**
- Toggle any of the 12 available widgets on or off
- Settings are per-user (don't affect other team members)
- Changes apply immediately

---

## Notification Preferences

### In-App Notifications

Control which events trigger a notification bell alert in the Newclear interface:

| Event | Default | Description |
|-------|---------|-------------|
| **New Order Received** | ✅ ON | Alert when a new order comes in from any channel |
| **Reorder Alert** | ✅ ON | Alert when a product drops below its reorder threshold |
| **Low Stock Warning** | ✅ ON | Alert when stock approaches (but hasn't hit) reorder point |
| **Promotion Started** | ✅ ON | Alert when a scheduled promotion activates |
| **Promotion Ended** | ✅ ON | Alert when a promotion expires |
| **Channel Sync Error** | ✅ ON | Alert when a channel sync fails |
| **User Login (New Device)** | ✅ ON | Security alert for new device logins |
| **Inventory Adjustment** | ❌ OFF | Alert when a stock adjustment is made |
| **New Customer Added** | ❌ OFF | Alert when a new customer is created |
| **API Error** | ❌ OFF | Alert on API integration failures |
| **Attendance Clock-In** | ❌ OFF | Alert when a team member clocks in |
| **Affiliate Commission Earned** | ❌ OFF | Alert when an affiliate earns a commission |

### Email Notifications

Choose which events also send an email to your registered email address:

| Event | Toggle |
|-------|--------|
| New Order (from channels) | ✅/❌ |
| Daily Sales Summary | ✅/❌ |
| Weekly Inventory Report | ✅/❌ |
| Channel Sync Errors | ✅/❌ |
| Security Alerts | ✅/❌ |

### SMS Notifications

If SMS is configured on your account, you can receive text alerts for critical events:
- New high-value orders (above a threshold you set)
- Critical security alerts
- System downtime alerts

---

## Display Preferences

### Theme
- **Dark Mode** (default) — Recommended for retail environments
- **Light Mode** — Better for bright office environments

Toggle with the moon/sun icon in the top navigation, or set a permanent preference here.

### Language
Select your preferred language for the Newclear interface. Available languages:
- English (default)
- Spanish
- French
- Portuguese
- Arabic
- (More languages added with updates)

### Date Format
Choose how dates are displayed:
- MM/DD/YYYY (US format)
- DD/MM/YYYY (European format)
- YYYY-MM-DD (ISO format)

### Time Format
- 12-hour (AM/PM)
- 24-hour

---

## Saving Preferences

All preferences on this page save automatically when you toggle them. No submit button needed.

Preferences are stored per user and persist across sessions and devices.

---

## Related

- [Dashboard Preferences](/docs/dashboard/preferences) — Full widget documentation
- [Security Settings](/docs/settings/security) — Password and PIN management
