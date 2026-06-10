---
id: ai-enhancer
title: AI Enhancer Reactor
sidebar_label: AI Enhancer
description: Set up the AI Enhancer Reactor in Newclear — connect OpenAI or Gemini, use the auto product builder, and run batch enhancements.
---

# AI Enhancer Reactor

The **AI Enhancer Reactor** integrates large language models (OpenAI GPT and Google Gemini) directly into your Newclear product workflow. Generate optimized titles, detailed descriptions, and relevant tags for your products — individually or in bulk.

**Settings Location:** `/settings/reactors/ai-enhancer`

---

## Installation

1. Go to **Settings → Reactors**
2. Find **AI Enhancer**
3. Click **Install**

---

## Connecting API Keys

The AI Enhancer requires at least one AI provider API key to function.

### OpenAI Setup

1. Go to **Settings → Reactors → AI Enhancer → API Keys**
2. Click **Add OpenAI Key**
3. Paste your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
4. Select the default model:
   - `gpt-4o` — Most capable, best for complex/detailed descriptions
   - `gpt-4-turbo` — Fast and capable, good balance
   - `gpt-3.5-turbo` — Fastest and cheapest, adequate for basic descriptions
5. Optionally set a **monthly spending limit** to cap API costs
6. Click **Save**

### Google Gemini Setup

1. Click **Add Gemini Key**
2. Paste your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. Select the default model:
   - `gemini-1.5-pro` — Highest quality, detailed output
   - `gemini-1.5-flash` — Fast, cost-effective for bulk operations
4. Click **Save**

### Switching Between Providers

You can have both OpenAI and Gemini keys active simultaneously. Choose which provider to use:

- **Default Provider** — Used for all AI operations unless overridden
- **Override per batch** — Choose provider when running a batch operation

---

## Auto Product Builder

The Auto Product Builder creates a complete product listing from minimal input:

### Using Auto Product Builder
1. Go to **Products → Create Product**
2. Enter only the minimum required info:
   - SKU
   - Basic product name (or even just the model number)
   - Condition
3. Click **Auto-Build with AI**
4. The AI generates:
   - Optimized, SEO-friendly product title
   - Detailed multi-paragraph description
   - Relevant product tags
   - Suggested category
5. Review and edit the generated content
6. Save the product

This reduces time-to-listing from minutes to seconds for new inventory.

---

## Enhancing Individual Products

For any existing product:

1. Open the product in edit mode
2. Next to the **Name** field, click the **✨ AI Enhance** button
3. Wait 2–5 seconds
4. Review generated title
5. Click **Accept** or **Regenerate**

Do the same for the **Description** and **Tags** fields.

Each field is enhanced independently, so you can accept some AI suggestions and manually edit others.

---

## Batch AI Enhancement

Process your entire catalog (or a subset) with AI:

### Accessing Batch Enhancement
1. Go to **Settings → Reactors → AI Enhancer → Batch Enhance**
   OR
   Go to **Products → Import/Export → AI Enhancement tab**

### Batch Configuration

| Setting | Options |
|---------|---------|
| **Scope** | All Products / Missing Descriptions Only / By Category / By Tag / Selected SKUs |
| **Fields to Generate** | Title / Description / Tags (checkboxes) |
| **AI Provider** | OpenAI or Gemini |
| **Model** | Depends on provider |
| **Overwrite Existing** | Yes (regenerate even if content exists) / No (skip products that already have content) |

### Running the Batch

1. Configure your settings
2. Review the **product count** that will be processed
3. Click **Start Batch Enhancement**
4. A progress bar shows current status
5. You can continue using Newclear during processing
6. A notification appears when the batch completes

### Batch Progress Details
- Products processed: X/Total
- Successfully enhanced: X
- Skipped (had content, overwrite=No): X
- Errors (API failure): X

Download the batch report to review results.

---

## Quality and Review

AI generates content automatically, but review is recommended for:

- High-value, expensive products
- Products where accuracy is critical (medical, safety equipment)
- Products where the AI doesn't have enough context from the SKU alone

:::tip
For best AI output, ensure products have an accurate name, condition, and category set before running enhancement. The AI uses these as context for generating relevant content.
:::

---

## Cost Management

AI API calls are billed by your provider. To control costs:

1. Use **Gemini Flash** for bulk catalog operations (most cost-effective)
2. Use **GPT-4o** only for your most important/expensive products
3. Set a **monthly spending limit** in the API key settings
4. Use **"Missing Descriptions Only"** scope to avoid regenerating content you already have

---

## Related Documentation

- [AI Product Enhancement (Products section)](/docs/products/ai-enhancement)
- [Creating Products](/docs/products/creating-products)
- [Reactors Overview](/docs/reactors/overview)
