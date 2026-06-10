---
id: affiliates
title: Affiliate Program
sidebar_label: Affiliates
description: Set up and manage the Newclear Affiliate Program Reactor — commissions, referral codes, payouts, and refund handling.
---

# Affiliate Program

The **Affiliate Program Reactor** enables you to run a referral program where affiliates earn commissions on sales they refer. Affiliates receive a unique referral code, which is entered at POS checkout to attribute the sale.

---

## Prerequisites

The **Affiliate Reactor** must be installed:
1. Go to **Settings → Reactors**
2. Find **Affiliate Program**
3. Click **Install**

---

## How the Affiliate Program Works

1. You create an **Affiliate** in Newclear with a unique referral code
2. The affiliate shares their code with potential customers
3. At POS checkout, the cashier enters the referral code
4. Newclear attributes the sale to that affiliate
5. A commission is calculated and recorded
6. You pay out commissions manually or via the payout workflow

---

## Setting Up Affiliates

### Creating an Affiliate

1. Go to **Sales & Finance → Affiliates**
2. Click **+ New Affiliate**
3. Fill in:

| Field | Description |
|-------|-------------|
| **Name** | Affiliate's full name or business name |
| **Email** | For payout notifications and reports |
| **Phone** | Optional contact |
| **Referral Code** | Unique code (auto-generated or custom). E.g., `JOHN2024` |
| **Commission Tier** | Which commission tier applies |
| **Notes** | Internal notes |

4. Click **Save**

The affiliate can now use their referral code at POS.

---

## Commission Tiers

Tiers define how much commission an affiliate earns:

### Creating a Commission Tier

1. Go to **Sales & Finance → Affiliates → Tiers**
2. Click **+ New Tier**
3. Configure:

| Field | Description |
|-------|-------------|
| **Tier Name** | e.g., "Standard", "VIP Partner", "Influencer" |
| **Commission Type** | Percentage of sale or Fixed amount per sale |
| **Commission Rate** | e.g., 5% or $10 flat |
| **Minimum Sale Amount** | Minimum order total for commission to apply |
| **Maximum Commission** | Cap per transaction (optional) |
| **Applies To** | All products, specific categories, or specific tags |

4. Click **Save**

### Example Tier Configuration
```
Tier: "Standard Referral"
Type: Percentage
Rate: 8%
Minimum Sale: $50
Max Commission: $200 per sale
```

---

## Using Referral Codes at POS

1. Build the customer's cart as normal
2. Before completing the sale, locate the **Referral Code** field in the right panel
3. Enter the affiliate's code (e.g., `JOHN2024`)
4. Newclear validates the code and shows the affiliate's name
5. Complete the sale

The sale is now attributed to the affiliate, and the commission is calculated and recorded.

:::note
Only one referral code can be applied per sale. If a code is invalid or the affiliate is inactive, Newclear shows a warning and the sale proceeds without commission attribution.
:::

---

## How Commissions Are Calculated

Commissions are calculated at the time of sale and are **immutable**:

- If the tier is 8% and the sale total is $150 → commission = $12.00
- This $12.00 is locked in immediately and recorded against the affiliate's earnings
- You cannot retroactively change a commission amount after the sale completes

This ensures affiliates always know exactly what they earned, with no surprises.

---

## Commission Immutability Rule

Once a sale completes with a referral code:

- ✅ Commission amount is locked
- ✅ Visible immediately in affiliate earnings
- ❌ Cannot be manually edited after the fact

The only exception: **Full Refunds** (see below).

---

## Refunds and Commissions

| Scenario | Commission Outcome |
|----------|--------------------|
| **Full Refund** | Commission is **voided** (set to $0, marked as Reversed) |
| **Partial Refund** | Commission remains unchanged |
| **Exchange** | Original voided; new commission created on the new sale |

This ensures affiliates are only compensated when the business actually retains revenue.

---

## Payout Management

### Viewing Affiliate Earnings

1. Go to **Sales & Finance → Affiliates → [Affiliate Name]**
2. The **Earnings** tab shows:
   - All attributed sales
   - Commission per sale
   - Total unpaid earnings
   - Payment history

### Recording a Payout

1. Open the affiliate profile
2. Click **Record Payout**
3. Enter:
   - **Amount** — How much you're paying
   - **Date** — Payment date
   - **Method** — Bank transfer, check, PayPal, etc.
   - **Reference** — Optional transaction ID
4. Click **Save**

The payout is recorded and the affiliate's outstanding balance is reduced accordingly.

### Payout Reports

Go to **Sales & Finance → Reports → Affiliates** for:
- Total commissions earned per affiliate (by period)
- Outstanding (unpaid) commissions
- Payout history
- Top affiliates by sales volume
