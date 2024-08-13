import type { Metadata } from "next"
import { Sora } from "next/font/google"
import { Toaster } from "./_components/ui/toast/Toaster"
import CursorFollower from "./_layouts/cursor/Cursor"
import Header from "./_layouts/header/Header"
import LoadingTransitionScreen from "./_layouts/loading-transition-screen/LoadingTransitionScreen"
import Main from "./_layouts/main/Main"
import "./globals.css"
import styles from "./layout.module.scss"
import Providers from "./Providers"

const sora = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Denis Shevchuk Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${styles.body}`}>
        <Providers>
          <LoadingTransitionScreen />
          <CursorFollower />
          <Header />
          <Main>{children}</Main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
