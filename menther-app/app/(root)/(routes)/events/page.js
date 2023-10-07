"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const JoinEvents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Ticket booked successfully!");
  };

  const events = [
    {
      title: "Web Development Workshop",
      description: "Join our upcoming web development workshop and enhance your skills.",
      date: "August 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual (Online)",
    },
    {
      title: "Machine Learning Seminar",
      description: "Learn about the latest trends in machine learning and AI.",
      date: "September 5, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual (Online)",
    },
    {
      title: "Networking Event",
      description: "Connect with professionals in the industry and expand your network.",
      date: "October 10, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Conference Center",
    },
  ];

  return (
    <Container maxW="container.xl" py="8">
      <Heading as="h1" size="2xl" mb="4">
        Join Our Events
      </Heading>
      <SimpleGrid columns={1} spacing={8}>
        {events.map((event, index) => (
          <Box key={index} p="4" boxShadow="md" borderRadius="md" textAlign="left">
            <Heading as="h3" size="lg">
              {event.title}
            </Heading>
            <Text fontSize="lg" mt="2">
              {event.description}
            </Text>
            <Text fontSize="lg" mt="2">
              Date: {event.date} | Time: {event.time}
            </Text>
            <Text fontSize="lg" mt="2">
              Location: {event.location}
            </Text>
            <Button
              colorScheme="yellow"
              mt="4"
              onClick={() => {
                alert("Ticket booked successfully!");
              }}
            >
              Book Tickets
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      <Box p="4" boxShadow="md" borderRadius="md" textAlign="left">
        <Heading as="h3" size="lg" mb="4">
          Book Your Tickets
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt="4">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Number of Tickets</FormLabel>
            <Input
              type="number"
              name="numberOfTickets"
              value={formData.numberOfTickets}
              onChange={handleChange}
              min="1"
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="yellow" mt="4">
            Confirm Booking
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default JoinEvents;