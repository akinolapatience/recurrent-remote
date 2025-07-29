"use client";
import React from "react";
import {
  Container,
  Paper,
  Stack,
  Text,
  Title,
  ThemeIcon,
  Group,
  Box,
} from "@mantine/core";
import { IconCheck, IconMapPin } from "@tabler/icons-react";

interface BookingSuccessProps {
  propertyName?: string;
  propertyAddress?: string;
}

const BookingSuccess: React.FC<BookingSuccessProps> = ({
  propertyName = "Staywise Luxury Shortlet",
  propertyAddress = "House 40, Road 22, Kado Estate, Abuja.",
}) => {
  return (
    <Container size="xs" px="sm" py="xl">
      <Paper
        p="md"
        bg="white"
        style={{
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Header Section */}
        <Box mb="md">
          <Title order={3} size="lg" fw={600} c="gray.8" mb={8}>
            {propertyName}
          </Title>
          <Group gap={6} align="flex-start">
            <IconMapPin size={14} color="#6B7280" />
            <Text size="xs" c="gray.6">
              {propertyAddress}
            </Text>
          </Group>
        </Box>

        {/* Success Icon */}
        <ThemeIcon
          size={80}
          radius="xl"
          variant="light"
          color="#046F7B"
          mx="auto"
          my="xl"
          style={{ backgroundColor: "#E6FFFA" }}
        >
          <IconCheck size={40} stroke={2.5} />
        </ThemeIcon>

        {/* Success Message */}
        <Stack align="center" gap={8}>
          <Title order={4} size="lg" fw={600} c="#046F7B">
            Successful
          </Title>
          <Text size="sm" ta="center" c="gray.6" fw={400} lh={1.6}>
            Thank you for staying with {propertyName}. Your checkout has been
            successfully completed. We hope you had a delightful stay and look
            forward to welcoming you again soon.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
};

export default BookingSuccess;
