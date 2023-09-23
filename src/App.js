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
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiGo, SiPython, SiJavascript, SiReact, SiElixir, SiPhoenix, SiGraphql, SiGitlab, SiDocker, SiTerraform, SiSnowflake
} from 'react-icons/si';
import { createGlobalStyle } from 'styled-components';
import deviconStyles from 'devicon/devicon.min.css';

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
        <Text fontSize="2xl" mt={4}>Skills</Text>
        <Text mt={2}>List of your skills...</Text>
      </Flex>
    </Box>
  );
}

function BioSection() {
  return (
    <Box h="100vh" bg="gray.700" color="white" p={8}>
      <Flex direction="row" align="center" justify="center" h="100%" pl={32} pr={32}>

        {/* Left Half: Bio and Picture */}
        <Flex direction="column" align="start" justify="center" w="40%" pr={4}>
          <Image src="/assets/profile-picture.jpg" borderRadius="full" boxSize="150px" mb={4} />
          <Text fontSize="2xl" mb={4}>Your Name</Text>
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
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', alt: 'Gitlab CI' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', alt: 'AWS' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', alt: 'Terraform' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'ReactJS' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg', alt: 'Elixir' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'SQL' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg', alt: 'Phoenix' },
              // DBT and Snowflake don't have icons in devicon.
            ].map(icon => (
              <Flex direction="column" align="center" justify="center" bg="gray.600" style={{ border: '1px solid white', borderRadius: '8px', padding: '16px' }}>
                <img src={icon.src} alt={icon.alt} style={{ width: '64px', height: '64px', marginBottom: '8px' }} />
                <div>{icon.alt}</div>
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
