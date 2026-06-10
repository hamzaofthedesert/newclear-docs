---
id: products
title: Products API
sidebar_label: Products
description: Newclear Products API — GET, POST, PUT, DELETE endpoints with request and response examples.
---

# Products API

The Products API lets you create, read, update, and delete products in your Newclear catalog programmatically.

**Base path:** `/api/products`

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products (paginated) |
| GET | `/api/products/{id}` | Get a single product by ID |
| GET | `/api/products/sku/{sku}` | Get a product by SKU |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/{id}` | Update an existing product |
| PATCH | `/api/products/{id}` | Partially update a product |
| DELETE | `/api/products/{id}` | Delete a product |

---

## GET /api/products

Returns a paginated list of all products.

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Results per page (default: 25, max: 100) |
| `search` | string | Search by name, SKU, or barcode |
| `status` | string | `active` or `draft` |
| `category_id` | integer | Filter by category ID |
| `seller_id` | integer | Filter by seller ID |
| `warehouse_id` | integer | Filter by warehouse ID |
| `tag` | string | Filter by tag |
| `sort` | string | Sort field: `name`, `sku`, `price`, `created_at` |
| `direction` | string | `asc` or `desc` |

### Example Request

```bash
curl -X GET "https://prod.newclear.io/api/products?status=active&per_page=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1234,
      "sku": "FURN-SOFA-001",
      "name": "Modern Grey Sectional Sofa",
      "description": "<p>A sleek, modern sectional sofa...</p>",
      "price": "899.00",
      "msrp": "1199.00",
      "cost": "450.00",
      "status": "active",
      "condition": "new",
      "quantity": 5,
      "reorder_point": 2,
      "category": {
        "id": 12,
        "name": "Living Room"
      },
      "seller": {
        "id": 3,
        "name": "Ashley Furniture"
      },
      "warehouse": {
        "id": 1,
        "name": "Main Warehouse"
      },
      "bin_location": "Aisle-A-Row-3",
      "upc": "012345678901",
      "tags": ["sofa", "grey", "modern"],
      "images": [
        {
          "id": 55,
          "url": "https://cdn.newclear.io/images/sofa-001.jpg",
          "position": 1
        }
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-06-01T09:15:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 10,
    "total": 248,
    "total_pages": 25
  }
}
```

---

## GET /api/products/\{id\}

Returns a single product by its numeric ID.

### Example Request

```bash
curl -X GET "https://prod.newclear.io/api/products/1234" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## GET /api/products/sku/\{sku\}

Look up a product by its SKU. Useful when you have the SKU from an external system but not the Newclear internal ID.

```bash
curl -X GET "https://prod.newclear.io/api/products/sku/FURN-SOFA-001" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## POST /api/products

Creates a new product.

### Request Body

```json
{
  "sku": "FURN-CHAIR-022",
  "name": "Accent Arm Chair - Blue",
  "description": "<p>Stylish accent arm chair in blue fabric.</p>",
  "price": 349.00,
  "msrp": 499.00,
  "cost": 175.00,
  "status": "active",
  "condition": "new",
  "quantity": 10,
  "reorder_point": 3,
  "category_id": 12,
  "seller_id": 3,
  "warehouse_id": 1,
  "bin_location": "Aisle-B-Row-2",
  "upc": "098765432109",
  "tags": ["chair", "blue", "accent"]
}
```

### Required Fields

- `sku` — Must be unique
- `name`
- `price`

### Example Request

```bash
curl -X POST "https://prod.newclear.io/api/products" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "sku": "FURN-CHAIR-022",
    "name": "Accent Arm Chair - Blue",
    "price": 349.00,
    "status": "active"
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 1289,
    "sku": "FURN-CHAIR-022",
    "name": "Accent Arm Chair - Blue",
    "price": "349.00",
    "status": "active",
    "created_at": "2024-06-10T14:22:00Z"
  }
}
```

---

## PUT /api/products/\{id\}

Fully updates an existing product. All fields are replaced (include all fields you want to keep).

## PATCH /api/products/\{id\}

Partially updates a product. Only the fields you include are changed.

### Example: Update Price Only

```bash
curl -X PATCH "https://prod.newclear.io/api/products/1234" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"price": 799.00}'
```

### Example: Update Status and Price

```bash
curl -X PATCH "https://prod.newclear.io/api/products/1234" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status": "draft", "price": 599.00}'
```

---

## DELETE /api/products/\{id\}

Permanently deletes a product.

```bash
curl -X DELETE "https://prod.newclear.io/api/products/1234" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Response: `204 No Content` on success.

:::warning
Product deletion is permanent. Consider setting status to `draft` instead of deleting, to preserve historical data.
:::

---

## Inventory Update

To update a product's inventory quantity, use the inventory sub-endpoint:

```bash
curl -X POST "https://prod.newclear.io/api/products/1234/inventory/adjust" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "set",
    "quantity": 15,
    "warehouse_id": 1,
    "notes": "Restocked from supplier"
  }'
```

Types: `add`, `remove`, `set`
