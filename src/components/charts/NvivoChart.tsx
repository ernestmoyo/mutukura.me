import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { nvivoThemes } from '../../data/chartData';

export default function NvivoChart() {
  const sorted = [...nvivoThemes].sort((a, b) => b.count - a.count);
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart layout="vertical" data={sorted} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" horizontal={false} />
        <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <YAxis type="category" dataKey="theme" width={210} tick={{ fill: '#94a3b8', fontSize: 11 }} />
        <Tooltip
          formatter={(v) => [Number(v), 'NVivo References']}
          contentStyle={{ backgroundColor: '#1e2a4a', border: '1px solid #2d3f6b', borderRadius: '8px', color: 'white' }}
        />
        <Bar dataKey="count" radius={[0, 4, 4, 0]}>
          {sorted.map((entry, i) => (
            <Cell key={entry.theme} fill={i === 0 ? '#c9a84c' : i < 3 ? '#e2bc6b' : '#2d3f6b'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
