import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { debtByCreditor } from '../../data/chartData';

export default function DebtChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={debtByCreditor} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `$${v}M`} />
        <Tooltip
          formatter={(v) => [`$${Number(v).toLocaleString()}M`, 'Debt']}
          contentStyle={{ backgroundColor: '#1e2a4a', border: '1px solid #2d3f6b', borderRadius: '8px', color: 'white' }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {debtByCreditor.map((entry) => (
            <Cell key={entry.label} fill={entry.label === 'China' ? '#c9a84c' : '#2d3f6b'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
