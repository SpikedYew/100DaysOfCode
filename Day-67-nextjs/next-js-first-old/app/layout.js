import "./globals.css";

export const metadata = {
  title: "My First Next.js App",
  description: "Created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
