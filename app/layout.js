import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lakshmica Enterprises - Premium Poultry & Cattle Feed Solutions",
  description: "Your trusted partner for high-quality, nutritious poultry and cattle feed solutions. Premium feed for healthy livestock and maximum productivity.",
  keywords: "poultry feed, cattle feed, animal nutrition, livestock feed, dairy feed, chicken feed, cow feed, farm feed, agricultural feed, Indian feed supplier",
  authors: [{ name: "Lakshmica Enterprises" }],
  creator: "Lakshmica Enterprises",
  publisher: "Lakshmica Enterprises",
  openGraph: {
    title: "Lakshmica Enterprises - Premium Poultry & Cattle Feed Solutions",
    description: "Premium feed solutions for healthy livestock and maximum productivity",
    url: "https://lakshmica.com",
    siteName: "Lakshmica Enterprises",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshmica Enterprises - Premium Feed Solutions",
    description: "Premium poultry and cattle feed for healthy livestock",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.png" />
        <link rel="apple-touch-icon" href="/iamge.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
