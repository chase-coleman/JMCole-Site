import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'FAQs', url: '/medicare-faqs' },
  { name: 'Turning 65', url: '/turning-65' },
  { name: 'Medicare Options', url: '/medicare-options' },
  { name: 'About Us', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

const isCurrent = (pathname, url) =>
  url === '/' ? pathname === '/' : pathname.startsWith(url);

function NavBar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Solidify the bar once the page scrolls away from the top
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes (covers browser back/forward).
  // Derived during render rather than in an effect, per the React docs.
  const [drawerPath, setDrawerPath] = useState(pathname);
  if (drawerPath !== pathname) {
    setDrawerPath(pathname);
    setOpen(false);
  }

  const handleNavigate = (url) => {
    navigate(url);
    setOpen(false);
  };

  return (
    <header className={`nav ${stuck || open ? 'is-stuck' : ''}`}>
      <div className="wrap nav-inner">
        <button className="brand" onClick={() => handleNavigate('/')} aria-label="JMCole Group — home">
          <span className="brand-mark" aria-hidden="true">JM</span>
          <span className="brand-name">JMCole&nbsp;Group</span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {pages.map((page) => (
            <button
              key={page.name}
              onClick={() => handleNavigate(page.url)}
              className={`nav-link ${isCurrent(pathname, page.url) ? 'is-active' : ''}`}
              aria-current={isCurrent(pathname, page.url) ? 'page' : undefined}
            >
              {page.name}
            </button>
          ))}
        </nav>

        <button
          className="btn btn-primary hidden sm:inline-flex"
          onClick={() => handleNavigate('/contact')}
        >
          Request a call
          <ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>
      </div>

      {open && (
        <div className="nav-drawer" id="mobile-nav">
          <div className="wrap flex flex-col gap-1 py-3">
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => handleNavigate(page.url)}
                className={`nav-drawer-link ${isCurrent(pathname, page.url) ? 'is-active' : ''}`}
              >
                {page.name}
              </button>
            ))}
            <button
              className="btn btn-primary mt-2 sm:hidden"
              onClick={() => handleNavigate('/contact')}
            >
              Request a call
              <ArrowForwardIcon className="btn-arrow" sx={{ fontSize: 16 }} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
