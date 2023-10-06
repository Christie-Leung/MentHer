// app/layout.tsx
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default function RootLayout({
  children
}) {

  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
      <>
        {children}
      </>
  );
}