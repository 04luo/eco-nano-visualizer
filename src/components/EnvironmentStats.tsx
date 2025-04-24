
import { Card } from "@/components/ui/card";
import { ThermometerSun, Gauge, CircleDot } from "lucide-react";

const EnvironmentStats = () => {
  const stats = [
    {
      title: "能源效率",
      value: "92%",
      change: "+2.5%",
      icon: <ThermometerSun className="h-6 w-6 text-green-600" />,
    },
    {
      title: "碳排放量",
      value: "24.5",
      unit: "吨",
      change: "-12%",
      icon: <Gauge className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "节能指数",
      value: "8.9",
      change: "+0.7",
      icon: <CircleDot className="h-6 w-6 text-teal-600" />,
    },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">{stat.icon}</div>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
          <p className="text-2xl font-bold text-gray-900">
            {stat.value}
            {stat.unit && <span className="text-sm ml-1">{stat.unit}</span>}
          </p>
        </Card>
      ))}
    </>
  );
};

export default EnvironmentStats;
