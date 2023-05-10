import '@/styles/global.css';
import "react-tooltip/dist/react-tooltip.css";
// import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Marcos G. personal website',
  description: 'I am a frontend developer and this is my portfolio website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
//   const pages = await getPages();
  // const pages = [];

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}