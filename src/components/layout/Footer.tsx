import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  if (location.pathname === '/defense') return null;

  return (
    <footer style={{ backgroundColor: '#0a0f1e', color: 'rgba(255,255,255,0.85)', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: '#c9a84c', marginBottom: '0.75rem' }}>
            Kudakwashe Praise Mutukura
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6 }}>
            PhD Candidate, RMIT University<br />
            School of Global, Urban & Social Studies<br />
            Melbourne, Australia
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: 'white', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Research</div>
          <p style={{ fontSize: '13px', lineHeight: 1.8 }}>
            China-Africa Relations<br />
            Human Security<br />
            Non-Interference Principle<br />
            Zimbabwe Studies
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: 'white', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Case Study</div>
          <p style={{ fontSize: '13px', lineHeight: 1.8 }}>
            Mutoko District, Zimbabwe<br />
            Jinding Mining Zimbabwe<br />
            Mashonaland East Province
          </p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '2rem auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', fontSize: '12px', textAlign: 'center' }}>
        © {new Date().getFullYear()} Kudakwashe Praise Mutukura · PhD Research Portfolio · RMIT University
      </div>
    </footer>
  );
}
