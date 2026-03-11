import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { communityImpact } from '../../data/chartData';

export default function CommunityImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={communityImpact} margin={{ top: 10, right: 20, left: 10, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="category" tick={{ fill: '#94a3b8', fontSize: 11, angle: -30, textAnchor: 'end' }} interval={0} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e2a4a', border: '1px solid #2d3f6b', borderRadius: '8px', color: 'white' }}
        />
        <Legend wrapperStyle={{ color: '#94a3b8', fontSize: '13px', paddingTop: '16px' }} />
        <Bar dataKey="before" name="Before Jinding" fill="#2d3f6b" radius={[4, 4, 0, 0]} />
        <Bar dataKey="after" name="After Jinding" fill="#c9a84c" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
