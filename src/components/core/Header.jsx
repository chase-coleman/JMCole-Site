import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { mprcDisplay, pages } from '../../data/constants';

const isCurrent = (pathname, url) =>
  url === '/' ? pathname === '/' : pathname.startsWith(url);

function NavBar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [screenSize, setScreenSize] = useState(() => 
  typeof window !== 'undefined' ? window.innerWidth : 0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Solidify the bar once the page scrolls away from the top
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // 1. Guard against environments where window isn't defined (like Next.js SSR)
    if (typeof window === 'undefined') return;

    // 2. Define the handler to update state
    const handleResize = () => setScreenSize(window.innerWidth);

    // 3. Add the event listener
    window.addEventListener('resize', handleResize);

    // 4. Clean up the listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);

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
        <button className="brand" onClick={() => handleNavigate('/')} aria-label="JMCole Group, home">
          <img src="./jmcole-logo-only.webp" alt="JM" className='w-12' />
          <span className="brand-text">
            <span className="brand-name">JMCole&nbsp;Group</span>
            {screenSize < 600 ? 
            <span className="brand-tagline">{mprcDisplay.abbrev}</span>
            : 
            <span className="brand-tagline">{mprcDisplay.full}</span>
            }
          </span>
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
          className="btn btn-primary nav-cta"
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
              className="btn btn-primary nav-drawer-cta mt-2"
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
