"use client";
import React, { useState } from "react";
import {
  Container,
  Paper,
  Title,
  Text,
  Group,
  Stack,
  Textarea,
  Button,
  Box,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

interface StayDetailsProps {
  propertyName: string;
  address: string;
  checkIn: {
    date: string;
    time: string;
  };
  checkOut: {
    date: string;
    time: string;
  };
}

const StaywiseLuxuryShortlet: React.FC = () => {
  const [feedback, setFeedback] = useState("");

  const stayDetails: StayDetailsProps = {
    propertyName: "Staywise Luxury Shortlet",
    address: "House 40, Road 22, Kado Estate, Abuja.",
    checkIn: {
      date: "02 July 2025",
      time: "10:42 AM",
    },
    checkOut: {
      date: "08 July 2025",
      time: "10:00 PM",
    },
  };

  return (
    <Container size="xs" px="xs" py="md">
      <Paper p="md">
        <Stack gap="sm" mb="lg">
          <Title order={2} size="h4" fw={600} c="dark.8">
            {stayDetails.propertyName}
          </Title>

          <Group gap="xs" c="dimmed" wrap="wrap">
            <IconMapPin size={14} />
            <Text size="xs" c="dimmed">
              {stayDetails.address}
            </Text>
          </Group>
        </Stack>

        <Paper p="md" radius={0} bg="gray.0">
          <Title order={3} size="sm" c="#046F7B" fw={500} mb="xs">
            Duration of Stay
          </Title>
          <Box mb="sm">
            <Text fw={500} mb={2} c="dark.7" size="xs">
              From
            </Text>
            <Group gap="xs" wrap="wrap">
              <Text size="sm" fw={600} c="dark.8">
                {stayDetails.checkIn.date}
              </Text>
              <Text c="dimmed" size="sm">
                -
              </Text>
              <Text size="sm" fw={600} c="dark.8">
                {stayDetails.checkIn.time}
              </Text>
            </Group>
          </Box>

          <Box>
            <Text fw={500} mb={2} c="dark.7" size="xs">
              To
            </Text>
            <Group gap="xs" wrap="wrap">
              <Text size="sm" fw={600} c="dark.8">
                {stayDetails.checkOut.date}
              </Text>
              <Text c="dimmed" size="sm">
                -
              </Text>
              <Text size="sm" fw={600} c="dark.8">
                {stayDetails.checkOut.time}
              </Text>
            </Group>
          </Box>
        </Paper>

        <Stack gap="md" mt="md">
          <Title order={4} size="sm" c="dark.5" fw={600}>
            Tell us about your stay here?
          </Title>

          <Textarea
            placeholder="Share your thoughts or insight about your stay"
            value={feedback}
            onChange={(event) => setFeedback(event.currentTarget.value)}
            minRows={4}
            autosize
            radius={0}
            size="sm"
          />

          <Button size="md" radius={0} fullWidth variant="filled" bg="#046F7B">
            Submit
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default StaywiseLuxuryShortlet;
