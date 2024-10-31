'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog';

  return (
    <>
      {!isBlogPost && <Header />}
      {children}
    </>
  );
}