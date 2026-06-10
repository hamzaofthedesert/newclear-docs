---
id: reports
title: Reports API
sidebar_label: Reports
description: Newclear Reports API — generate and retrieve sales reports programmatically.
---

# Reports API

The Reports API lets you generate aggregated business reports programmatically. Use it to pull summary statistics, revenue breakdowns, and performance data for custom dashboards or external analytics tools.

**Base path:** `/api/reports`

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports/sales-summary` | Sales summary for a date range |
| GET | `/api/reports/products` | Product performance report |
| GET | `/api/reports/channels` | Revenue by sales channel |
| GET | `/api/reports/customers` | Customer analytics |
| POST | `/api/reports/custom` | Run a custom report |
| GET | `/api/reports/export/{type}` | Export a report as CSV/Excel |

---

## GET /api/reports/sales-summary

Returns a sales summary for the specified date range.

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | ✅ | Start date (YYYY-MM-DD) |
| `to` | string | ✅ | End date (YYYY-MM-DD) |
| `channel` | string | | Filter by channel (optional) |
| `compare` | boolean | | Include previous period comparison |

### Example Request

```bash
curl -X GET "https://prod.newclear.io/api/reports/sales-summary?from=2024-06-01&to=2024-06-30&compare=true" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example Response

```json
{
  "success": true,
  "data": {
    "period": {
      "from": "2024-06-01",
      "to": "2024-06-30"
    },
    "summary": {
      "total_revenue": "48250.00",
      "total_orders": 187,
      "average_order_value": "258.02",
      "total_items_sold": 312,
      "total_discounts": "2150.00",
      "total_tax": "3980.63",
      "gross_profit": "21150.00",
      "gross_margin_percent": "43.8"
    },
    "by_channel": [
      {
        "channel": "pos",
        "revenue": "28500.00",
        "orders": 112
      },
      {
        "channel": "shopify",
        "revenue": "14200.00",
        "orders": 58
      },
      {
        "channel": "ebay",
        "revenue": "5550.00",
        "orders": 17
      }
    ],
    "comparison": {
      "period": {
        "from": "2024-05-01",
        "to": "2024-05-31"
      },
      "total_revenue": "41200.00",
      "revenue_change_percent": "17.1",
      "orders_change_percent": "12.5"
    },
    "daily_breakdown": [
      {
        "date": "2024-06-01",
        "revenue": "1540.00",
        "orders": 6
      }
    ]
  }
}
```

---

## GET /api/reports/products

Returns product performance data for a period.

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | string | Start date |
| `to` | string | End date |
| `sort` | string | `revenue`, `units`, `margin` |
| `direction` | string | `asc` or `desc` |
| `per_page` | integer | Number of products (default: 25) |
| `category_id` | integer | Filter by category |

### Example Request

```bash
curl -X GET "https://prod.newclear.io/api/reports/products?from=2024-06-01&to=2024-06-30&sort=revenue&direction=desc" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example Response

```json
{
  "success": true,
  "data": [
    {
      "product_id": 1234,
      "sku": "FURN-SOFA-001",
      "name": "Modern Grey Sectional Sofa",
      "units_sold": 8,
      "revenue": "7192.00",
      "cost_total": "3600.00",
      "gross_profit": "3592.00",
      "margin_percent": "49.9"
    }
  ]
}
```

---

## GET /api/reports/channels

Revenue breakdown by sales channel.

```bash
curl -X GET "https://prod.newclear.io/api/reports/channels?from=2024-06-01&to=2024-06-30" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "channel": "pos",
      "label": "Point of Sale",
      "revenue": "28500.00",
      "orders": 112,
      "average_order_value": "254.46",
      "percent_of_total": "59.1"
    },
    {
      "channel": "shopify",
      "label": "Shopify",
      "revenue": "14200.00",
      "orders": 58,
      "average_order_value": "244.83",
      "percent_of_total": "29.4"
    }
  ]
}
```

---

## POST /api/reports/custom

Run a custom report with full control over metrics and groupings.

### Request Body

```json
{
  "from": "2024-01-01",
  "to": "2024-06-30",
  "metrics": ["revenue", "orders", "avg_order_value", "gross_profit"],
  "group_by": "month",
  "filters": {
    "channel": ["pos", "shopify"],
    "category_id": [12, 14]
  }
}
```

### Available Metrics

- `revenue` — Total sales revenue
- `orders` — Order count
- `avg_order_value` — Average order value
- `gross_profit` — Revenue minus cost
- `margin_percent` — Gross margin %
- `units_sold` — Total items sold
- `discounts` — Total discount amount
- `tax` — Tax collected
- `refunds` — Refunded amount

### Group By Options

- `day` — Daily breakdown
- `week` — Weekly breakdown
- `month` — Monthly breakdown
- `channel` — Group by sales channel
- `category` — Group by product category
- `seller` — Group by seller/vendor

---

## GET /api/reports/export/\{type\}

Export a report as a file.

### Types

- `sales-summary` — Full sales summary
- `products` — Product performance
- `channels` — Channel breakdown
- `customers` — Customer analytics

### Query Parameters

| Parameter | Description |
|-----------|-------------|
| `from` | Start date |
| `to` | End date |
| `format` | `csv` or `xlsx` |

### Example

```bash
curl -X GET "https://prod.newclear.io/api/reports/export/sales-summary?from=2024-06-01&to=2024-06-30&format=csv" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -o sales-report-june.csv
```

The response is the raw file content (CSV or Excel), not JSON. Set `-o filename` in curl to save it directly.
