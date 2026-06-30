export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-brand-navy">Support</h1>
          <p className="text-gray-600 text-sm">Get help from our team or browse our knowledge base.</p>
        </div>
        <button className="btn-primary text-sm py-2 px-4">New Ticket</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold text-brand-navy mb-2">Contact Us Directly</h3>
          <p className="text-sm text-gray-600 mb-4">Prefer to talk? Reach out anytime.</p>
          <p className="text-sm"><strong>Phone:</strong> (845) 444-1915</p>
          <p className="text-sm"><strong>Email:</strong> tolin@solarstars.net</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold text-brand-navy mb-2">Open Tickets</h3>
          <p className="text-gray-500 text-sm py-4">No open tickets. You are all good!</p>
        </div>
      </div>
    </div>
  );
}
