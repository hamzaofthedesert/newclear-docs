import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/api/overview"
            style={{marginLeft: '1rem', borderColor: 'white', color: 'white'}}>
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '📦 Inventory Management',
    description: 'Real-time stock tracking across multiple warehouses and bin locations. Barcode scanning, reorder alerts, and full audit trails.',
    link: '/docs/products/inventory',
  },
  {
    title: '🛒 Point of Sale',
    description: 'Fast, powerful POS with Stripe Terminal card payments, customer lookup, discounts, loyalty credits, and receipt printing.',
    link: '/docs/pos/overview',
  },
  {
    title: '🔗 Multi-Channel Listings',
    description: 'Sync your catalog to Shopify, eBay, Amazon, WooCommerce, and Walmart. One change in Newclear updates everywhere.',
    link: '/docs/channels/overview',
  },
  {
    title: '🤖 AI Enhancement',
    description: 'Generate optimized product titles, descriptions, and tags automatically using OpenAI GPT or Google Gemini.',
    link: '/docs/products/ai-enhancement',
  },
  {
    title: '💰 Sales & Finance',
    description: 'Complete sales history, promotions engine, loyalty credits, affiliate program, and detailed reporting.',
    link: '/docs/sales-finance/sales-history',
  },
  {
    title: '⚡ Reactors',
    description: 'Extend Newclear with modular plugins — product flyers, Shipday delivery dispatch, Ashley Direct sync, and more.',
    link: '/docs/reactors/overview',
  },
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Documentation`}
      description="Complete documentation for Newclear — the B2B Business OS for inventory, POS, multi-channel listings, and AI automation.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
              {features.map((feature) => (
                <div key={feature.title} className={clsx('col col--4')} style={{marginBottom: '2rem'}}>
                  <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '8px'}}>
                    <div className="card__header">
                      <h3>{feature.title}</h3>
                    </div>
                    <div className="card__body">
                      <p>{feature.description}</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--primary button--sm" to={feature.link}>
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
