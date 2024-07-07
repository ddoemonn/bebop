import { Dosis } from 'next/font/google';

const dosis = Dosis({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  pageStyle?: 'flex';
}

export default function Layout({ children, pageStyle }: LayoutProps) {
  return (
    <div
      className={` min-h-screen ${pageStyle === 'flex' && 'flex flex-col items-center'} ${dosis.className} bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90% animate-gradient`}
    >
      {children}
    </div>
  );
}
