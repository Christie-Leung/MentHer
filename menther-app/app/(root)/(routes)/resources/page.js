"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link,
  Fade,
} from "@chakra-ui/react";

const ResourcesPage = ({ params }) => {
  const resources = [
    {
      title: "Introduction to Web Development",
      description: "A beginner's guide to web development.",
      link: "https://web.dev/learn/design/intro/",
    },
    {
      title: "JavaScript Fundamentals",
      description: "Learn the basics of JavaScript programming.",
      link: "https://javascript.info/first-steps",
    },
    {
      title: "Python for Data Science",
      description: "Explore Python programming for data analysis.",
      link: "https://cognitiveclass.ai/courses/python-for-data-science",
    },
    {
      title: "UX Design Principles",
      description: "Master user experience (UX) design concepts.",
      link: "https://lawsofux.com/",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      description: "Dive into the world of AI and machine learning.",
      link: "https://www.isaca.org/credentialing/artificial-intelligence-fundamentals-certificate",
    },
    {
      title: "Front-End Web Development",
      description: "Build interactive web applications with HTML, CSS, and JavaScript.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
    },
    {
      title: "Data Science and Machine Learning",
      description: "Learn data science and machine learning concepts and techniques.",
      link: "https://www.coursera.org/specializations/data-science",
    },
    {
      title: "User Interface (UI) Design",
      description: "Create beautiful and user-friendly interfaces for websites and apps.",
      link: "https://www.interaction-design.org/literature/topics/ui-design",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Understand the basics of cybersecurity and online safety.",
      link: "https://www.cybrary.it/catalog/cybersecurity-fundamentals/",
    },
    {
      title: "Cloud Computing Essentials",
      description: "Get started with cloud computing and cloud services.",
      link: "https://aws.amazon.com/training/learn-about/cloud-computing-essentials/",
    }, 
  ];
  

  return (
    <Container maxW="container.xl" py="8">
      <Heading as="h1" size="2xl" mb="4">
        Resources for Girls in STEM
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {resources.map((resource, index) => (
          <Fade in={true} key={index}>
            <Box
              p="4"
              boxShadow="md"
              borderRadius="md"
              textAlign="left"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Heading as="h3" size="lg">
                {resource.title}
              </Heading>
              <Text fontSize="lg" mt="2">
                {resource.description}
              </Text>
              <Link
                href={resource.link}
                color="blue.500"
                mt="2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </Link>
            </Box>
          </Fade>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ResourcesPage;
