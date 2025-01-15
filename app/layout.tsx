import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Interesting way to apply font to entire app. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
