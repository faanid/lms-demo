import "./globals.css";


import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir="rtl"
      className={` dark`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}