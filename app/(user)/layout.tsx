import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Cursos Online",
  description: "La plataforma de cursos online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <div className="min-h-screen flex flex-col">
        <Header   />
        <main className="flex-1">
          {children}
       </main>
    </div>
    </ClerkProvider>
  );
}
