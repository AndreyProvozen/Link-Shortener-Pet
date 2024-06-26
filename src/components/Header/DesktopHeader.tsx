import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import Dropdown from '@/atoms/Dropdown';
import Heart from '@/icons/Heart';
import LogOut from '@/icons/LogOut';

const ConfirmSignOut = dynamic(() => import('@/components/Modals/ConfirmSignOut'), { ssr: false });

const DesktopHeader = () => {
  const { push } = useRouter();
  const { data: session } = useSession();

  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const dropdownData = session
    ? [
        {
          customField: (
            <div className="flex items-center">
              <Image
                className="flex-shrink-0 rounded-full overflow-hidden mr-2 w-auto"
                src={session.user?.image || ''}
                width={48}
                height={48}
                alt=""
              />
              <div className="overflow-hidden">
                <p className="text-ellipsis overflow-hidden">{session.user?.name}</p>
                <p className="text-ellipsis overflow-hidden">{session.user?.email}</p>
              </div>
            </div>
          ),
        },
        {
          fieldTitle: 'Favorite links',
          fieldFunction: () => push(`${window.location.origin}/links?search=favorite`),
          fieldImage: <Heart fill="white" strokeWidth="2" stroke="white" />,
        },
        {
          fieldTitle: 'Sign out',
          fieldFunction: () => setIsSignOutModalOpen(true),
          fieldImage: <LogOut />,
        },
      ]
    : [];

  const navFields = [
    { name: 'Home', link: '/' },
    { name: 'Links', link: '/links' },
    session
      ? {
          component: (
            <Dropdown
              dropdownData={dropdownData}
              placeholder={
                <div className="flex mx-3">
                  <Image
                    className="rounded-full mr-2 w-auto"
                    src={session.user?.image || ''}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p className="text-2xl">My profile</p>
                </div>
              }
            />
          ),
        }
      : { name: ' Sign in', link: '/auth' },
  ];

  return (
    <nav className="flex">
      {navFields.map(({ link, component, name }, i) => (
        <div key={name ?? i}>
          {link ? (
            <Link href={link} className="mx-3 text-2xl">
              {name}
            </Link>
          ) : (
            component
          )}
        </div>
      ))}
      {isSignOutModalOpen && <ConfirmSignOut setIsModalOpen={setIsSignOutModalOpen} />}
    </nav>
  );
};

export default DesktopHeader;
