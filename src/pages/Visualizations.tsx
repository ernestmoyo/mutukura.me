import DebtChart from '../components/charts/DebtChart';
import HumanSecurityRadar from '../components/charts/RadarChart';
import AidFlowChart from '../components/charts/AidFlowChart';
import NvivoChart from '../components/charts/NvivoChart';
import CommunityImpactChart from '../components/charts/CommunityImpactChart';

interface ChartCardProps {
  title: string;
  subtitle: string;
  source?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

function ChartCard({ title, subtitle, source, children, fullWidth }: ChartCardProps) {
  return (
    <div style={{
      backgroundColor: '#1e2a4a',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #2d3f6b',
      gridColumn: fullWidth ? '1 / -1' : undefined,
    }}>
      <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #2d3f6b' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: '4px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{subtitle}</p>
      </div>
      <div style={{ padding: '1.5rem' }}>
        {children}
      </div>
      {source && (
        <div style={{ padding: '0.75rem 1.5rem', borderTop: '1px solid #2d3f6b', fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
          Source: {source}
        </div>
      )}
    </div>
  );
}

export default function Visualizations() {
  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e2a4a)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: '#e2bc6b', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', border: '1px solid rgba(201,168,76,0.5)', marginBottom: '1.25rem' }}>
            Research Data · Interactive Visualisations
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
            Research Data Dashboard
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7, maxWidth: '650px' }}>
            Interactive charts derived from primary KII data (NVivo analysis), secondary economic data on
            Chinese financial flows to Zimbabwe, and community impact assessments from Mutoko District.
          </p>
        </div>
      </section>

      {/* Charts Grid */}
      <section style={{ backgroundColor: '#0f172a', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

          <ChartCard
            title="Zimbabwe's External Debt by Creditor (2020)"
            subtitle="USD millions | China highlighted in gold | Total debt ≈ 100% of GDP"
            source="World Bank, Zimbabwe Ministry of Finance (2020)"
            fullWidth={false}
          >
            <DebtChart />
          </ChartCard>

          <ChartCard
            title="Human Security Threat Severity — 7 Dimensions"
            subtitle="Based on NVivo qualitative coding from 24 Key Informant Interviews | Higher = greater threat"
            source="Primary KII data — Mutoko District fieldwork, 2024"
          >
            <HumanSecurityRadar />
          </ChartCard>

          <ChartCard
            title="Chinese Financial Flows to Zimbabwe (2000–2021)"
            subtitle="Loans and grants in USD millions | Key policy events annotated"
            source="AidData, Chinese Loans to Africa Database, CARI (2022)"
            fullWidth
          >
            <AidFlowChart />
          </ChartCard>

          <ChartCard
            title="NVivo Analysis: Coded Themes from KII Transcripts"
            subtitle="Frequency of themes across 24 interview transcripts | Top themes highlighted"
            source="Primary data — NVivo 12 thematic analysis, 2024"
            fullWidth
          >
            <NvivoChart />
          </ChartCard>

          <ChartCard
            title="Mutoko Community: Before vs After Jinding Mining"
            subtitle="Key welfare indicators comparing pre- and post-displacement periods"
            source="Primary KII data, community records — Mutoko District, 2024"
            fullWidth
          >
            <CommunityImpactChart />
          </ChartCard>

        </div>
      </section>

      {/* Data Note */}
      <section style={{ backgroundColor: '#0a0f1e', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#1e2a4a', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid #2d3f6b' }}>
          <h4 style={{ fontWeight: 700, color: '#c9a84c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            Data Note
          </h4>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            Radar chart scores and NVivo theme frequencies represent qualitative severity assessments
            coded from Key Informant Interview transcripts using NVivo 12. Community impact figures
            (before/after charts) are derived from triangulated KII responses. Debt and aid flow data
            draw on publicly available secondary sources including AidData and the World Bank.
            All figures are subject to the inherent limitations of qualitative research design.
          </p>
        </div>
      </section>
    </div>
  );
}
