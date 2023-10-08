import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {

  const { userId } = auth();

  return (
    <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
        background="black.500"
        boxShadow="md"
      >
      <div className="w-full flex h-16 items-center px-4">
        <Image
          src='/mentHer.png'
          alt="MentHer Logo"
          boxSize="50px"
          mr="2"
        />
        <MainNav className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4 w">
          { !userId ? 
            <Link
              key={"/login"}
              href={"/login"}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Button colorScheme="yellow" variant="outline">Login</Button>
            </Link>  
          : <>
              <Link
                  key={`/user/${userId}`}
                  href={`/user/${userId}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >My Profile
              </Link>  
              <UserButton afterSignOutUrl="/"/> 
            </> 
          }
        </div>
      </div>
    </Flex>
  )
}

export default Navbar;