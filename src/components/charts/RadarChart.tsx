import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import { humanSecurityRadar } from '../../data/chartData';

export default function HumanSecurityRadar() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart data={humanSecurityRadar}>
        <PolarGrid stroke="rgba(255,255,255,0.15)" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <Radar name="Threat Severity" dataKey="threat" stroke="#ef4444" fill="#ef4444" fillOpacity={0.35} />
        <Radar name="Protection Capacity" dataKey="protection" stroke="#c9a84c" fill="#c9a84c" fillOpacity={0.25} />
        <Legend wrapperStyle={{ color: '#94a3b8', fontSize: '13px' }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
