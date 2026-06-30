'use client';

export function EnergyChart() {
  const hours = Array.from({ length: 12 }, (_, i) => `${6 + i}:00`);
  const production = [0.2, 1.5, 3.2, 4.8, 5.5, 6.1, 6.3, 5.9, 4.7, 3.1, 1.8, 0.5];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-brand-navy">Energy Production</h3>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="h-48 flex items-end gap-1">
        {production.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-brand-gold/80 rounded-t-sm transition-all hover:bg-brand-gold"
              style={{ height: `${(val / 6.3) * 100}%` }}
            />
            <span className="text-[10px] text-gray-400">{hours[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>Peak: <strong className="text-brand-navy">6.3 kWh</strong> at 12:00</span>
        <span>Total: <strong className="text-brand-navy">28.4 kWh</strong></span>
      </div>
    </div>
  );
}
