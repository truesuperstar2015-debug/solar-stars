import { ProjectTracker } from '@/components/portal/ProjectTracker';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-brand-navy">Project Tracker</h1>
        <p className="text-gray-600 text-sm">Follow your solar installation progress step by step.</p>
      </div>
      <ProjectTracker />
    </div>
  );
}
