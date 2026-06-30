export function QuickStats() {
  const stats = [
    { label: 'Energy Produced Today', value: '28.4 kWh', icon: '\u26a1', trend: '+12%' },
    { label: 'Monthly Savings', value: '$142', icon: '\ud83d\udcb0', trend: '+8%' },
    { label: 'CO2 Offset', value: '1.2 tons', icon: '\ud83c\udf31', trend: '' },
    { label: 'System Health', value: '98%', icon: '\u2705', trend: '' },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{stat.icon}</span>
            {stat.trend && (
              <span className="text-xs text-brand-green font-medium">{stat.trend}</span>
            )}
          </div>
          <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
          <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
