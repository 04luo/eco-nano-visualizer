
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EmissionsChart = () => {
  // 模拟数据 - 实际使用时替换为真实数据
  const data = [
    { month: '1月', emissions: 65 },
    { month: '2月', emissions: 59 },
    { month: '3月', emissions: 80 },
    { month: '4月', emissions: 55 },
    { month: '5月', emissions: 48 },
    { month: '6月', emissions: 42 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="month" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '0.375rem',
            }}
          />
          <Bar dataKey="emissions" fill="#63B3ED" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsChart;
