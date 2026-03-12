import { academicTimeline } from '../data/timeline';

const interests = [
  'China-Africa Relations',
  'Human Security',
  'Non-Interference Principle',
  'Qualitative Research',
  'NVivo Analysis',
  'Zimbabwean Politics',
  'Mining & Community Rights',
  'Development Studies',
];

const typeColors: Record<string, string> = {
  education: '#c9a84c',
  fieldwork: '#10b981',
  publication: '#6366f1',
  milestone: '#3b82f6',
};

export default function About() {
  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e2a4a)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <img
              src="/praise.jpeg"
              alt="Kudakwashe Praise Mutukura"
              style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #c9a84c', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            />
          </div>
          <div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: '#e2bc6b', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.5)', marginBottom: '1rem' }}>
              PhD Candidate · RMIT University
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', marginBottom: '0.75rem' }}>
              Kudakwashe Praise Mutukura
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.5rem' }}>
              Researcher in China-Africa relations and human security, investigating how China's
              non-interference principle shapes community-level security outcomes in Zimbabwe.
              Based at RMIT University's School of Global, Urban and Social Studies.
            </p>
            <a
              href="/Praise_Mutukura_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#c9a84c',
                color: '#0f172a',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              Download CV / Resume
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ backgroundColor: '#f8f9fc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.8rem', color: '#0f172a', marginBottom: '1.5rem' }}>
              Academic Biography
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
              <p>
                Kudakwashe Praise Mutukura is a PhD candidate at RMIT University, Melbourne, specialising in the intersection
                of Chinese foreign policy and human security in sub-Saharan Africa. His doctoral research examines
                how China's principle of non-interference — a cornerstone of its diplomatic doctrine — affects the
                lived security of communities impacted by Chinese investment in Zimbabwe.
              </p>
              <p>
                His research is grounded in a detailed case study of Mutoko District, where
                the operations of Jinding Mining Zimbabwe (Pvt) Ltd triggered the forced displacement of smallholder
                farming families in January 2022. Through 24 Key Informant Interviews with community members,
                government officials, diplomats, trade unionists, and civil society representatives, Praise
                reconstructs the human security consequences across all seven UNDP dimensions.
              </p>
              <p>
                Prior to his doctoral studies, Praise worked as an Executive Research Assistant at the Higherlife
                Foundation, conducting humanitarian research on cholera elimination and Cyclone Idai recovery
                in Zimbabwe. He holds an MA (Distinction) in Conflict Resolution from Dokuz Eylul University,
                Turkey, and a BA (First Class Honours) in Politics and Public Management from Midlands State
                University, Zimbabwe.
              </p>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.25rem' }}>
              Research Interests
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {interests.map(interest => (
                <span
                  key={interest}
                  style={{
                    backgroundColor: 'white',
                    color: '#1e2a4a',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 500,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.25rem' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { degree: 'PhD (Candidate)', institution: 'RMIT University, Melbourne', year: '2022–2026 (May)' },
                { degree: 'MA Conflict Resolution (Distinction)', institution: 'Dokuz Eylul University, Turkey', year: '2017–2019' },
                { degree: 'BA Politics & Public Management (First Class)', institution: 'Midlands State University, Zimbabwe', year: '2012–2015' },
              ].map(ed => (
                <div key={ed.degree} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{ed.degree}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{ed.institution}</div>
                  <div style={{ fontSize: '12px', color: '#c9a84c', fontWeight: 600, marginTop: '2px' }}>{ed.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: '#0f172a', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.8rem', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
            Research Timeline
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '16px', top: 0, bottom: 0, width: '2px', backgroundColor: '#2d3f6b' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {academicTimeline.map((event) => (
                <div key={event.date} style={{ display: 'flex', gap: '1.5rem', paddingLeft: '48px', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '8px',
                    top: '4px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: typeColors[event.type] || '#2d3f6b',
                    border: '2px solid #0f172a',
                    boxShadow: `0 0 0 2px ${typeColors[event.type] || '#2d3f6b'}`,
                  }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: typeColors[event.type] || '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                      {event.date}
                    </div>
                    <div style={{ fontWeight: 600, color: 'white', fontSize: '15px', marginBottom: '4px' }}>
                      {event.title}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
