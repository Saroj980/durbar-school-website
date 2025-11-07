import "./globals.css";


export const metadata = {
  title: "The Durbar School",
  description: "Nepal’s first modern educational institution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutralDark font-body">
        {children}
      </body>
    </html>
  );
}
