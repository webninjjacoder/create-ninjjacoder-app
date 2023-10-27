import { BaseLayout, Header, Footer, NavItemProps } from '@mskcc/carbon-react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface PageSetupProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}
export function PageSetup(props: PageSetupProps) {
  const router = useRouter();

  const navItems: NavItemProps[] = [
    {
      label: 'Home',
      href: '/',
      active: router.pathname === '/',
    },
    {
      label: 'SubPage',
      href: '/subpage',
      active: router.pathname === '/subpage',
    },
  ];

  return (
    <>
      <Head>
        <title>{props.title + ' | MSK' ?? 'MSK'}</title>
      </Head>
      <BaseLayout
        header={<Header navItems={navItems} productName='NextJS with Pages' />}
        footer={<Footer />}
      >
        {props.children}
      </BaseLayout>
    </>
  );
}
