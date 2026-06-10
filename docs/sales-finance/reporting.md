---
id: reporting
title: Sales Reports
sidebar_label: Reporting
description: Generate and export sales reports in Newclear — date ranges, report types, filtering, and data export.
---

# Sales Reports

The **Reports** section provides aggregated, visual, and exportable summaries of your business performance. Unlike Sales History (which shows individual transactions), Reports group, summarize, and visualize your data to reveal trends and insights.

**Location:** `/reports`

---

## Available Report Types

### Sales Summary Report
The top-level overview of revenue performance:
- Total revenue
- Total orders
- Average order value
- Revenue by channel (POS vs Shopify vs eBay, etc.)
- Comparison to previous period

### Product Performance Report
How individual products are selling:
- Units sold per SKU
- Revenue per SKU
- Gross profit per SKU (requires cost data)
- Margin percentage
- Top sellers and bottom performers

### Category Report
Sales broken down by product category:
- Revenue by category
- Units sold by category
- Average order value by category

### Channel Report
Performance across your connected sales channels:
- Revenue per channel
- Order count per channel
- Average order value per channel
- Month-over-month channel comparison

### Customer Report
Customer behavior and value:
- New vs. returning customers
- Average customer lifetime value
- Top customers by spending
- Customer acquisition by period

### Loyalty Report
Credits and loyalty program performance:
- Credits issued vs. redeemed
- Outstanding credit liability
- Top credit earners

### Affiliate Report
Affiliate program performance:
- Commissions earned by affiliate
- Revenue attributed to affiliates
- Top affiliates by sales
- Outstanding unpaid commissions

### Inventory Report
Stock position and movement:
- Products below reorder point
- Stock value by warehouse
- Stock movement (in/out) by period
- Dead stock (items with no sales in selected period)

---

## Date Range Filters

All reports support flexible date range selection:

| Preset | Description |
|--------|-------------|
| **Today** | Current calendar day |
| **Yesterday** | Previous calendar day |
| **This Week** | Monday to today |
| **Last Week** | Previous full week |
| **This Month** | 1st to today |
| **Last Month** | Previous full month |
| **This Quarter** | Current quarter (Q1/Q2/Q3/Q4) |
| **Last Quarter** | Previous quarter |
| **This Year** | January 1 to today |
| **Last Year** | Previous full calendar year |
| **Custom** | Pick any start and end date |

---

## Filtering Reports

Beyond date ranges, you can filter most reports by:

- **Channel** — Only show data from specific sales channels
- **Category** — Focus on a product category
- **Seller** — Filter by vendor/supplier
- **User** — Filter by staff member (for sales attribution)
- **Warehouse** — Filter by inventory location
- **Customer Segment** — New, returning, VIP

---

## Running a Report

1. Go to **Reports**
2. Select the report type from the sidebar or tabs
3. Set your date range
4. Apply any additional filters
5. Click **Generate** (or the report auto-updates as you change filters)

Reports display as:
- **Summary cards** — Key metrics at a glance
- **Charts** — Line, bar, and pie charts for visual trends
- **Data tables** — Sortable, detailed breakdowns

---

## Exporting Reports

Every report can be exported:

1. On any report page, click **Export**
2. Choose format:
   - **CSV** — Raw data for Excel, accounting software
   - **Excel (.xlsx)** — Formatted spreadsheet
   - **PDF** — Formatted report for printing or emailing
3. Download the file

:::tip
Schedule a monthly export to your accounting software by exporting the Sales Summary report in CSV format. All required fields (date, revenue, tax, discounts) are included.
:::

---

## Saving Report Configurations

If you run the same report regularly:

1. Configure the report with your preferred filters
2. Click **Save Report Configuration**
3. Give it a name (e.g., "Monthly Shopify Revenue")
4. Access saved reports from the **Saved Reports** tab

---

## Report Permissions

Report access is controlled by user roles:
- **Staff** — May access limited reports (sales summary only)
- **Manager** — Access to all reports except financial details
- **Admin / Super Admin** — Full access to all reports including cost, margin, and affiliate data

Contact your Super Admin to adjust report access permissions.
