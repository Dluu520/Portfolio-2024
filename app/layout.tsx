import "@/app/ui/global.css";
import { poppins, inter } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
