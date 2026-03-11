import { useState } from 'react';
import { publications } from '../data/publications';

const tabs = ['Overview', 'Methodology', 'Framework', 'Case Study', 'Publications'];

const dimensionIcons: Record<string, string> = {
  'Economic': '💰',
  'Food': '🌾',
  'Health': '🏥',
  'Environmental': '🌿',
  'Personal': '🛡️',
  'Communal': '👥',
  'Political': '⚖️',
};

export default function Research() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e2a4a)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: '#e2bc6b', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', border: '1px solid rgba(201,168,76,0.5)', marginBottom: '1.25rem' }}>
            PhD Research · RMIT University
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
            Human Security Implications of China's<br />Non-Interference Principle in Zimbabwe
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7 }}>
            A qualitative case study of Nyamakope Village, Mutoko District
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: '64px', zIndex: 40 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              style={{
                padding: '14px 20px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                borderBottom: tab === i ? '3px solid #c9a84c' : '3px solid transparent',
                backgroundColor: 'transparent',
                color: tab === i ? '#916d1a' : '#374151',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Overview */}
        {tab === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>
                Research Question
              </h2>
              <div style={{ backgroundColor: '#0f172a', borderLeft: '4px solid #c9a84c', padding: '1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'white', fontSize: '16px', lineHeight: 1.7 }}>
                  "What is the impact of China's claimed non-interference approach on human
                  security in Zimbabwe?"
                </p>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#0f172a', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Sub-Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'What is the human security situation in Zimbabwe?',
                  'What is the link between Chinese non-interference policy and governance in Zimbabwe?',
                  "What are the implications of China's economic interests on human security in Zimbabwe?",
                ].map((q, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#c9a84c', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>{i + 1}</div>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>
                Research Gap & Significance
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                <p>
                  Existing scholarship on China-Africa relations overwhelmingly focuses on state-to-state
                  dynamics — trade agreements, loan conditions, and diplomatic positioning. The subnational
                  impact on community human security is critically understudied.
                </p>
                <p>
                  This research fills that gap by conducting the first systematic application of the UNDP
                  Human Security Framework to a Chinese mining investment community in Zimbabwe, revealing
                  how non-interference doctrine translates into tangible human costs.
                </p>
                <p>
                  The research proposes the concept of <strong style={{ color: '#0f172a' }}>"structured non-interference"</strong> —
                  arguing that China's foreign policy principle functions not as a neutral stance but as a
                  governance architecture that systematically excludes community accountability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Methodology */}
        {tab === 1 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '2rem' }}>
              Research Methodology
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Paradigm', content: 'Interpretivism / Social Constructivism — meanings and realities are socially constructed; the researcher\'s interpretive role is central.', icon: '🔬' },
                { title: 'Research Design', content: 'Qualitative, empirical single case study approach (Yin 2009). The case of Nyamakope Village provides bounded, in-depth analysis.', icon: '📐' },
                { title: 'Primary Method', content: 'Key Informant Interviews (KIIs) — 24 participants. Purposive sampling to ensure diversity: diplomats, academics, villagers, officials, civil society.', icon: '🎤' },
                { title: 'Data Analysis', content: 'NVivo 12 qualitative analysis software. Thematic coding of interview transcripts identifying 9 major themes across 24 informants.', icon: '💻' },
                { title: 'Analytical Lens', content: 'UNDP Human Security Framework (1994) — seven dimensions applied to map community-level security threats and protection gaps.', icon: '🔭' },
                { title: 'Ethics', content: 'RMIT Human Research Ethics Committee clearance. Informed consent, anonymity, and confidentiality protocols applied throughout fieldwork.', icon: '✅' },
              ].map(item => (
                <div key={item.title} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Framework */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.75rem' }}>
              Theoretical Framework
            </h2>
            <p style={{ color: '#334155', fontSize: '15px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              The UNDP Human Development Report (1994) introduced a people-centred conception of security
              encompassing seven dimensions. This research applies all seven as an analytical lens to the
              Nyamakope community.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { dim: 'Economic', def: 'Assured basic income; freedom from poverty and economic deprivation' },
                { dim: 'Food', def: 'Physical and economic access to basic food; protection from hunger' },
                { dim: 'Health', def: 'Access to healthcare; protection from disease and physical harm' },
                { dim: 'Environmental', def: 'Access to clean water, air, and land; protection from environmental degradation' },
                { dim: 'Personal', def: 'Protection from physical violence, torture, and coercion' },
                { dim: 'Communal', def: 'Protection of cultural identity, ethnic group membership, and social cohesion' },
                { dim: 'Political', def: 'Protection of human rights and fundamental freedoms; political participation' },
              ].map(item => (
                <div key={item.dim} style={{ backgroundColor: '#0f172a', borderRadius: '10px', padding: '1.5rem', border: '1px solid #2d3f6b' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{dimensionIcons[item.dim]}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#c9a84c', marginBottom: '0.5rem' }}>{item.dim} Security</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study */}
        {tab === 3 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>
                Nyamakope Village
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                <p>
                  Nyamakope Village is located in Mutoko District, Mashonaland East Province, Zimbabwe.
                  The community consists primarily of smallholder and subsistence farming families with
                  generational ties to the land — their primary source of livelihood and identity.
                </p>
                <p>
                  In January 2022, Jinding Mining Zimbabwe (Pvt) Ltd — a Chinese-owned granite extraction
                  company — initiated the forced displacement of multiple families to expand mining operations.
                  No meaningful community consultation was conducted prior to the displacement.
                </p>
                <p>
                  Despite community petitions to local government and national authorities, official response
                  was minimal. The Chinese embassy, when approached, invoked the non-interference principle
                  to decline any mediating role.
                </p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>
                Jinding Mining Zimbabwe
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Company Type', value: 'Chinese-owned, granite extraction (commercial mining)' },
                  { label: 'Operation', value: 'Quarrying and export of granite stone' },
                  { label: 'Location', value: 'Nyamakope Village, Mutoko District, Mashonaland East' },
                  { label: 'Key Incident', value: 'January 2022: forced displacement of farming households' },
                  { label: 'Government Response', value: 'Minimal; ZANU-PF complicity reported by informants' },
                  { label: 'Embassy Response', value: 'Non-interference invoked; declined mediating role' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                    <div style={{ minWidth: '140px', fontSize: '12px', fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#475569' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Publications */}
        {tab === 4 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#0f172a', marginBottom: '2rem' }}>
              Publications & Research Output
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {publications.map(pub => (
                <div key={pub.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      backgroundColor: pub.status === 'under-review' ? '#fef3c7' : pub.status === 'in-progress' ? '#eff6ff' : '#f0fdf4',
                      color: pub.status === 'under-review' ? '#92400e' : pub.status === 'in-progress' ? '#1e40af' : '#15803d',
                    }}>
                      {pub.status.replace('-', ' ')}
                    </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>{pub.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {pub.title}
                  </h3>
                  {pub.abstract && (
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {pub.abstract}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {pub.tags.map(tag => (
                      <span key={tag} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
