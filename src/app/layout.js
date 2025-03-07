import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "My NextJs App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={roboto.className}
      >
      
        {children}
      </body>
    </html>
  );
}
