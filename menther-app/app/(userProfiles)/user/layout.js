// app/layout.tsx
import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";



export default function RootLayout({
  children
}) {

  const { userId } = auth();

  if (!userId) {
    return redirect("/login")
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}