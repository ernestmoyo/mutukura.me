import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { chineseAidTimeline } from '../../data/chartData';

export default function AidFlowChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chineseAidTimeline} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
        <defs>
          <linearGradient id="loansGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c9a84c" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#c9a84c" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="grantsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2d3f6b" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#2d3f6b" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="year" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `$${v}M`} />
        <Tooltip
          formatter={(v, name) => [`$${Number(v).toLocaleString()}M`, String(name)]}
          contentStyle={{ backgroundColor: '#1e2a4a', border: '1px solid #2d3f6b', borderRadius: '8px', color: 'white' }}
        />
        <Legend wrapperStyle={{ color: '#94a3b8', fontSize: '13px' }} />
        <ReferenceLine x="2000" stroke="rgba(201,168,76,0.4)" label={{ value: 'Look East', position: 'top', fill: '#c9a84c', fontSize: 11 }} />
        <ReferenceLine x="2013" stroke="rgba(201,168,76,0.4)" label={{ value: 'Mining Boom', position: 'top', fill: '#c9a84c', fontSize: 11 }} />
        <Area type="monotone" dataKey="loans" name="Loans" stroke="#c9a84c" fill="url(#loansGrad)" strokeWidth={2} />
        <Area type="monotone" dataKey="grants" name="Grants" stroke="#6b8ac4" fill="url(#grantsGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
