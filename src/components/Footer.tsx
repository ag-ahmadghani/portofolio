import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, label: 'Github', href: 'https://github.com/ag-ahmadghani' },
  { icon: <FaLinkedin />, label: 'Linkedin', href: 'https://www.linkedin.com/in/ahmad-ghani-900440354/' },
  { icon: <FaWhatsapp />, label: 'Whatsapp', href: 'https://www.me/6285774722326' },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1677ff]/20 text-sm font-bold text-[#1677ff] ring-1 ring-[#1677ff]/30">AG</span>
              <span className="text-lg font-semibold text-white">Ahmad Ghani</span>
            </div>
            <p className="max-w-xs text-sm text-gray-400">
              Mahasiswa Informatika yang passionate dalam pengembangan web dan aplikasi mobile.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 ring-1 ring-white/10 transition-colors hover:text-[#1677ff] hover:ring-[#1677ff]/30"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1677ff]">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1677ff]">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jakarta, Indonesia</li>
              <li>
                <a href="https://www.linkedin.com/in/ahmad-ghani-900440354/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1677ff]">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/ag-ahmadghani" target="_blank" rel="noopener noreferrer" className="hover:text-[#1677ff]">github.com/ag-ahmadghani</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Ahmad Ghani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
