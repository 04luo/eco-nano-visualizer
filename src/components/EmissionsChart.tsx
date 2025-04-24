
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EmissionsChart = () => {
  // 模拟最近7天的累计数据
  const data = [
    { date: '4-18', totalEnergySaved: 280, totalCarbonReduced: 112 },
    { date: '4-19', totalEnergySaved: 320, totalCarbonReduced: 128 },
    { date: '4-20', totalEnergySaved: 380, totalCarbonReduced: 152 },
    { date: '4-21', totalEnergySaved: 450, totalCarbonReduced: 180 },
    { date: '4-22', totalEnergySaved: 520, totalCarbonReduced: 208 },
    { date: '4-23', totalEnergySaved: 600, totalCarbonReduced: 240 },
    { date: '4-24', totalEnergySaved: 680, totalCarbonReduced: 272 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="date" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '0.375rem',
            }}
          />
          <Bar name="累计节能(kWh)" dataKey="totalEnergySaved" fill="#2F855A" radius={[4, 4, 0, 0]} />
          <Bar name="累计减排(kg)" dataKey="totalCarbonReduced" fill="#63B3ED" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsChart;
