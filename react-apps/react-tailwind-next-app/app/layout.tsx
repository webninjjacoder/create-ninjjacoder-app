'use client';
import './styles.scss';
import {
  BaseLayout,
  Footer,
  Header,
  NavItemProps,
  // @ts-ignore
  MenuButton,
  // @ts-ignore
  MenuItem,
} from '@mskcc/carbon-react';
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

  const menu = (
    <MenuButton label='My Account' icon='account_circle'>
      <MenuItem label='First action' />
      <MenuItem label='Second action' />
    </MenuButton>
  );

  return (
    <html lang='en'>
      <body>
        <BaseLayout
          header={
            <Header
              maxWidth='fluid'
              productName='Application'
              navItems={navItems}
              controls={menu}
            />
          }
          footer={<Footer />}
        >
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
