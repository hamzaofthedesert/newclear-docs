---
id: overview
title: API Overview
sidebar_label: Overview
description: Newclear REST API — authentication, base URL, generating API keys, rate limits, and response format.
---

# Newclear API Overview

The **Newclear REST API** provides programmatic access to your Newclear data, enabling you to build custom integrations, automate workflows, and connect external systems.

---

## Base URL

All API endpoints are relative to:

```
https://prod.newclear.io/api
```

All requests and responses use **JSON** format.

---

## Authentication

The Newclear API uses **Bearer token authentication**. Include your API key in the `Authorization` header of every request:

```http
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key

1. Log into Newclear
2. Go to **Settings → API Keys**
3. Click **+ Generate New Key**
4. Copy the key immediately (shown only once)

See [API Keys](/docs/settings/api-keys) for full key management documentation.

### Example Request with Authentication

```bash
curl -X GET "https://prod.newclear.io/api/products" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

---

## Request Format

### Headers

| Header | Value | Required |
|--------|-------|----------|
| `Authorization` | `Bearer YOUR_API_KEY` | ✅ |
| `Content-Type` | `application/json` | ✅ for POST/PUT |
| `Accept` | `application/json` | Recommended |

### Request Body

For POST and PUT requests, send JSON in the request body:

```json
{
  "name": "Product Name",
  "price": 29.99,
  "sku": "ABC-001"
}
```

---

## Response Format

All API responses follow a consistent envelope structure:

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 150
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The SKU field is required.",
    "details": {
      "sku": ["The SKU field is required."]
    }
  }
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| `200 OK` | Request succeeded |
| `201 Created` | Resource created successfully |
| `204 No Content` | Request succeeded, no body returned (DELETE) |
| `400 Bad Request` | Invalid request parameters |
| `401 Unauthorized` | Missing or invalid API key |
| `403 Forbidden` | Valid key but insufficient permissions |
| `404 Not Found` | Resource doesn't exist |
| `422 Unprocessable Entity` | Validation error |
| `429 Too Many Requests` | Rate limit exceeded |
| `500 Internal Server Error` | Server error (contact support) |

---

## Rate Limits

The API enforces rate limits to ensure stability:

| Plan | Rate Limit |
|------|-----------|
| Standard | 120 requests/minute |
| Professional | 300 requests/minute |
| Enterprise | Custom limits |

Rate limit headers are included in every response:

```http
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1699999999
```

If you exceed the limit, you receive a `429` response. Wait until `X-RateLimit-Reset` (Unix timestamp) before retrying.

---

## Pagination

List endpoints return paginated results. Control pagination with query parameters:

```
GET /api/products?page=2&per_page=50
```

| Parameter | Default | Max |
|-----------|---------|-----|
| `page` | 1 | — |
| `per_page` | 25 | 100 |

Pagination metadata is in the `meta` object of every list response:

```json
{
  "meta": {
    "page": 2,
    "per_page": 50,
    "total": 312,
    "total_pages": 7,
    "has_next": true,
    "has_prev": true
  }
}
```

---

## Filtering and Sorting

Most list endpoints support filtering via query parameters:

```
GET /api/products?status=active&category=furniture&sort=name&direction=asc
```

Common parameters:

| Parameter | Description |
|-----------|-------------|
| `search` | Full-text search |
| `status` | Filter by status |
| `sort` | Sort field |
| `direction` | `asc` or `desc` |
| `from` | Date filter start |
| `to` | Date filter end |

---

## Versioning

The current API version is **v1**. The version is implicit in the base URL. If a breaking change is introduced, a new version (`v2`) will be released with migration documentation.

---

## API Reference

- [Products API](/docs/api/products) — Create, read, update, delete products
- [Sales API](/docs/api/sales) — Query sales transactions
- [Reports API](/docs/api/reports) — Generate and export reports

---

## SDKs and Examples

Currently, Newclear provides examples in:
- **cURL** (shown in this documentation)
- **JavaScript/Node.js**
- **PHP**
- **Python**

Code examples are included in each endpoint's documentation.
