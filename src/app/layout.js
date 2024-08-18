import { Sen } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "HUB",
  description: "",
};

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
