"use client"
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
    <a href="/">Home</a>
    <div>
    <a href="/login">About</a>
    <a href="/contact">Events</a>
    <a href="/">Calendar</a>
    </div>
</header>
    </main>
  );
}
