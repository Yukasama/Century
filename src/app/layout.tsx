import Provider from "../components/Provider";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export const metadata = {
  title: "Century",
  description: "An Amazon Web Scraper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="flex bg-sun-300 dark:bg-moon-300 h-screen overflow-hidden">
            <Sidebar />
            <main className="w-full">
              <Header />
              <div className="overflow-y-auto p-5 h-full w-full">{children}</div>
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
