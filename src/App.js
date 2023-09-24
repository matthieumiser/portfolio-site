// src/App.js

import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Image,
  Link,
  Icon,
  Spacer
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaAngleDown } from 'react-icons/fa';
import {
  SiGo, SiPython, SiJavascript, SiReact, SiElixir, SiPhoenix, SiGraphql, SiGitlab, SiDocker, SiTerraform, SiSnowflake
} from 'react-icons/si';
import { createGlobalStyle } from 'styled-components';
import deviconStyles from 'devicon/devicon.min.css';
import { keyframes, Button } from '@chakra-ui/react';

// Fade-in keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Floating effect keyframes
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// For smooth scrolling
const scrollToNextComponent = () => {
  const bioSection = document.getElementById('bio-section');
  if (bioSection) {
    bioSection.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" h="400vh">
        <HeaderSection />
        <BioSection />
        <ExperienceSection />
        <ProjectsSection />
      </Flex>
    </ChakraProvider>
  );
}


function HeaderSection() {
  return (
    <Box h="100vh" bg="gray.800" color="white" p={8}>
      <Flex direction="column" align="center" justify="center" h="100%">

        {/* Larger Title */}
        <Text
          fontSize="4xl"
          fontWeight="bold"
          mt={4}
          mb={4}
          letterSpacing="wide"
          animation={`${fadeIn} 2s`}
        >
          Full-Stack Development with a Focus on High-Performance Data Solutions
        </Text>

        {/* LinkedIn and GitHub Icons with increased space between them */}
        <Flex mt={10} justify="center" width="full">

          {/* LinkedIn Icon with Hover and Float Effects */}
          <Link href="https://www.linkedin.com/in/matthieumiser/" isExternal mr={4}> {/* Added marginRight */}
            <Icon
              as={FaLinkedin}
              w={20}
              h={20}
              transition="all 0.3s"
              _hover={{ transform: "scale(1.2)" }}
              borderRadius="10%"
              p="2"
              bg="white"
              color="gray.800"
            />
          </Link>

          {/* GitHub Icon with Hover and Float Effects */}
          <Link href="https://github.com/matthieumiser" isExternal ml={4}> {/* Added marginLeft */}
            <Icon
              as={FaGithub}
              w={20}
              h={20}
              transition="all 0.3s"
              _hover={{ transform: "scale(1.2)" }}
              borderRadius="10%"
              p="2"
              bg="white"
              color="gray.800"
            />
          </Link>
        </Flex>

        {/* Enter Button with increased spacing */}
        <Button
          mt={20}
          colorScheme="teal"
          size="xl"
          variant="outline" // This makes the button have just a border
          borderColor="white"
          color="white"
          borderRadius="lg"
          fontSize="4xl" // Bigger font size for the text
          p={6} // More padding to make button larger
          _hover={{ backgroundColor: "gray.500", color: "white" }}
          onClick={scrollToNextComponent}
        >
          <Icon as={FaAngleDown} animation={`${float} 3s infinite`} mr={4} mt={2} />
          Enter
          <Icon as={FaAngleDown} animation={`${float} 3s infinite`} ml={4} mt={2} />
        </Button>

      </Flex>
    </Box>
  );
}

function BioSection() {
  return (
    <Box id="bio-section" h="100vh" bg="gray.700" color="white" p={8}>
      <Flex direction="row" align="center" justify="center" h="100%" pl={32} pr={32}>

        {/* Left Half: Bio and Picture */}
        <Flex direction="column" align="start" justify="center" w="40%" pr={4}>
          <Image src="/assets/profile-picture.jpg" borderRadius="full" boxSize="150px" mb={4} />
          <Text fontSize="2xl" mb={4}>Matthieu Miser</Text>
          <Text mb={2} textAlign="justify">
            I'm a software engineer with a strong footing in both development and data engineering. At Podium, I've streamlined user experiences, leveraging technologies like ReactJS and Elixir, and unified messaging products to boost user engagement.
          </Text>
          <Text mb={2} textAlign="justify">
            I also contributed significantly to Podium's data stack, where I significantly improved data infrastructures, migrating systems to Snowflake and optimizing data delivery.
          </Text>
          <Text mb={2} textAlign="justify">
            Outside my day job, I'm passionate about blockchain, HTMX, and Go.
          </Text>
        </Flex>

        {/* Spacer for Divider */}
        <Box w="5%"></Box>

        {/* Right Half: Skills */}
        <Flex direction="column" align="start" justify="center" w="40%" pl={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>

            {[
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go', link: 'https://golang.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python', link: 'https://www.python.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript', link: 'https://www.javascript.com/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg', alt: 'Elixir', link: 'https://elixir-lang.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'ReactJS', link: 'https://reactjs.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', alt: 'GraphQL', link: 'https://graphql.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg', alt: 'Phoenix', link: 'https://www.phoenixframework.org/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', alt: 'Gitlab CI', link: 'https://about.gitlab.com/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', alt: 'AWS', link: 'https://aws.amazon.com/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker', link: 'https://www.docker.com/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', alt: 'Terraform', link: 'https://www.terraform.io/' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL', link: 'https://www.postgresql.org/' },
              // Add DBT and Snowflake here if you have icons or other elements for them.
            ]
              .map(icon => (
                <Flex direction="column" align="center" justify="center" bg="gray.500"
                  style={{ border: '1px solid white', borderRadius: '8px', padding: '16px' }}
                  _hover={{ transform: "scale(1.1)" }}
                  transition="all 0.3s">
                  <a href={icon.link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                    <img src={icon.src} alt={icon.alt} style={{ width: '64px', height: '64px', marginBottom: '8px' }} />
                    <div style={{ lineHeight: '1', margin: 0 }}>{icon.alt}</div>
                  </a>
                </Flex>

              ))}


          </div>
        </Flex>

      </Flex>
    </Box>
  );
}



function ExperienceSection() {
  return (
    <Box h="100vh" bg="gray.600" color="white" p={8}>
      <Flex direction="column" align="center" justify="center" h="100%">
        <Text fontSize="2xl" mt={4}>Experience</Text>
        <Text mt={2}>Short overview of your experience...</Text>
      </Flex>
    </Box>
  );
}

function ProjectsSection() {
  return (
    <Box h="100vh" bg="gray.500" color="white" p={8}>
      <Flex direction="column" align="center" justify="center" h="100%">
        <Text fontSize="2xl" mt={4}>Side Projects</Text>
        <Text mt={2}>Overview of your first project...</Text>
        <Text mt={4}>Overview of your second project...</Text>
      </Flex>
    </Box>
  );
}

export default App;
