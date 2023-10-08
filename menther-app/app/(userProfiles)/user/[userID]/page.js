
import { db } from "@/firebase-config";
import { auth } from "@clerk/nextjs"
import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import MentorDashboard from "./components/mentor-dashboard";
import MenteeDashboard from "./components/mentee-dashboard";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import BasicProfile from "./components/basic-info"

export async function generateStaticParams() {
  return [1];
}

const UserProfile = async ({ params }) => {

  const { userId } = auth();

  const profileRef = doc(db, "userProfile", userId);
  const userProfileSnap = await getDoc(profileRef)

  if (!userProfileSnap.exists()) {
    console.log("does not exist!")
    redirect(`/user/${userId}/create`)
  }

  const user = userProfileSnap.data();

  return ( 
    <div className="p-20 m-auto space-y-2">
      
      <BasicProfile user={user} />
      { user.role.length > 1 ? <>
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab>Mentee</Tab>
            <Tab>Mentor</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MenteeDashboard user={user} />
            </TabPanel>
            <TabPanel>
              <MentorDashboard user={user} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </> : <>
      {user.role.includes("Mentee") && <MenteeDashboard user={user}/>}
      {user.role.includes("Mentor") && <MentorDashboard user={user}/>}
      </>}
    </div>
  );
}
 
export default UserProfile;