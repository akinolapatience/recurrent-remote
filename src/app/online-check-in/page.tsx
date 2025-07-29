"use client";
import React from "react";
import {
  Container,
  Paper,
  Text,
  Title,
  Button,
  Stack,
  Group,
  Center,
  Anchor,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

const StaywiseCheckin: React.FC = () => {
  return (
    <Center style={{ minHeight: "100vh", padding: "16px" }}>
      <Container size="xs" px="xs">
        <Paper p="md" radius={0}>
          <Stack gap="md">
            {/* Header */}
            <div>
              <Title order={3} fw={600} c="dark">
                Staywise Luxury Shortlet
              </Title>
              <Group mt={4} gap={4} align="flex-start" wrap="wrap">
                <IconMapPin size={14} color="#666" />
                <Text size="xs" c="dimmed">
                  House 40, Road 22, Kado Estate, Abuja.
                </Text>
              </Group>
            </div>

            {/* Time & Date */}
            <Stack gap={0}>
              <Paper bg="#D3D3D3" p="md" radius={0}>
                <Stack gap={4}>
                  <Text size="xs" fw={500} c="dimmed">
                    Current Time
                  </Text>
                  <Title order={2} size="h4" c="dark">
                    10:00 AM
                  </Title>
                </Stack>
              </Paper>
              <Paper p="sm" bg="#f5f5f5" radius={0}>
                <Text size="xs" c="dimmed">
                  Wednesday 02 July 2025
                </Text>
              </Paper>
            </Stack>

            {/* Check-In Button */}
            <Button
              fullWidth
              size="md"
              radius={0}
              color="#046F7B"
              mt={90}
              style={{ fontWeight: 600, fontSize: "12px" }}
            >
              Check-In
            </Button>

            {/* Footer */}
            <Text size="xs" c="dimmed" ta="center">
              To enjoy your stay and foster relationship, take a moment to{" "}
              <Anchor
                href="/house-rules"
                target="_blank"
                underline="always"
                c="#046F7B"
              >
                Go through house rules
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Center>
  );
};

export default StaywiseCheckin;
