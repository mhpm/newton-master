import './globals.css';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from './providers';

import { Raleway } from 'next/font/google';
const relaway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newton App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark purple-dark'>
      <body className={`bg-neutral-800 ${relaway.className}`}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
