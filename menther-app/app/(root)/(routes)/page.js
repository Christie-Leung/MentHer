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
  GridItem,
  HStack,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  MdSupervisorAccount,
  MdEvent,
  MdSchool,
  MdFavorite,
} from "react-icons/md";
import { FaHeart, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <Box mb="8">
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

        <SimpleGrid columns={2} spacing={4} mb="8">
          <Box
            p="4"
            boxShadow="md"
            borderRadius="md"
            border="1px solid #ddd"
            textAlign="center"
          >
            <Heading as="h3" size="lg" mb="2">
              Are you a Mentor?
            </Heading>
            <Text>
              Join our community to inspire and guide the next generation of
              leaders.
            </Text>
            <Button colorScheme="yellow" mt="4">
              Log in as Mentor
            </Button>
          </Box>
          <Box
            p="4"
            boxShadow="md"
            borderRadius="md"
            border="1px solid #ddd"
            textAlign="center"
          >
            <Heading as="h3" size="lg" mb="2">
              Seeking Mentorship?
            </Heading>
            <Text>
              Discover mentors who can help you grow in your career and
              aspirations.
            </Text>
            <Button colorScheme="yellow" mt="4">
              Log in as Mentee
            </Button>
          </Box>
        </SimpleGrid>

        <VStack spacing="4" align="center">
          <Grid templateColumns="repeat(4, 1fr)" gap="4" textAlign="center">
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

      <Box mt="8">
        <Container maxW="container.xl">
          <VStack spacing="8">
            <Heading as="h2" size="xl">
              Features
            </Heading>
            <SimpleGrid columns={3} spacing={4}>
              {/* Feature 1 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Icon as={MdSupervisorAccount} boxSize="8" color="yellow.500" />
                <Heading as="h3" size="lg" mb="2">
                  Find Mentors
                </Heading>
                <Text>
                  Connect with experienced mentors to guide you in your career
                  path.
                </Text>
              </Box>

              {/* Feature 2 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Icon as={MdEvent} boxSize="8" color="yellow.500" />
                <Heading as="h3" size="lg" mb="2">
                  Join Events
                </Heading>
                <Text>
                  Participate in events and workshops to enhance your skills.
                </Text>
              </Box>

              {/* Feature 3 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Icon as={MdSchool} boxSize="8" color="yellow.500" />
                <Heading as="h3" size="lg" mb="2">
                  Learn & Grow
                </Heading>
                <Text>
                  Access resources and courses to foster your professional
                  development.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box mt="8">
        <Container maxW="container.xl">
          <VStack spacing="8">
            <Heading as="h2" size="xl">
              Frequently Asked Questions
            </Heading>
            <Accordion allowToggle>
              {/* FAQ 1 */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How do I sign up as a Mentor or Mentee?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  To sign up as a Mentor or Mentee, click on the respective
                  "Log in" button on the homepage. You can create an account and
                  choose your role during the registration process.
                </AccordionPanel>
              </AccordionItem>

              {/* FAQ 2 */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Can I change my role later?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, you can change your role at any time by accessing your
                  account settings after logging in. Simply update your role and
                  save your changes.
                </AccordionPanel>
              </AccordionItem>

              {/* Add more FAQs here */}
            </Accordion>
          </VStack>
        </Container>
      </Box>

      <Box mt="8">
        <Container maxW="container.xl">
          <VStack spacing="8">
            <Heading as="h2" size="xl">
              Testimonials
            </Heading>
            <SimpleGrid columns={3} spacing={4}>
              {/* Testimonial 1 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Heading as="h3" size="lg" mb="2">
                  John Doe
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  "MentHer has been a game-changer in my career. I found an
                  amazing mentor who guided me every step of the way."
                </Text>
              </Box>

              {/* Testimonial 2 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Heading as="h3" size="lg" mb="2">
                  Jane Smith
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  "As a mentor on MentHer, I've had the privilege of empowering
                  young professionals and watching them flourish."
                </Text>
              </Box>

              {/* Testimonial 3 */}
              <Box p="4" boxShadow="md" borderRadius="md" textAlign="center">
                <Heading as="h3" size="lg" mb="2">
                  Emily Johnson
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  "The resources and events on MentHer have been invaluable in
                  my learning journey."
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box background="yellow.500" py="4">
        <VStack spacing="2">
          <Text fontSize="sm" fontWeight="bold">
            &copy; 2023 MentHer. All rights reserved.
          </Text>
          <HStack spacing="2">
            <Icon as={FaHeart} color="red.500" boxSize="4" />
            <Text fontSize="xs" color="black">
              Made with love using Next JS
            </Text>
          </HStack>
          <HStack spacing="2">
            <Icon as={AiOutlineMail} boxSize="4" />
            <Text fontSize="xs" color="black">
              Contact us at{" "}
              <Link
                href="mailto:contact@menther.com"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                contact@menther.com
              </Link>
            </Text>
          </HStack>
          <HStack spacing="2">
            <Icon as={FaTwitter} boxSize="4" />
            <Icon as={FaFacebook} boxSize="4" />
            <Icon as={FaLinkedin} boxSize="4" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
