import { PortalSidebar } from '@/components/portal/PortalSidebar';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PortalSidebar />
      <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64">
        {children}
      </main>
    </div>
  );
}
