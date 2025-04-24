
import { Card } from "@/components/ui/card";
import DataDisplay from "@/components/DataDisplay";
import EnergyChart from "@/components/EnergyChart";
import EmissionsChart from "@/components/EmissionsChart";
import EnvironmentStats from "@/components/EnvironmentStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          环保数据监测中心
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EnvironmentStats />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-4">每日节能减排趋势</h2>
            <EnergyChart />
          </Card>
          
          <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-4">累计节能减排数据</h2>
            <EmissionsChart />
          </Card>
        </div>

        <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-4">实时数据监测</h2>
          <DataDisplay />
        </Card>
      </div>
    </div>
  );
};

export default Index;
