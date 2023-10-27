'use client';
import './styles.scss';
import { BaseLayout, Footer, Header, NavItemProps } from '@mskcc/carbon-react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems: NavItemProps[] = [
    {
      label: 'Home',
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'SubPage',
      href: '/subpage',
      active: pathname === '/subpage',
    },
  ];

  return (
    <html lang='en'>
      <body>
        <BaseLayout
          header={<Header productName='Nextjs App' navItems={navItems} />}
          footer={<Footer />}
        >
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
