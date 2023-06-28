import Link from 'next/link';

import GitHub from '@/icons/svg/GitHub';
import Instagram from '@/icons/svg/Instagram';
import Steam from '@/icons/svg/Steam';
import { credits } from 'mock';

const linksData = [
  {
    icon: <GitHub fill="white" />,
    href: 'https://github.com/AndreyProvozen',
    ariaLabel: 'Link to GitHub',
  },
  { icon: <Instagram />, href: '/', ariaLabel: 'Link to Instagram' },
  { icon: <Steam />, href: '', ariaLabel: 'Link to Steam' },
];

const Footer = ({ containerClasses = '' }) => (
  <div className={`bg-lightBlack text-white ${containerClasses}`}>
    <div className="container max-mobile:flex-col-reverse max-w-screen-desktop flex justify-between px-5 items-center py-5 mx-auto">
      <p className="text-3xl font-extrabold">Link Shortener</p>
      <div className="flex">
        {linksData.map(({ icon, href, ariaLabel }) => (
          <Link
            target="_blank"
            href={href}
            className="mr-3 hover:[&>svg]:fill-lightPink"
            key={href}
            aria-label={ariaLabel}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
    <div className="container py-5 mx-auto">
      {credits.map(({ href, text }) => (
        <Link target="_blank" className="block mb-2" href={href} key={href}>
          {text}
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;