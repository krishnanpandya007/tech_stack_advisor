import './globals.css'; 
import { Rubik } from 'next/font/google';

const asd = Rubik({ subsets: ['latin'], weight: "400" }); 

export const metadata = {
  title: 'Tech Stack Advisor - Find Your Perfect Technology Stack',
  description: 'Get personalized technology stack recommendations based on your project requirements, experience level, and constraints. Make informed decisions with our intelligent quiz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={asd.className} style={{ letterSpacing: 0 }}>
        {children}
      </body>
    </html>
  );
}
