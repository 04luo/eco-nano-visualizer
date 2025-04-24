
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EnergyChart = () => {
  // 模拟数据 - 实际使用时替换为真实数据
  const data = [
    { time: '00:00', value: 30 },
    { time: '04:00', value: 25 },
    { time: '08:00', value: 40 },
    { time: '12:00', value: 45 },
    { time: '16:00', value: 35 },
    { time: '20:00', value: 30 },
    { time: '24:00', value: 28 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="time" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '0.375rem',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2F855A"
            strokeWidth={2}
            dot={{ fill: '#2F855A' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
