import { Link } from 'react-router-dom';

const stats = [
  { value: 'US$1.57B', label: "China's loans to Zimbabwe" },
  { value: '100%', label: 'External debt as % of GDP (2020)' },
  { value: '7', label: 'Human Security dimensions analysed' },
  { value: '24', label: 'Key Informant Interviews conducted' },
];

const pillars = [
  {
    icon: '🔍',
    title: 'Case Study',
    desc: 'Nyamakope Village, Mutoko District — community displaced by Chinese granite mining operations',
  },
  {
    icon: '🏭',
    title: 'Focus Company',
    desc: 'Jinding Mining Zimbabwe (Pvt) Ltd — Chinese-owned granite extraction, Mashonaland East',
  },
  {
    icon: '📊',
    title: 'Methodology',
    desc: 'Qualitative · Key Informant Interviews · NVivo 12 · UNDP Human Security Framework',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #1e2a4a 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
          background: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: '#c9a84c', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.3)' }}>
              PhD Research · RMIT University · 2022–2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, color: 'white', maxWidth: '820px', marginBottom: '1.5rem' }}>
            Human Security Implications of China's{' '}
            <span style={{ color: '#c9a84c' }}>Non-Interference Principle</span>{' '}
            in Zimbabwe
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '620px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            A qualitative case study examining how Chinese investment in Nyamakope Village
            affects community human security across seven dimensions — economic, food, health,
            environmental, personal, communal, and political.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/research"
              style={{
                backgroundColor: '#c9a84c',
                color: '#0f172a',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Explore Research
            </Link>
            <Link
              to="/defense"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              View Defense Slides
            </Link>
          </div>

          {/* PhD Progress Bar */}
          <div style={{ marginTop: '4rem', maxWidth: '700px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>PhD Timeline</span>
              <span style={{ fontSize: '12px', color: '#c9a84c', fontWeight: 600 }}>Final Milestone</span>
            </div>
            <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '93%', background: 'linear-gradient(90deg, #2d3f6b, #c9a84c)', borderRadius: '3px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Oct 2022</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>May 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#0f172a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '2.8rem', color: '#c9a84c', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Snapshot */}
      <section style={{ backgroundColor: '#f8f9fc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#0f172a', marginBottom: '0.75rem' }}>
              Research at a Glance
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px' }}>
              Bridging foreign policy analysis and community human security
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {pillars.map(p => (
              <div key={p.title} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #c9a84c' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e2a4a)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>
            Explore the Full Research
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', marginBottom: '2rem', lineHeight: 1.6 }}>
            Dive into interactive data visualisations, the complete methodology, case study findings,
            and the PhD defense presentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/visualizations" style={{ backgroundColor: '#c9a84c', color: '#0f172a', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              Data Visualisations
            </Link>
            <Link to="/about" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              About the Researcher
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
