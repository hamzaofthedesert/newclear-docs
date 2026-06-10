---
id: api-keys
title: API Keys
sidebar_label: API Keys
description: Generate and manage Newclear API keys for integrating external systems and building custom workflows.
---

# API Keys

The **API Keys** page lets you generate authentication tokens that allow external systems to access the Newclear API. Use API keys to build custom integrations, connect third-party tools, or automate workflows.

**Location:** `/settings/api-keys`

---

## What Are API Keys?

An API key (also called an **App Token** in Newclear) is a secret string that authenticates API requests. Instead of sending your username and password with every request, you pass the API key in the request header.

API keys in Newclear:
- Are associated with a specific user account (inherits that user's permissions)
- Can be named and described for identification
- Can be revoked at any time without affecting your main account
- Are shown only once at creation — you must copy and store them securely

---

## Generating an API Key

1. Go to **Settings → API Keys**
2. Click **+ Generate New Key**
3. Fill in:

| Field | Description |
|-------|-------------|
| **Name** *(required)* | Descriptive name (e.g., "Zapier Integration", "Custom ERP Sync") |
| **Description** | What this key is used for |
| **Associated User** | The user whose permissions this key inherits |
| **Expiry** | Optional. Set an expiration date for time-limited access |
| **IP Allowlist** | Optional. Restrict key usage to specific IP addresses |

4. Click **Generate**
5. The **API key is displayed once** — copy it immediately
6. Store it securely (password manager, secrets manager, etc.)

:::warning
You will NOT be able to view the full API key again after closing this screen. If you lose it, you must generate a new one and update your integrations.
:::

---

## API Keys List

After creation, your keys are listed with:
- Name and description
- Associated user
- Creation date
- Last used date
- Expiry (if set)
- Status: Active / Expired / Revoked

---

## Using an API Key

Include the key as a **Bearer token** in the `Authorization` header of all API requests:

```http
GET https://prod.newclear.io/api/products
Authorization: Bearer YOUR_API_KEY_HERE
Content-Type: application/json
```

See the [API Overview](/docs/api/overview) for full authentication documentation.

---

## Revoking an API Key

If a key is compromised or no longer needed:

1. Find the key in **Settings → API Keys**
2. Click the **Revoke** icon (lock/X icon)
3. Confirm revocation

The key is immediately invalidated — any system using it will receive `401 Unauthorized` errors on its next request.

:::tip
Rotate your API keys periodically as a security best practice. Generate a new key, update your integration, then revoke the old key.
:::

---

## Key Permissions

API keys inherit the permissions of their associated user. To limit what an API key can do:

1. Create a dedicated Newclear user with minimal permissions (e.g., "API User - Read Only")
2. Generate the API key associated with that user
3. The key will only have read-only access

This follows the **principle of least privilege** — give integrations only the access they need.

---

## IP Allowlisting

For extra security, restrict an API key to specific IP addresses:

1. When creating the key, enter IP addresses in the **IP Allowlist** field (comma-separated)
2. Only requests originating from those IPs will be authorized
3. Other IPs receive `403 Forbidden`

Useful for:
- Server-to-server integrations (restrict to your server's IP)
- Internal tools running on known infrastructure

---

## Audit Log

Every API key usage is logged. To view:

1. Open the key's detail page
2. Click **Usage Log**
3. See: timestamp, endpoint, IP address, response code

This helps you audit API activity and detect any unauthorized usage.

---

## Common Integration Use Cases

| Integration | Key Name Suggestion | Permissions Needed |
|-------------|--------------------|--------------------|
| Accounting sync | "QuickBooks Export" | Read sales, read products |
| ERP inventory update | "ERP Inventory Sync" | Read/write inventory |
| Custom reporting | "Analytics Export" | Read reports, read sales |
| External POS | "POS Integration" | Read products, write sales |
| Webhook handler | "Webhook Processor" | Read orders |
