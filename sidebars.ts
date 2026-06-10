import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: '📊 Dashboard',
      items: [
        'dashboard/overview',
        'dashboard/preferences',
      ],
    },
    {
      type: 'category',
      label: '📦 Products',
      items: [
        'products/overview',
        'products/creating-products',
        'products/inventory',
        'products/categories',
        'products/import-export',
        'products/ai-enhancement',
      ],
    },
    {
      type: 'category',
      label: '🛒 Point of Sale',
      items: [
        'pos/overview',
        'pos/creating-sales',
        'pos/stripe-terminal',
        'pos/refunds',
        'pos/customers',
      ],
    },
    {
      type: 'category',
      label: '📋 Orders',
      items: [
        'orders/overview',
      ],
    },
    {
      type: 'category',
      label: '🔗 Channel Listings',
      items: [
        'channels/overview',
        'channels/shopify',
        'channels/ebay',
        'channels/woocommerce',
        'channels/amazon',
        'channels/walmart',
        'channels/listing-templates',
      ],
    },
    {
      type: 'category',
      label: '💰 Sales & Finance',
      items: [
        'sales-finance/sales-history',
        'sales-finance/promotions',
        'sales-finance/loyalty-credits',
        'sales-finance/affiliates',
        'sales-finance/reporting',
      ],
    },
    {
      type: 'category',
      label: '⚡ Reactors',
      items: [
        'reactors/overview',
        'reactors/product-flyer',
        'reactors/ashley-sync',
        'reactors/shipday',
        'reactors/ai-enhancer',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Settings',
      items: [
        'settings/store-general',
        'settings/users',
        'settings/warehouses',
        'settings/sellers',
        'settings/payments',
        'settings/api-keys',
        'settings/navigation',
        'settings/preferences',
        'settings/security',
      ],
    },
    {
      type: 'category',
      label: '🏭 Operations',
      items: [
        'operations/stock-check',
        'operations/attendance',
      ],
    },
    {
      type: 'category',
      label: '📱 Mobile & Connect',
      items: [
        'mobile-app/overview',
        'connect/overview',
      ],
    },
    {
      type: 'category',
      label: '🔌 API Reference',
      items: [
        'api/overview',
        'api/products',
        'api/sales',
        'api/reports',
      ],
    },
  ],
};

export default sidebars;
