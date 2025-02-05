
import '../app/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-2xl">Users & Posts Dashboard</h1>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}









