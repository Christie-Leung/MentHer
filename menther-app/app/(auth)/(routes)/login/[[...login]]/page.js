import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [{ login: 1}];
}

export default function Page({ params }) {
  return <SignIn />;
}