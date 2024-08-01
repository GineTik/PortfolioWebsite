import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import styles from "./layout.module.scss"
import CursorFollower from "./layouts/cursor/Cursor"
import Header from "./layouts/header/Header"
import Main from "./layouts/main/Main"
import Providers from "./Providers"

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Denis Shevchuk Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${styles.body}`}>
        <Providers>
          <CursorFollower />
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
