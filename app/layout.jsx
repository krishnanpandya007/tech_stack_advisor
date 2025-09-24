import './globals.css'; 
import { Rubik } from 'next/font/google';

const inter = Rubik({ subsets: ['latin'], weight: "400" });

export const metadata = {
  title: 'Tech Stack Advisor - Find Your Perfect Technology Stack',
  description: 'Get personalized technology stack recommendations based on your project requirements, experience level, and constraints. Make informed decisions with our intelligent quiz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ letterSpacing: 0 }}>
        {children}
      </body>
    </html>
  );
}
