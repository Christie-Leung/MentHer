"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Image,
} from "@chakra-ui/react";
import Logo from '../../assets/MENTHER.png';

export default function Home() {
  return (
    <Box>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
        background="black.500"
        boxShadow="md"
      >
        <Flex
        background="black.500"
        padding="1rem"
        >
          <Image
            src='https://via.placeholder.com/150'
            alt="MentHer Logo"
            boxSize="50px"
          />
          <Text padding="1rem">MentHer</Text>
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
          <Text fontSize="xl" fontWeight="bold" color="gray.600">
            Connect with girl mentors and women professionals.
          </Text>
        </Flex>

        <Box mb="8">
          <Text fontSize="xl">
            Discover a supportive community of mentors and professionals
            dedicated to empowering girls in STEM.
          </Text>
        </Box>

      </Container>

      <Box as="footer" textAlign="center" p="4" background="yellow.500">
        <Text fontSize="sm" color="black">
          &copy; 2023 MentHer. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
