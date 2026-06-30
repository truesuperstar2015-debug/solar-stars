export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-brand-navy">Documents</h1>
          <p className="text-gray-600 text-sm">Access all your contracts, warranties, and permits.</p>
        </div>
        <button className="btn-primary text-sm py-2 px-4">Upload Document</button>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <p className="text-gray-500 text-center py-8">Your documents will appear here once your project is active.</p>
      </div>
    </div>
  );
}
