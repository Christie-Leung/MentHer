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
    Tag,
} from '@chakra-ui/react';
import { FaBook, FaUserGraduate, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const MenteeDashboard = ({ user }) => {
    return (
        <Container maxW="container.lg" mt={8}>
          { user.interestedCompanies.length > 0 && <>
            <Box
              mt='1'
              as='h4'
              mb="5"
            >
              <Text fontWeight="semibold">Companies of Interest</Text>
              <div className="space-x-2">
              { user.interestedCompanies.map((company) => (<Tag>{company}</Tag>))}
              </div>
            </Box> 
          </>}
            
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

export default MenteeDashboard;