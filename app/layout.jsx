import './globals.css'; 
import { Rubik } from 'next/font/google';

const asd = Rubik({ subsets: ['latin'], weight: "400" }); 

export const metadata = {
  title: 'Tech Stack Advisor - Find Your Perfect Technology Stack',
  description: 'Not sure which tools to use? Enter your project idea and get smart, tailored tech stack suggestions to build faster and better.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://techstackadvisor.info/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TechStackAdvisor",
              "url": "https://techstackadvisor.info",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://techstackadvisor.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DW2Y4DBDZ8"></script>
      {`<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DW2Y4DBDZ8');
      </script>`}
      <body className={asd.className} style={{ letterSpacing: 0 }}>
        {children}
      </body>
    </html>
  );
}
