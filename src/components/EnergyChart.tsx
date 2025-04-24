
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EnergyChart = () => {
  // 模拟一天24小时的节能数据
  const data = [
    { time: '00:00', energySaved: 12, carbonReduced: 5 },
    { time: '02:00', energySaved: 15, carbonReduced: 6 },
    { time: '04:00', energySaved: 10, carbonReduced: 4 },
    { time: '06:00', energySaved: 8, carbonReduced: 3 },
    { time: '08:00', energySaved: 20, carbonReduced: 8 },
    { time: '10:00', energySaved: 25, carbonReduced: 10 },
    { time: '12:00', energySaved: 30, carbonReduced: 12 },
    { time: '14:00', energySaved: 28, carbonReduced: 11 },
    { time: '16:00', energySaved: 22, carbonReduced: 9 },
    { time: '18:00', energySaved: 18, carbonReduced: 7 },
    { time: '20:00', energySaved: 15, carbonReduced: 6 },
    { time: '22:00', energySaved: 13, carbonReduced: 5 },
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
            name="节能量(kWh)"
            dataKey="energySaved"
            stroke="#2F855A"
            strokeWidth={2}
            dot={{ fill: '#2F855A' }}
          />
          <Line
            type="monotone"
            name="减排量(kg)"
            dataKey="carbonReduced"
            stroke="#63B3ED"
            strokeWidth={2}
            dot={{ fill: '#63B3ED' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
