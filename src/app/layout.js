import { Roboto } from "next/font/google";
import "./globals.css";
import Home from "./page";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'], });

export const metadata = {
  title: "Dashboard",
};

export default function App() {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={roboto.className}>
        <main className="items-center justify-between w-full">
          <Home/>
        </main>
      </body>
    </html>
  );
}
