"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Box,
  Icon,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Image,
  VStack,
  Grid,
  GridItem
} from "@chakra-ui/react";
import {
  MdSupervisorAccount,
  MdEvent,
  MdSchool,
  MdFavorite,
} from "react-icons/md";

export default function Home() {
  return (
    <Box mb="8">
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
        background="black.500"
        boxShadow="md"
      >
        <Flex alignItems="center">
          <Image
            src='https://via.placeholder.com/150'
            alt="MentHer Logo"
            boxSize="50px"
            mr="2"
          />
          <Text fontSize="2xl" fontWeight="bold">
            MentHer
          </Text>
        </Flex>
        <UserButton afterSignOutUrl="/" />
      </Flex>

      <Container maxW="container.xl" py="8">
        <Flex
          direction="column"
          alignItems="center"
          textAlign="center"
          mb="4"
        >
          <Heading as="h1" size="2xl" mb="4">
            Welcome to MentHer
          </Heading>
          <Image
            src="https://hbr.org/resources/images/article_assets/2021/12/A_Jan22_06_1329663977-01.jpg"
            alt="MentHer Logo"
            mb="4"
          />
          <Text fontSize="xl" fontWeight="bold">
            Connect with girl mentors and women professionals.
          </Text>
        </Flex>

        <VStack spacing="4" align="center">
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap="4"
            mb="8"
            textAlign="center"
          >
            <GridItem>
              <Icon as={MdSupervisorAccount} boxSize="6" color="yellow.500" />
              <Text fontWeight="bold">Find Mentors</Text>
            </GridItem>
            <GridItem>
              <Icon as={MdEvent} boxSize="6" color="yellow.500" />
              <Text fontWeight="bold">Join Events</Text>
            </GridItem>
            <GridItem>
              <Icon as={MdSchool} boxSize="6" color="yellow.500" />
              <Text fontWeight="bold">Learn & Grow</Text>
            </GridItem>
            <GridItem>
              <Icon as={MdFavorite} boxSize="6" color="yellow.500" />
              <Text fontWeight="bold">Empowerment</Text>
            </GridItem>
          </Grid>
          <Text fontSize="xl">
            Discover a supportive community of mentors and professionals
            dedicated to empowering girls in STEM.
          </Text>
        </VStack>
      </Container>

      <Box as="footer" textAlign="center" p="4" background="yellow.500">
        <Text fontSize="sm" >
          &copy; 2023 MentHer. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
