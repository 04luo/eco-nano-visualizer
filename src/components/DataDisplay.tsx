
import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DataDisplay = () => {
  const [data, setData] = useState({
    temperature: 25.6,
    humidity: 45,
    airQuality: 95,
  });

  // 模拟实时数据更新 - 实际使用时替换为真实数据源
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        temperature: +(prev.temperature + (Math.random() - 0.5)).toFixed(1),
        humidity: Math.min(100, Math.max(0, Math.floor(prev.humidity + (Math.random() - 0.5) * 5))),
        airQuality: Math.min(100, Math.max(0, Math.floor(prev.airQuality + (Math.random() - 0.5) * 3))),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-lg bg-gradient-to-br from-green-100 to-green-200">
        <h3 className="text-sm font-medium text-green-800 mb-2">温度</h3>
        <p className="text-2xl font-bold text-green-900">{data.temperature}°C</p>
      </div>
      
      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
        <h3 className="text-sm font-medium text-blue-800 mb-2">湿度</h3>
        <p className="text-2xl font-bold text-blue-900">{data.humidity}%</p>
      </div>
      
      <div className="p-4 rounded-lg bg-gradient-to-br from-teal-100 to-teal-200">
        <h3 className="text-sm font-medium text-teal-800 mb-2">空气质量</h3>
        <p className="text-2xl font-bold text-teal-900">{data.airQuality}</p>
      </div>
    </div>
  );
};

export default DataDisplay;
