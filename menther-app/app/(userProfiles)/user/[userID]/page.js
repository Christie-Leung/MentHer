"use client"
import { db } from "@/firebase-config";
import { auth } from "@clerk/nextjs"
import { collection, doc, getDoc, query } from "firebase/firestore";
import { redirect, useParams } from "next/navigation";
// TODO: Profile Dashboard (takes in the userID param)
const UserProfile = async ({ params }) => {

  const { userId } = auth();

  const profileRef = doc(db, "userProfile", userId);
  const userProfileSnap = await getDoc(profileRef)

  if (!userProfileSnap.exists()) {
    console.log("does not exist!")
    redirect(`/user/${userId}/create`)
  }
  console.log(userProfileSnap.data());
  return ( 
    <>
    <p>{userProfileSnap.data()}</p>
    </>
  );
}
 
export default UserProfile;