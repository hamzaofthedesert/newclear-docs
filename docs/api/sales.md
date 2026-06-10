---
id: sales
title: Sales API
sidebar_label: Sales
description: Newclear Sales API — query sales transactions and retrieve sale details.
---

# Sales API

The Sales API provides read access to your sales transaction history. Use it to sync Newclear sales data to external systems, accounting software, or analytics platforms.

**Base path:** `/api/sales`

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/sales` | List sales (paginated) |
| GET | `/api/sales/{id}` | Get a single sale by ID |

---

## GET /api/sales

Returns a paginated list of sales transactions.

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Results per page (default: 25, max: 100) |
| `from` | string | Start date — ISO 8601 (e.g., `2024-01-01`) |
| `to` | string | End date — ISO 8601 (e.g., `2024-01-31`) |
| `source` | string | Filter by source: `pos`, `shopify`, `ebay`, `amazon`, `woocommerce`, `walmart` |
| `status` | string | `completed`, `refunded`, `partially_refunded`, `voided` |
| `customer_id` | integer | Filter by customer ID |
| `payment_method` | string | `cash`, `card`, `credit`, `split` |
| `sort` | string | `created_at`, `total`, `customer` |
| `direction` | string | `asc` or `desc` |

### Example: Get Today's POS Sales

```bash
curl -X GET "https://prod.newclear.io/api/sales?source=pos&from=2024-06-10&to=2024-06-10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example Response

```json
{
  "success": true,
  "data": [
    {
      "id": 8821,
      "order_number": "POS-20240610-8821",
      "source": "pos",
      "status": "completed",
      "customer": {
        "id": 445,
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "items": [
        {
          "product_id": 1234,
          "sku": "FURN-SOFA-001",
          "name": "Modern Grey Sectional Sofa",
          "quantity": 1,
          "unit_price": "899.00",
          "discount": "0.00",
          "line_total": "899.00"
        }
      ],
      "subtotal": "899.00",
      "discount_total": "0.00",
      "tax": "74.18",
      "total": "973.18",
      "payment_method": "card",
      "payment_reference": "pi_3NqGhJDSFKL23abc",
      "affiliate_code": null,
      "affiliate_commission": null,
      "staff_user_id": 7,
      "created_at": "2024-06-10T14:35:22Z",
      "updated_at": "2024-06-10T14:35:22Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 47,
    "total_pages": 2
  }
}
```

---

## GET /api/sales/\{id\}

Returns the full detail of a single sale.

### Example Request

```bash
curl -X GET "https://prod.newclear.io/api/sales/8821" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Internal sale ID |
| `order_number` | string | Human-readable order number |
| `source` | string | Where the sale originated |
| `status` | string | Transaction status |
| `customer` | object | Customer name, email, phone |
| `items` | array | Line items with SKU, qty, price |
| `subtotal` | string | Pre-discount, pre-tax total |
| `discount_total` | string | Total discounts applied |
| `tax` | string | Tax amount collected |
| `total` | string | Final amount charged |
| `payment_method` | string | How payment was made |
| `payment_reference` | string | Stripe Payment Intent ID (for card payments) |
| `affiliate_code` | string | Referral code used (if any) |
| `affiliate_commission` | string | Commission earned (if any) |
| `refunds` | array | Refund records (if any) |
| `staff_user_id` | integer | Which staff member processed the sale |
| `created_at` | string | Sale timestamp (ISO 8601) |

---

## Common Use Cases

### Sync to Accounting Software

```bash
# Get all completed sales from last month
curl -X GET "https://prod.newclear.io/api/sales?from=2024-05-01&to=2024-05-31&status=completed&per_page=100" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Get Shopify Channel Sales

```bash
curl -X GET "https://prod.newclear.io/api/sales?source=shopify&from=2024-06-01" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Sales by Customer

```bash
curl -X GET "https://prod.newclear.io/api/sales?customer_id=445" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Notes on Sales Data

- Refunded sales still appear with `status: refunded`. Check the `refunds` array for refund details.
- Amounts are returned as strings to preserve decimal precision — parse as float/decimal in your application
- `created_at` timestamps are in UTC. Convert to local timezone as needed.
- The `payment_reference` for Stripe card payments is the Stripe `payment_intent_id` — use this to cross-reference in your Stripe Dashboard.
