"use client";

import "./globals.css";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./Todo/store.js";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <nav className="navbar">
            <div className="nav-container">
              <span className="brand">Next.js App</span>
              <div className="nav-links">
                <Link href="/" className="nav-item">Home</Link>
                <Link href="/About" className="nav-item">About Us</Link>
                <Link href="/Contact" className="nav-item">Contact Us</Link>
                <Link href="/User" className="nav-item">Users</Link>
                <Link href="/Todo" className="nav-item">Todo</Link>
              </div>
            </div>
          </nav>
          <main className="page">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
