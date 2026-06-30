export function SystemOverview() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <h3 className="font-heading font-semibold text-brand-navy mb-4">System Info</h3>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">System Size</span>
          <span className="font-medium text-brand-navy">8.4 kW</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Panels</span>
          <span className="font-medium text-brand-navy">24x REC 350W</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Inverter</span>
          <span className="font-medium text-brand-navy">Enphase IQ8+</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Installed</span>
          <span className="font-medium text-brand-navy">Mar 15, 2025</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Warranty Until</span>
          <span className="font-medium text-brand-navy">Mar 15, 2050</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Status</span>
          <span className="inline-flex items-center gap-1 text-brand-green font-medium">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
