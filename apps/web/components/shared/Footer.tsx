export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 section-padding">
      <div className="container-max">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">\u2600\ufe0f</span>
              <span className="font-heading text-lg font-bold text-white">
                Solar<span className="text-brand-gold">Stars</span>
              </span>
            </div>
            <p className="text-sm mb-4">
              Premium solar energy solutions for homes and businesses. 
              Making clean energy accessible and affordable since 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Battery Storage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="hover:text-white transition-colors">Savings Calculator</a></li>
              <li><a href="/portal" className="hover:text-white transition-colors">Customer Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:8454441915" className="hover:text-white transition-colors">
                  \ud83d\udcde (845) 444-1915
                </a>
              </li>
              <li>
                <a href="mailto:tolin@solarstars.net" className="hover:text-white transition-colors">
                  \u2709\ufe0f tolin@solarstars.net
                </a>
              </li>
              <li className="text-sm">
                \ud83d\udd50 Mon-Fri: 8AM-6PM<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Sat: 9AM-3PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Solar Stars. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
