import { useNavigate } from 'react-router';

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Medicare Options', url: '/medicare-options' },
      { name: 'Turning 65', url: '/turning-65' },
      { name: 'FAQs', url: '/medicare-faqs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-auto border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="wrap section-sm">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="brand" role="presentation">
              <img src="./jmcole-logo-only.webp" alt="JM" className='w-12' />
              <span className="brand-name">JMCole&nbsp;Group</span>
            </div>
            <p className="body max-w-xs !text-sm">
              An independent Medicare brokerage serving Oregon since 2016.
              Licensed in multiple states. Our guidance is always free.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} className="flex flex-col gap-3" aria-label={col.title}>
              <h2 className="mono" style={{ color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '.14em' }}>
                {col.title}
              </h2>
              {col.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.url)}
                  className="text-left text-sm transition-colors"
                  style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          ))}

          {/* Office */}
          <div className="flex flex-col gap-3">
            <h2 className="mono" style={{ color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '.14em' }}>
              Office
            </h2>
            <a className="text-sm" style={{ color: 'var(--accent)' }} href="tel:541-554-8382">
              541-554-8382
            </a>
            <p className="body !text-sm">
              1011 Valley River Way, Suite #116A
              <br />
              Eugene, OR 97401
            </p>
            <img
              src="/mprc-logo.webp"
              alt="Medicare Plans Resource Center"
              className="mt-1 w-40 max-w-full opacity-60"
            />
          </div>
        </div>

        <hr className="hairline my-10" />

        <div className="flex flex-col gap-6">
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            <span className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.14em' }}>
              Disclaimers ·{' '}
            </span>
            Not connected with or endorsed by the United States government or the
            federal Medicare program. We may not offer every plan available in your
            area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State
            Health Insurance Assistance Program (SHIP) to get information on all of
            your options. JMColegroup complies with applicable Federal civil rights
            laws and does not discriminate on the basis of race, color, national
            origin, age, disability, or sex. ATTENTION: If you speak a language
            other than English, language assistance services, free of charge, are
            available to you. Call 1-800-MEDICARE (TTY: 1-877-486-2048).
          </p>
          <p className="mono" style={{ color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} JMCole Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
