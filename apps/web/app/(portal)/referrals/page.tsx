export default function ReferralsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-brand-navy">Referral Program</h1>
        <p className="text-gray-600 text-sm">Earn rewards by referring friends and family to Solar Stars.</p>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
        <h3 className="text-xl font-semibold text-brand-navy mb-2">Earn $500 Per Referral</h3>
        <p className="text-gray-600 text-sm mb-4">
          Share your unique referral link. When someone signs up and completes installation, you earn $500.
        </p>
        <div className="bg-gray-50 rounded-lg p-3 inline-block">
          <code className="text-sm text-brand-navy">https://solarstars.net/ref/YOUR_CODE</code>
        </div>
      </div>
    </div>
  );
}
