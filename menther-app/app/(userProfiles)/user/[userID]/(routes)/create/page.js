import { auth, clerkClient } from "@clerk/nextjs";
import Form from "./components/form";
import * as React from "react";

const createProfile = async ({ params }) => {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId);

  return (
    <Form 
      userId={userId}
      firstName={user.firstName} 
      lastName={user.lastName} 
      email={user.emailAddresses[0]?.emailAddress}
      imageURL={user.imageUrl}
    />
  );
};

export default createProfile;
