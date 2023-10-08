"use client"

import { Avatar, Box, Heading, Tag, Text } from "@chakra-ui/react";

const BasicProfile = ({ user }) => {
  return ( <div className="pl-16 ml-auto">
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-8 items-end">
      <div className="flex-row items-start space-y-1">
      <Heading as="h1" size="3xl">{user.firstName} {user.lastName}</Heading>
      { user.mentorshipLevel != "" && <Tag size="sm" colorScheme="blue">{user.mentorshipLevel}</Tag>}
      </div>
      <div className="grid justify-items-center">
        <Avatar size='2xl' name={user.firstName} src={user.imageURL} />
      </div>
    </div>
    
    { user.bio != "" && 
      <Box
        mt='1'
        as='h3'
      >
        <Text>{user.bio}</Text>
      </Box>  
    }
    
    <div className="pt-5 grid grid-cols-2 gap-x-8 gap-y-4 pb-8">
      { user.pronouns != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Pronouns</Text>
          <Text>{user.pronouns}</Text>
        </Box>  
      }
      { user.email != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Email Address</Text>
          <Text>{user.email}</Text>
        </Box>  
      }
    
      { user.interests.length != 0 && <>
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Field of Interests</Text>
          <div className="space-x-2">
          { user.interests.map((interest) => (<Tag>{interest}</Tag>))}
          </div>
        </Box> 
      </>}
      { user.groups.length > 0 && <>
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Affliated Groups</Text>
          <div className="space-x-2">
          { user.groups.map((group) => (<Tag>{group}</Tag>))}
          </div>
        </Box> 
      </>
      }
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-2">
      { user.linkedin != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">LinkedIn</Text>
          <Text>{user.linkedin}</Text>
        </Box>  
      }
      { user.github != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Github</Text>
          <Text>{user.github}</Text>
        </Box>  
      }
      { user.website != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Website</Text>
          <Text>{user.website}</Text>
        </Box>  
      }
      { user.others != "" && 
        <Box
          mt='1'
          as='h4'
        >
          <Text fontWeight="semibold">Others</Text>
          <Text>{user.others}</Text>
        </Box>  
      }
      </div>

  </div> );
}
 
export default BasicProfile;