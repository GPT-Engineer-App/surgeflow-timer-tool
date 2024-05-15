import { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaSlack, FaTheaterMasks, FaUserInjured, FaFileAlt } from "react-icons/fa";

const Index = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-11-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </Text>,
    );
  });

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Surgeflow
        </Text>
        <Text fontSize="2xl">Join the Waiting List</Text>
        <Box>{timerComponents.length ? timerComponents : <Text>Time's up!</Text>}</Box>
        <Button colorScheme="teal" size="lg">
          Join Waiting List
        </Button>
        <VStack spacing={4} align="stretch" width="100%">
          <HStack spacing={4}>
            <IconButton aria-label="Calendar Tool" icon={<FaCalendarAlt />} size="lg" />
            <Text>Surgeon Allocation Tool: Interface for viewing and managing surgeon schedules. Integration with hospital calendar systems.</Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Slack Creation Module" icon={<FaSlack />} size="lg" />
            <Text>Slack Creation Module: Automated generation of daily slacks with X-ray images, estimated surgery times, and theatre allocations. Notification system for updates and changes.</Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Theatre List Management System" icon={<FaTheaterMasks />} size="lg" />
            <Text>Theatre List Management System: Real-time updating and editing capabilities for theatre managers. Alerts and notifications for last-minute changes.</Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Patient Management Interface" icon={<FaUserInjured />} size="lg" />
            <Text>Patient Management Interface: Tracking of patient preparation status, fasting times, and mobilisation.</Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Documentation Automation" icon={<FaFileAlt />} size="lg" />
            <Text>Documentation Automation: Digital documentation tools to streamline the process and ensure compliance.</Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
