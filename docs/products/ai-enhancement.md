---
id: ai-enhancement
title: AI Product Enhancement
sidebar_label: AI Enhancement
description: Use OpenAI or Google Gemini to automatically generate product titles, descriptions, and tags in Newclear.
---

# AI Product Enhancement

Newclear's **AI Enhancer Reactor** brings the power of large language models directly into your product workflow. Connect an OpenAI or Google Gemini API key and let AI automatically generate optimized product titles, detailed descriptions, and relevant tags — for one product or thousands at once.

---

## Prerequisites

1. The **AI Enhancer Reactor** must be installed (Super Admin → Settings → Reactors)
2. At least one AI API key must be configured (OpenAI or Gemini)

---

## Connecting an AI API Key

### OpenAI
1. Go to **Settings → Reactors → AI Enhancer**
2. Click **Add OpenAI Key**
3. Paste your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
4. Select the model to use: `gpt-4o`, `gpt-4-turbo`, or `gpt-3.5-turbo`
5. Click **Save**

### Google Gemini
1. Go to **Settings → Reactors → AI Enhancer**
2. Click **Add Gemini Key**
3. Paste your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
4. Select the model: `gemini-1.5-pro` or `gemini-1.5-flash`
5. Click **Save**

:::tip
Gemini Flash is fast and cost-effective for bulk operations. GPT-4o produces the most detailed, polished descriptions for high-value products.
:::

---

## What AI Can Generate

For each product, the AI Enhancer can produce:

| Output | Description |
|--------|-------------|
| **Title** | SEO-optimized product name with key attributes |
| **Description** | Multi-paragraph HTML description with features and benefits |
| **Short Description** | One-line summary for listings and snippets |
| **Tags** | Relevant keyword tags for filtering and SEO |
| **Search Keywords** | Additional hidden keywords for channel listings |

The AI is prompted with your product's existing data (SKU, current name, condition, category) and generates contextually relevant content.

---

## Enhancing a Single Product

1. Open any product in the **Product Form**
2. Scroll to the **Name** or **Description** field
3. Click the **✨ AI Enhance** button next to the field
4. Wait 2–5 seconds for the AI to generate content
5. Review the generated text
6. Click **Accept** to apply it or **Regenerate** to try again
7. You can accept individual fields without accepting all

---

## Auto Product Builder

The **Auto Product Builder** is a special mode that creates an entire product listing from just a few inputs:

1. Go to **Products → Create Product**
2. Enter only: SKU, basic product name, and condition
3. Click **Auto-Build with AI**
4. The AI fills in:
   - Optimized title
   - Full description
   - Relevant tags
   - Suggested category
   - Suggested price (if market data is available)
5. Review everything, make any adjustments, and save

This dramatically reduces the time needed to create a new listing — especially for high-volume sellers processing dozens of new SKUs per day.

---

## Batch AI Enhancement

Use batch enhancement to update your entire catalog (or a filtered subset) with AI-generated content:

### Running a Batch Enhancement
1. Go to **Products → Import/Export** → **AI Enhancement** tab
   — OR — go to **Settings → Reactors → AI Enhancer → Batch Enhance**
2. Choose your scope:
   - **All products** — Enhances every product in the catalog
   - **Missing descriptions only** — Only products with empty description fields
   - **By category** — Enhance all products in a specific category
   - **By tag** — Enhance all products with a specific tag
   - **Selected products** — Pick specific SKUs
3. Choose which fields to generate: Title, Description, Tags (check all three for best results)
4. Select your AI provider and model
5. Click **Run Batch Enhancement**

### Batch Processing
- Products are processed sequentially (API rate limits)
- Progress is shown in real time
- You can pause and resume at any time
- A completion report shows how many products were updated and any errors

:::warning
Batch enhancement will **overwrite** existing titles and descriptions for matched products. If you want to preserve existing content, use the **Missing descriptions only** scope, or back up your catalog via Export first.
:::

---

## AI Enhancement Quality Tips

For best results:

- **Provide accurate SKUs** — The AI uses the SKU to infer product type
- **Set the correct condition** — AI includes condition in the description
- **Assign a category** — Helps the AI write category-appropriate copy
- **Review high-value products** — Always review AI output for expensive items before publishing

---

## Cost Estimates

AI API calls are billed by your AI provider, not Newclear. Approximate costs:

| Model | Per Product (title + description + tags) |
|-------|------------------------------------------|
| GPT-3.5 Turbo | ~$0.001 |
| GPT-4o | ~$0.01–$0.03 |
| Gemini Flash | ~$0.0005 |
| Gemini 1.5 Pro | ~$0.005 |

A 1,000-product batch with Gemini Flash costs approximately $0.50.

---

## Related

- [AI Enhancer Reactor Settings](/docs/reactors/ai-enhancer)
- [Creating Products](/docs/products/creating-products)
- [Reactors Overview](/docs/reactors/overview)
