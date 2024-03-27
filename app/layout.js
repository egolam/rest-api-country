import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Provider } from "./themeProvider";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "REST API Countries",
  description: "A Challenge By Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} h-dvh dark:bg-[#202C36] transition-all`}>
        <Provider>
          <Header />
          <main className="h-full bg-[#FAFAFA] dark:bg-[#202C36] md:flex md:justify-center">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
