import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/visualizations', label: 'Data' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isDefense = location.pathname === '/defense';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  if (isDefense) return null;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? '#0f172a' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>
            PM
          </div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '16px', color: 'white', letterSpacing: '0.02em' }}>
            Praise Mutukura
          </span>
        </NavLink>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.85)',
                transition: 'color 0.2s',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/defense"
            style={{
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0f172a',
              backgroundColor: '#c9a84c',
              padding: '6px 16px',
              borderRadius: '20px',
              letterSpacing: '0.03em',
            }}
          >
            Defense Slides
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px', display: 'none' }}
          className="mobile-menu-btn"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ backgroundColor: '#0f172a', padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.85)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/defense"
            style={{
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0f172a',
              backgroundColor: '#c9a84c',
              padding: '10px 20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            Defense Slides
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
