export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-brand-navy">Billing & Payments</h1>
        <p className="text-gray-600 text-sm">View invoices and manage your payment history.</p>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <p className="text-gray-500 text-center py-8">No invoices yet. Billing will appear here after project initiation.</p>
      </div>
    </div>
  );
}
