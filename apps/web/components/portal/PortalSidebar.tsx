'use client';

import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/portal/dashboard', icon: '\ud83d\udcca' },
  { label: 'Projects', href: '/portal/projects', icon: '\ud83d\udd28' },
  { label: 'Documents', href: '/portal/documents', icon: '\ud83d\udcc1' },
  { label: 'Billing', href: '/portal/billing', icon: '\ud83d\udcb3' },
  { label: 'Support', href: '/portal/support', icon: '\ud83c\udfa7' },
  { label: 'Referrals', href: '/portal/referrals', icon: '\ud83e\udd1d' },
];

export function PortalSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`fixed left-0 top-0 h-full bg-brand-navy text-white z-40 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} hidden lg:block`}>
      <div className="p-4 border-b border-white/10">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl">\u2600\ufe0f</span>
          {!collapsed && (
            <span className="font-heading text-lg font-bold">
              Solar<span className="text-brand-gold">Stars</span>
            </span>
          )}
        </a>
      </div>

      <nav className="p-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-4 left-0 right-0 px-3">
        <div className={`bg-white/5 rounded-lg p-3 ${collapsed ? 'text-center' : ''}`}>
          {!collapsed && (
            <>
              <p className="text-xs text-gray-400">Need help?</p>
              <p className="text-xs text-brand-gold">(845) 444-1915</p>
            </>
          )}
          {collapsed && <span className="text-sm">\ud83d\udcde</span>}
        </div>
      </div>
    </aside>
  );
}
