---
id: security
title: Sign-in & Security
sidebar_label: Security
description: Manage your Newclear account security — password changes, PIN management, and session control.
---

# Sign-in & Security

The **Security** settings page is where you manage your account's authentication and access security — your password, refund/action PIN, active sessions, and two-factor authentication.

**Location:** `/settings/security`

---

## Changing Your Password

To update your account password:

1. Go to **Settings → Security**
2. In the **Password** section, click **Change Password**
3. Enter:
   - **Current Password** — Your existing password
   - **New Password** — Must be at least 8 characters
   - **Confirm New Password** — Re-enter the new password
4. Click **Update Password**

### Password Requirements
- Minimum 8 characters
- Recommended: mix of uppercase, lowercase, numbers, and symbols
- Do not reuse your last 5 passwords

:::tip
Use a password manager to generate and store a strong, unique password for your Newclear account.
:::

---

## PIN Management

Your **PIN** is a 4–6 digit code used to authorize sensitive POS operations, specifically:
- Processing refunds
- Applying large discounts above a threshold
- Overriding prices

### Setting Your PIN

1. In **Settings → Security**, scroll to the **PIN** section
2. Click **Set PIN** (or **Change PIN** if you already have one)
3. Enter your desired 4–6 digit PIN
4. Confirm the PIN
5. Click **Save**

### When Your PIN Is Required

Your PIN is requested when:
- You attempt to process a refund from POS
- You attempt to apply a discount above the configured threshold
- Your role requires PIN for specific actions

:::note
PINs are personal — each user has their own PIN. A manager's PIN is different from a staff member's PIN. This provides an audit trail of who authorized which sensitive action.
:::

### Resetting Your PIN

If you forget your PIN:
1. Click **I Forgot My PIN** on the PIN prompt screen
2. Enter your account password to verify identity
3. Set a new PIN

Alternatively, a Super Admin can reset your PIN from **Settings → Users → [Your Profile] → Reset PIN**.

---

## Active Sessions

Newclear tracks all active login sessions — each device and browser where you're logged in.

### Viewing Active Sessions

1. Go to **Settings → Security → Active Sessions**
2. You'll see a list of sessions with:
   - Device type (Desktop, Mobile, Tablet)
   - Browser (Chrome, Firefox, Safari, etc.)
   - Operating system
   - IP address
   - Location (approximate, based on IP)
   - Last activity timestamp

### Revoking a Session

If you see an unfamiliar session (possible unauthorized access):

1. Click **Revoke** next to the suspicious session
2. That device is immediately logged out

### Log Out of All Devices

Click **Revoke All Sessions** to log out of every device simultaneously. You'll need to log back in on your current device.

---

## Two-Factor Authentication (2FA)

Two-factor authentication adds an extra layer of security — even if someone knows your password, they can't log in without your second factor.

### Enabling 2FA

1. Go to **Settings → Security → Two-Factor Authentication**
2. Click **Enable 2FA**
3. Choose your second factor:
   - **Authenticator App** (recommended) — Google Authenticator, Authy, 1Password
   - **SMS** — Text message to your registered phone
4. For Authenticator App:
   - Scan the QR code with your authenticator app
   - Enter the 6-digit code to verify setup
5. Save your **recovery codes** in a secure location
6. Click **Confirm & Enable**

### Logging In with 2FA

After enabling 2FA:
1. Enter your email and password as normal
2. Newclear prompts for your second factor
3. Enter the 6-digit code from your authenticator app (or SMS)
4. You're logged in

### Disabling 2FA

1. Go to **Settings → Security → Two-Factor Authentication**
2. Click **Disable 2FA**
3. Confirm with your current password

:::warning
Super Admins can require 2FA for all users of specific roles. If 2FA is required by your organization, you cannot disable it without Super Admin override.
:::

---

## Login History

View a log of all recent login attempts to your account:

1. Go to **Settings → Security → Login History**
2. See: timestamp, IP address, location, result (Success / Failed)

If you see failed login attempts from unfamiliar IPs, change your password immediately and enable 2FA.
