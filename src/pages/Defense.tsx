import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, FileText, BarChart2 } from 'lucide-react';
import { defenseSlides } from '../data/defenseSlides';
import DebtChart from '../components/charts/DebtChart';
import HumanSecurityRadar from '../components/charts/RadarChart';
import AidFlowChart from '../components/charts/AidFlowChart';
import NvivoChart from '../components/charts/NvivoChart';

const chartRegistry: Record<string, React.ReactNode> = {
  debt: <DebtChart />,
  radar: <HumanSecurityRadar />,
  aid: <AidFlowChart />,
  nvivo: <NvivoChart />,
};

function SlideContent({ slide, showNotes }: { slide: typeof defenseSlides[0]; showNotes: boolean }) {
  if (slide.type === 'cover') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: '#c9a84c', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.3)', marginBottom: '2rem' }}>
          PhD Defense · May 2026
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)', color: 'white', lineHeight: 1.2, maxWidth: '800px', marginBottom: '1.5rem' }}>
          {slide.title}
        </h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#c9a84c', marginBottom: '1.5rem' }} />
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          {slide.subtitle}
        </p>
        <div style={{ backgroundColor: '#1e2a4a', padding: '1.25rem 2rem', borderRadius: '10px', border: '1px solid #2d3f6b' }}>
          <div style={{ fontWeight: 700, color: '#c9a84c', fontSize: '1.1rem', marginBottom: '4px' }}>Praise Mutukura</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>PhD Candidate · RMIT University · College of Business & Law</div>
        </div>
        {showNotes && slide.notes && (
          <div style={{ marginTop: '2rem', backgroundColor: 'rgba(201,168,76,0.1)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)', maxWidth: '700px', textAlign: 'left' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Speaker Notes</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{slide.notes}</p>
          </div>
        )}
      </div>
    );
  }

  if (slide.type === 'chart') {
    return (
      <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'white', marginBottom: '0.5rem' }}>
          {slide.title}
        </h2>
        {slide.subtitle && <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>{slide.subtitle}</p>}
        <div style={{ flex: 1, minHeight: 0 }}>
          {slide.chartKey && chartRegistry[slide.chartKey]}
        </div>
        {showNotes && slide.notes && (
          <div style={{ marginTop: '1rem', backgroundColor: 'rgba(201,168,76,0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Speaker Notes</div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{slide.notes}</p>
          </div>
        )}
      </div>
    );
  }

  if (slide.type === 'conclusion') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#c9a84c', marginBottom: '2rem' }}>
          {slide.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '750px', textAlign: 'left' }}>
          {slide.body?.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', backgroundColor: '#1e2a4a', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #2d3f6b' }}>
              <div style={{ color: '#c9a84c', fontSize: '1rem', marginTop: '1px' }}>✦</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
          Thank you · Questions Welcome
        </div>
        {showNotes && slide.notes && (
          <div style={{ marginTop: '1.5rem', backgroundColor: 'rgba(201,168,76,0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)', maxWidth: '700px', width: '100%' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Speaker Notes</div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{slide.notes}</p>
          </div>
        )}
      </div>
    );
  }

  // Default: content, outline
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'white', marginBottom: '1.5rem' }}>
        {slide.title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        {slide.body?.map((item, i) => {
          if (item === '—') return <div key={i} style={{ height: '1px', backgroundColor: '#2d3f6b', margin: '0.25rem 0' }} />;
          const isPrimary = item.startsWith('PRIMARY:') || item.startsWith('ECONOMIC:') || item.startsWith('FOOD:') || item.startsWith('HEALTH:') || item.startsWith('ENVIRONMENTAL:') || item.startsWith('PERSONAL:') || item.startsWith('COMMUNAL:') || item.startsWith('POLITICAL:');
          const isNumber = /^\d+\./.test(item);
          return (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ color: isPrimary ? '#ef4444' : '#c9a84c', fontSize: '1rem', marginTop: '1px', flexShrink: 0 }}>
                {isNumber ? '' : '›'}
              </div>
              <p style={{
                fontSize: 'clamp(13px, 1.6vw, 15px)',
                color: isPrimary ? 'white' : 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                fontWeight: isPrimary ? 600 : 400,
              }}>
                {item}
              </p>
            </div>
          );
        })}
      </div>
      {showNotes && slide.notes && (
        <div style={{ marginTop: '1.5rem', backgroundColor: 'rgba(201,168,76,0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Speaker Notes</div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{slide.notes}</p>
        </div>
      )}
    </div>
  );
}

export default function Defense() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const total = defenseSlides.length;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const slide = defenseSlides[current];

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 60%, #1e2a4a 100%)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100,
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        borderBottom: '1px solid #2d3f6b',
        backgroundColor: 'rgba(10,15,30,0.9)',
        backdropFilter: 'blur(8px)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '11px', color: '#0f172a' }}>
            PM
          </div>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
            PhD Defense · Praise Mutukura
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setShowNotes(!showNotes)}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 12px', borderRadius: '6px',
              backgroundColor: showNotes ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.06)',
              color: showNotes ? '#c9a84c' : 'rgba(255,255,255,0.6)',
              border: `1px solid ${showNotes ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
              cursor: 'pointer', fontSize: '12px', fontWeight: 600,
            }}
          >
            <FileText size={14} />
            Notes
          </button>
          <Link
            to="/visualizations"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 12px', borderRadius: '6px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none', fontSize: '12px', fontWeight: 600,
            }}
          >
            <BarChart2 size={14} />
            Data
          </Link>
          <Link
            to="/"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 12px', borderRadius: '6px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none', fontSize: '12px', fontWeight: 600,
            }}
          >
            <X size={14} />
            Exit
          </Link>
        </div>
      </div>

      {/* Slide area */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        <SlideContent slide={slide} showNotes={showNotes} />
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        borderTop: '1px solid #2d3f6b',
        backgroundColor: 'rgba(10,15,30,0.9)',
        backdropFilter: 'blur(8px)',
        flexShrink: 0,
        gap: '1rem',
      }}>
        <button
          onClick={prev}
          disabled={current === 0}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '6px',
            backgroundColor: current === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.08)',
            color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: current === 0 ? 'default' : 'pointer',
            fontSize: '13px', fontWeight: 600,
          }}
        >
          <ChevronLeft size={16} /> Previous
        </button>

        {/* Slide dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', flex: 1 }}>
          {defenseSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              title={`Slide ${i + 1}`}
              style={{
                width: i === current ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: i === current ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                padding: 0,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: 500, minWidth: '60px', textAlign: 'center' }}>
            {current + 1} / {total}
          </span>
          <button
            onClick={next}
            disabled={current === total - 1}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: '6px',
              backgroundColor: current === total - 1 ? 'rgba(255,255,255,0.03)' : '#c9a84c',
              color: current === total - 1 ? 'rgba(255,255,255,0.2)' : '#0f172a',
              border: '1px solid transparent',
              cursor: current === total - 1 ? 'default' : 'pointer',
              fontSize: '13px', fontWeight: 700,
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
