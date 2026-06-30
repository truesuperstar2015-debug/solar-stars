'use client';

const milestones = [
  { title: 'Contract Signed', status: 'completed', date: 'Jan 10, 2025' },
  { title: 'Site Survey', status: 'completed', date: 'Jan 18, 2025' },
  { title: 'System Design', status: 'completed', date: 'Feb 2, 2025' },
  { title: 'Permits Approved', status: 'completed', date: 'Feb 20, 2025' },
  { title: 'Installation', status: 'completed', date: 'Mar 12-15, 2025' },
  { title: 'Inspection Passed', status: 'completed', date: 'Mar 22, 2025' },
  { title: 'PTO (Permission to Operate)', status: 'completed', date: 'Apr 1, 2025' },
  { title: 'System Active', status: 'completed', date: 'Apr 1, 2025' },
];

export function ProjectTracker() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div key={milestone.title} className="flex gap-4 mb-6 last:mb-0">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                milestone.status === 'completed' ? 'bg-brand-green' :
                milestone.status === 'in_progress' ? 'bg-brand-gold animate-pulse' :
                'bg-gray-200'
              }`} />
              {index < milestones.length - 1 && (
                <div className={`w-0.5 flex-1 mt-1 ${
                  milestone.status === 'completed' ? 'bg-brand-green' : 'bg-gray-200'
                }`} />
              )}
            </div>
            {/* Content */}
            <div className="pb-4">
              <p className={`font-medium text-sm ${
                milestone.status === 'completed' ? 'text-brand-navy' :
                milestone.status === 'in_progress' ? 'text-brand-gold' :
                'text-gray-400'
              }`}>
                {milestone.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{milestone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
