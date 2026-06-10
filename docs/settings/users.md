---
id: users
title: Users & Accounts
sidebar_label: Users
description: Manage team members in Newclear — inviting users, roles and permissions, seller assignment, and barcode generation.
---

# Users & Accounts

The **Users** settings page is where you manage your entire team. Invite new members, assign roles and permissions, link staff to seller accounts, and generate attendance barcodes — all in one place.

**Location:** `/settings/users`

---

## User Roles

Newclear has five built-in roles with increasing levels of access:

| Role | Description |
|------|-------------|
| **Super Admin** | Full access to everything including billing, Reactors, and all settings |
| **Admin** | Full operational access; cannot manage billing or uninstall Reactors |
| **Manager** | Can manage products, orders, sales; limited settings access |
| **Staff** | POS access, inventory adjustments, basic product management |
| **Viewer** | Read-only access to assigned sections |

Role permissions are pre-configured but can be customized per user.

---

## Inviting a New User

1. Go to **Settings → Users**
2. Click **+ Invite User**
3. Fill in:
   - **Email Address** *(required)* — The invitation is sent here
   - **First Name** and **Last Name**
   - **Role** — Select from the role list
   - **Phone** — Optional
4. Click **Send Invitation**

The user receives an email with a link to create their password and activate their account.

:::tip
New users must activate their account by clicking the invitation link within 72 hours. After that, the link expires and you'll need to resend the invitation.
:::

---

## Managing Existing Users

The Users list shows all active and pending users. For each user you can:

- **Edit** — Change role, name, or contact info
- **Resend Invite** — Resend the activation email to pending users
- **Deactivate** — Suspend access without deleting the account
- **Delete** — Permanently remove the user

:::warning
Deleting a user removes their account but preserves all their historical actions (sales, adjustments, etc.) attributed to that user in reports and logs.
:::

---

## Customizing User Permissions

Beyond the default role permissions, individual permissions can be customized:

1. Open a user's profile
2. Click **Permissions**
3. The permissions panel shows all available features as toggles
4. Enable or disable specific features beyond what the role grants

### Permission Categories

| Category | Permissions |
|----------|-------------|
| **Products** | View, Create, Edit, Delete, Import, Export |
| **Inventory** | View, Adjust, Scan |
| **POS** | Access POS, Process Refunds, Apply Discounts |
| **Orders** | View, Update Status, Fulfill |
| **Reports** | View Sales, View Financial, Export |
| **Settings** | User Management, Store Settings, Reactor Management |
| **Customers** | View, Create, Edit, Delete, View Credits |

---

## Assigning Sellers to Users

If your business has multiple sellers/vendors, you can associate a user with a specific seller:

1. Open the user's profile
2. Click **Assign Seller**
3. Select the seller from the dropdown
4. Save

This association is used for:
- Filtering products by the user's assigned seller
- Commission and earnings attribution
- Seller-specific reporting

---

## Barcode Generation for Attendance

Each user can have a **personal attendance barcode** for clocking in and out using Newclear's Attendance system.

### Generating a User Barcode

1. Open the user's profile
2. Scroll to the **Attendance** section
3. Click **Generate Barcode**
4. A unique barcode is generated and displayed
5. Click **Print Barcode** to print a badge or label

The barcode is unique to that user. When scanned at the attendance station, it records a clock-in or clock-out event for that specific person.

See [Attendance](/docs/operations/attendance) for how the attendance system works.

---

## User Profile Page

Each user has a profile accessible to both the user (via Account settings) and admins (via Settings → Users). The profile includes:

- Personal information (name, email, phone)
- Role and permissions
- Assigned seller
- Attendance barcode
- Recent activity log
- Session management

---

## Password Reset

Users can reset their own passwords from the login screen. Admins can also trigger a password reset:

1. Open the user's profile
2. Click **Send Password Reset Email**
3. The user receives a reset link

---

## Two-Factor Authentication (2FA)

Users can enable 2FA on their own accounts under **Account → Security**. Admins can require 2FA for all users of a specific role from **Settings → Security**.
