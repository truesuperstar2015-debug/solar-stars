import { EnergyChart } from '@/components/portal/EnergyChart';
import { SystemOverview } from '@/components/portal/SystemOverview';
import { QuickStats } from '@/components/portal/QuickStats';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-brand-navy">Dashboard</h1>
        <p className="text-gray-600 text-sm">Welcome back! Here is your solar system overview.</p>
      </div>
      <QuickStats />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EnergyChart />
        </div>
        <SystemOverview />
      </div>
    </div>
  );
}
