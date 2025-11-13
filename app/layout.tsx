import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "The Durbar School",
  description: "The Durbar School official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutralDark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
