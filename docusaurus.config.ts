import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Newclear Docs',
  tagline: 'Your complete guide to Newclear',
  favicon: 'img/favicon.ico',

  url: 'https://docs.newclear.io',
  baseUrl: '/',

  organizationName: 'hamzaofthedesert',
  projectName: 'newclear-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/hamzaofthedesert/newclear-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/newclear-social.png',
    navbar: {
      title: 'Newclear',
      logo: {
        alt: 'Newclear Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://prod.newclear.io',
          label: 'Launch App',
          position: 'right',
        },
        {
          href: 'https://github.com/hamzaofthedesert/newclear-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Products',
              to: '/docs/products/overview',
            },
            {
              label: 'Point of Sale',
              to: '/docs/pos/overview',
            },
            {
              label: 'API Reference',
              to: '/docs/api/overview',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Launch Newclear',
              href: 'https://prod.newclear.io',
            },
            {
              label: 'Channel Listings',
              to: '/docs/channels/overview',
            },
            {
              label: 'Reactors',
              to: '/docs/reactors/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hamzaofthedesert/newclear-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Newclear. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
