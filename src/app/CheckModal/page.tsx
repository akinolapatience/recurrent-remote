"use client";

import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Container,
  Stack,
  Button,
  Drawer,
} from "@mantine/core";
import CheckInConfirmationModal from "@/components/CheckInConfirmationModal";
import CheckOutConfirmationModal from "@/components/CheckOutConfirmationModal";
import GuestTimeline from "@/components/GuestTimelineDrawer";

const ModalHolder: React.FC = () => {
  const [checkInModalOpened, setCheckInModalOpened] = useState(false);
  const [checkOutModalOpened, setCheckOutModalOpened] = useState(false);
  const [timelineDrawerOpened, setTimelineDrawerOpened] = useState(false);

  // Check-in handlers
  const handleCheckInOpen = () => setCheckInModalOpened(true);
  const handleCheckInClose = () => setCheckInModalOpened(false);
  const handleCheckInConfirm = () => {
    console.log("Check-in confirmed");
    setCheckInModalOpened(false);
  };
  const handleCheckInCancel = () => {
    console.log("Check-in cancelled");
    setCheckInModalOpened(false);
  };

  // Check-out handlers
  const handleCheckOutOpen = () => setCheckOutModalOpened(true);
  const handleCheckOutClose = () => setCheckOutModalOpened(false);
  const handleCheckOutConfirm = () => {
    console.log("Check-out confirmed");
    setCheckOutModalOpened(false);
  };
  const handleCheckOutCancel = () => {
    console.log("Check-out cancelled");
    setCheckOutModalOpened(false);
  };

  return (
    <Box bg="gray.1" mih="100vh">
      {/* Modals */}
      <CheckInConfirmationModal
        opened={checkInModalOpened}
        onClose={handleCheckInClose}
        onConfirm={handleCheckInConfirm}
        onCancel={handleCheckInCancel}
      />

      <CheckOutConfirmationModal
        opened={checkOutModalOpened}
        onClose={handleCheckOutClose}
        onConfirm={handleCheckOutConfirm}
        onCancel={handleCheckOutCancel}
      />

      <Drawer
        opened={timelineDrawerOpened}
        onClose={() => setTimelineDrawerOpened(false)}
        position="right"
        size="lg"
        title="Guest Timeline"
        padding="md"
      >
        <GuestTimeline />
      </Drawer>

      {/* Main Content */}
      <Container py={64}>
        <Stack align="center" gap="xl">
          <Text
            size="xl"
            ta="center"
            fw={600}
            c="gray.8"
            style={{ maxWidth: 600, lineHeight: 1.5 }}
          >
            User is directed to Helium to carry out the verification process
          </Text>

          <Box style={{ height: "40vh" }} />

          {/* Guest Timeline Drawer Button */}
          <Button
            size="md"
            color="teal"
            radius={0}
            onClick={() => setTimelineDrawerOpened(true)}
          >
            Guest Timeline Drawer
          </Button>
        </Stack>
      </Container>

      {/* Footer with buttons */}
      <Box
        bg="white"
        px="md"
        py="sm"
        style={{
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Flex justify="space-between" align="center" gap="sm">
          <Box w="48%" style={{ textAlign: "center" }}>
            <Text
              size="md"
              c="gray.7"
              fw={500}
              style={{ cursor: "pointer" }}
              onClick={handleCheckInOpen}
            >
              Check-In
            </Text>
          </Box>

          <Box w="48%" style={{ textAlign: "center" }}>
            <Text
              size="md"
              c="gray.7"
              fw={500}
              style={{ cursor: "pointer" }}
              onClick={handleCheckOutOpen}
            >
              Check-Out
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ModalHolder;
