"use client";
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Badge,
  Button,
  VStack,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaUserGraduate, FaUsers, FaCog } from 'react-icons/fa';
import axios from 'axios';

export default function MentorDashboard() {
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [menteesMatched, setMenteesMatched] = useState([]);
  const [sessionsTillDate, setSessionsTillDate] = useState(5);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=5')
      .then((response) => {
        const userData = response.data.results;
        const meetingsData = userData.map((user) => ({
          date: '2023-10-10', 
          title: `Meeting with ${user.name.first}`,
        }));
        setUpcomingMeetings(meetingsData);
      })
      .catch((error) => {
        console.error('Error fetching upcoming meetings:', error);
      });

    axios
      .get('https://randomuser.me/api/?results=2')
      .then((response) => {
        const userData = response.data.results;
        const menteesData = userData.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
        }));
        setMenteesMatched(menteesData);
      })
      .catch((error) => {
        console.error('Error fetching matched mentees:', error);
      });
  }, []);

  return (
    <Container maxW="container.lg" mt={8}>
      <Heading as="h1" size="xl" mb={4}>
        Mentor Dashboard
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {/* Upcoming Meetings */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Icon as={FaCalendarAlt} fontSize="2xl" mb={2} />
          <Heading as="h2" size="md" mb={2}>
            Upcoming Meetings
          </Heading>
          <Text mb={2}>
            You have {upcomingMeetings.length} upcoming meetings.
          </Text>
          {upcomingMeetings.map((meeting, index) => (
            <Box key={index} mt={2}>
              <strong>{meeting.title}</strong>
              <br />
              {meeting.date}
            </Box>
          ))}
        </Box>

        {/* Mentees Matched */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Icon as={FaUserGraduate} fontSize="2xl" mb={2} />
          <Heading as="h2" size="md" mb={2}>
            Mentees Matched
          </Heading>
          <Text mb={2}>
            You are currently mentoring {menteesMatched.length} mentees.
          </Text>
          {menteesMatched.map((mentee, index) => (
            <Box key={index} mt={2}>
              <strong>{mentee.name}</strong>
              <br />
              {mentee.email}
            </Box>
          ))}
        </Box>

        {/* Sessions Till Date */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Icon as={FaUsers} fontSize="2xl" mb={2} />
          <Heading as="h2" size="md" mb={2}>
            Sessions Till Date
          </Heading>
          <Text mb={2}>
            You have conducted {sessionsTillDate} mentoring sessions.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Settings */}
      <Box mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Icon as={FaCog} fontSize="2xl" mb={2} />
        <Heading as="h2" size="md" mb={2}>
          Settings
        </Heading>
        <VStack spacing={2}>
          <Badge colorScheme="blue">Online</Badge>
          <Text>Customize your dashboard settings here.</Text>
          <Button colorScheme="blue">Edit Profile</Button>
          <Button colorScheme="red">Log Out</Button>
        </VStack>
      </Box>
    </Container>
  );
}
