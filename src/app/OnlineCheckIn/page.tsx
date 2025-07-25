"use client";
import {
  Box,
  Center,
  Stack,
  Text,
  Title,
  Paper,
  ActionIcon,
  Button,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export default function ProjectOnePage() {
  const checklist = [
    {
      title: "House Rules",
      description:
        "Read and agree to our house rules, they help ensure a smooth and respectful experience for all guests.",
    },
    {
      title: "Verify identity",
      description:
        "Securely upload a valid means of identification to help us keep the space safe for everyone.",
    },
    {
      title: "Insurance/Security Deposit",
      description:
        "Share your estimated arrival time so we can get everything ready for your check-in.",
    },
  ];
  const [active, setActive] = useState(false);

  return (
    <Box
      mx="auto"
      px="sm"
      py="lg"
      style={{
        maxWidth: rem(500),
        width: "100%",
      }}
    >
      {/* Headings */}
      <Stack gap={4} mb="md">
        <Title order={4} size="h4">
          Complete Booking
        </Title>
        <Text c="dimmed" size="sm">
          Complete these steps to get access to apartment
        </Text>
      </Stack>

      {/* Checklist Items */}
      <Stack gap="sm">
        {checklist.map((item, index) => (
          <Paper
            key={index}
            radius={0}
            bg="gray.0"
            p="md"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <Box style={{ flexGrow: 1 }}>
              <Text fw={500} size="sm">
                {item.title}
              </Text>
              <Text c="dimmed" size="xs">
                {item.description}
              </Text>
            </Box>

            <ActionIcon
              onClick={() => setActive(!active)}
              variant="filled"
              size="md"
              radius="sm"
              styles={{
                root: {
                  backgroundColor: active ? "#1a1a1a" : "#cccccc",
                  color: "white",
                },
              }}
            >
              <IconCheck size={14} />
            </ActionIcon>
          </Paper>
        ))}
      </Stack>

      {/* Button */}
      <Center mt="lg">
        <Button
          fullWidth
          variant="light"
          color="dark"
          size="sm"
          radius={0}
          styles={{
            root: {
              fontSize: rem(14),
              fontWeight: 600,
            },
          }}
        >
          Check-In
        </Button>
      </Center>
    </Box>
  );
}
