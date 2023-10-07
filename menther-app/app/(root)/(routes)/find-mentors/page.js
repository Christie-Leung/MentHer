"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const FindMentorsPage = ({ params }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=32&gender=female")
      .then((response) => {
        const mentorData = response.data.results;
        setMentors(mentorData);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  const connectWithMentor = (mentorName) => {
    alert(`Connect with ${mentorName}`);
  };

  const viewMentorProfile = (mentorName) => {
    alert(`View profile of ${mentorName}`);
  };

  const bookSession = (mentorName) => {
    alert(`Book a session with ${mentorName}`);
  };

  return (
    <Container maxW="container.xl" py="8">
      <Heading as="h1" size="2xl" mb="4">
        Find Women Mentors
      </Heading>
      <SimpleGrid columns={3} spacing={4}>
        {mentors.map((mentor, index) => (
          <Box
            key={index}
            p="4"
            boxShadow="md"
            borderRadius="md"
            textAlign="center"
          >
            <img
              src={mentor.picture.large}
              alt={`Mentor ${index + 1}`}
              width="100%"
              height="auto"
              borderRadius="full"
            />
            <Heading as="h3" size="lg" mt="2">
              {`${mentor.name.title} ${mentor.name.first} ${mentor.name.last}`}
            </Heading>
            <Text fontSize="lg" fontWeight="bold">
              {mentor.location.city}, {mentor.location.country}
            </Text>
            <Text fontSize="lg">{mentor.email}</Text>
            <Button
              colorScheme="yellow"
              mt="2"
              onClick={() => connectWithMentor(mentor.name.first)}
            >
              Connect
            </Button>
            <Button
              colorScheme="black"
              color="blue.500"
              mt="2"
              onClick={() => viewMentorProfile(mentor.name.first)}
            >
              View Profile
            </Button>
            <Button
              colorScheme="yellow"
              mt="2"
              onClick={() => bookSession(mentor.name.first)}
            >
              Book Session
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FindMentorsPage;