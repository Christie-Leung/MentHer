"use client";
import React from 'react';
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
    Avatar,
    Flex,
    Center,
    Spacer,
    Divider,
} from '@chakra-ui/react';
import { FaBook, FaUserGraduate, FaCog } from 'react-icons/fa';
import Link from 'next/link';

export default function MenteeDashboard() {
    return (
        <Container maxW="container.lg" mt={8}>
            <Flex align="center">
            <Avatar size="lg" name="Jan Doe" src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo1LCJub3NlIjoyLCJtb3V0aCI6MTYsImV5ZXMiOjAsImV5ZWJyb3dzIjoxLCJnbGFzc2VzIjo5LCJoYWlyIjoyOSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9" mr={4} />
                <Heading as="h1" size="xl" mb={4}>
                    Mentee Dashboard
                </Heading>
                <Spacer />
                <Button colorScheme="red" size="sm" leftIcon={<Icon as={FaCog} />}>
                    Settings
                </Button>
            </Flex>
            <Divider my={4} />

            <SimpleGrid columns={[1, 2]} spacing={4}>
                {/* Courses Enrolled */}
                <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="blue.100">
                    <Icon as={FaBook} fontSize="2xl" mb={2} />
                    <Heading as="h2" size="md" mb={2} color="blue.700">
                        Courses Enrolled
                    </Heading>
                    <Text mb={2}>
                        You are currently enrolled in <strong>3 courses</strong>.
                    </Text>
                    <Text mb={2}>
                        Explore your courses and start learning.
                    </Text>
                    <Link href="resources">
                        <Button colorScheme="blue">Explore Courses</Button>
                    </Link>
                </Box>

                {/* Mentors */}
                <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="green.100">
                    <Icon as={FaUserGraduate} fontSize="2xl" mb={2} />
                    <Heading as="h2" size="md" mb={2} color="green.700">
                        Your Mentors
                    </Heading>
                    <Text mb={2}>
                        You have <strong>2 mentors</strong> guiding your journey.
                    </Text>
                    <Text mb={2}>
                        Connect with your mentors and seek advice.
                    </Text>
                    <Link href="find-mentors">
                        <Button colorScheme="green">Connect with Mentors</Button>
                    </Link>
                </Box>
            </SimpleGrid>

            <Box mt={8} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="gray.100">
                <Icon as={FaCog} fontSize="2xl" mb={2} />
                <Heading as="h2" size="md" mb={2} color="gray.700">
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
