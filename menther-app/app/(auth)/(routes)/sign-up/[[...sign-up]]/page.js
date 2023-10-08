import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [{ [sign-up]: [1]}];
}

export default function Page({ params }) {
  if (params.includes(1)) {
    return <></>
  }
  return <SignUp />;
}