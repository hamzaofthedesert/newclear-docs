---
id: loyalty-credits
title: Loyalty & Credits
sidebar_label: Loyalty & Credits
description: Set up and manage customer loyalty credits in Newclear — earning rules, assigning credits, and redeeming at POS.
---

# Loyalty & Credits

Newclear's **Loyalty & Credits** system lets you reward customers with store credits that they can redeem at checkout. Credits are a flexible tool — use them for loyalty rewards, promotional gifts, refund credits, or just goodwill gestures.

**Location:** `/sales/loyalty`

---

## How Credits Work

Credits are a monetary value stored on a customer's account:

- Credits are denominated in your store's currency (e.g., 1 credit = $1.00)
- Credits can be earned automatically based on purchase rules
- Credits can be assigned manually by staff
- Credits are redeemed at POS checkout like a payment method
- Credits do not expire by default (configurable)

---

## Credit Rules

**Credit Rules** define how customers automatically earn credits. For example:
- "Earn $1 credit for every $20 spent"
- "Earn 5 credits on their birthday month"
- "Earn 10 credits on first purchase"

### Creating a Credit Rule

1. Go to **Sales & Finance → Loyalty & Credits → Rules**
2. Click **+ New Rule**
3. Configure:

| Field | Description |
|-------|-------------|
| **Rule Name** | e.g., "Standard Purchase Rewards" |
| **Trigger** | Purchase completion, Birthday, First Purchase, Manual |
| **Earn Rate** | Credits earned per dollar spent (e.g., 0.05 = 5 cents per $1) |
| **Minimum Purchase** | Minimum order value to qualify |
| **Applies To** | All customers, specific customer groups |
| **Max Credits per Transaction** | Cap on credits earned in a single sale |
| **Expiry** | Do credits earned under this rule expire? If yes, after how many days? |

4. Click **Save Rule**

### Rule Stacking
Multiple rules can be active simultaneously. If a customer qualifies for multiple rules on the same transaction, all applicable rules fire (unless you configure rules to be exclusive).

---

## Manually Assigning Credits to a Customer

Staff can add credits to any customer's account at any time:

1. Go to **Customers** and open the customer's profile
2. Click **Add Credits**
3. Enter:
   - **Amount** — Credits to add
   - **Reason** — Optional note (e.g., "Loyalty reward for 1-year anniversary")
4. Click **Save**

The customer's balance updates immediately and is visible in their profile and at POS checkout.

---

## Viewing a Customer's Credit Balance

- **Customer Profile** → shows current balance prominently
- **POS** → when a customer is selected, their balance is shown in the payment section
- **Reports** → loyalty reports show total outstanding credits and redemptions

---

## Redeeming Credits at POS Checkout

1. At POS, scan/search items and add to cart
2. Select the customer from the customer panel
3. Their available credit balance is shown below the customer name
4. In the **Payment Method** section, select **Store Credit**
5. Newclear applies credits up to the order total
6. If credits cover the full amount → sale is complete
7. If credits don't cover the full amount → select a second payment method for the remainder (split payment)

### Split Payment with Credits
- Customer has $30 in credits, order total is $50
- Select **Store Credit** → $30 is applied
- Select **Card** → charge remaining $20 via Stripe Terminal

---

## Credit Expiration

By default, credits don't expire. If you enable expiration on a credit rule:
- Customers are notified (if email notifications are configured) before credits expire
- Expired credits are automatically removed from the balance
- Expiry dates are visible in the customer's credit history

---

## Credits on Refunds

When a refund is issued:
- **Cash/Card refund**: Credits earned on the original sale may be reversed (configurable)
- **Credit note refund**: The refund amount is added to the customer's credit balance instead of a cash/card refund
- To issue a credit note instead of a cash refund: in the refund modal, select "Refund to Store Credit"

---

## Loyalty Reports

Go to **Sales & Finance → Reports → Loyalty** for:
- Total credits issued (all time and by period)
- Total credits redeemed
- Outstanding credit liability (total unspent credits)
- Top customers by credits earned
- Credits about to expire
