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
  Box,
  rem,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import CheckOutIcon from "@/assets/CheckoutLogo.png";
import Image from "next/image";

const StaywiseCheckin: React.FC = () => {
  return (
    <Center style={{ minHeight: "100vh", padding: rem(12) }}>
      <Container size="xs" px="xs">
        <Paper p="md" radius={0}>
          <Stack gap="md">
            {/* Header */}
            <Stack gap={4}>
              <Title order={5} fw={600} c="dark">
                Staywise Luxury Shortlet
              </Title>
              <Group gap={4} align="flex-start" wrap="wrap">
                <IconMapPin size={14} color="#666" />
                <Text size="xs" c="dimmed">
                  House 40, Road 22, Kado Estate, Abuja.
                </Text>
              </Group>
            </Stack>

            {/* Time & Date */}
            <Stack gap={0}>
              <Paper bg="#D3D3D3" p="sm" radius={0}>
                <Stack gap={2}>
                  <Text size="xs" fw={500} c="dimmed">
                    Current Time
                  </Text>
                  <Title order={3} size="h4" c="dark">
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

            {/* Duration of Stay */}
            <Paper p="sm" bg="#f5f5f5" radius={0}>
              <Stack gap="xs">
                <Group align="center" gap={6}>
                  <Box
                    w={rem(8)}
                    h={rem(8)}
                    bg="#046F7B"
                    style={{ borderRadius: "50%" }}
                  />
                  <Text size="xs" fw={600} c="#046F7B">
                    Duration of Stay
                  </Text>
                </Group>

                <Text size="xs" c="dimmed">
                  Checked-In at
                </Text>

                <Title order={5} c="dark" fw={600}>
                  02 July 2025 – 10:42 AM
                </Title>

                <Text size="xs" c="dimmed">
                  To
                </Text>

                <Title order={5} c="dark" fw={600}>
                  02 July 2025
                </Title>
              </Stack>
            </Paper>

            {/* Action Buttons */}
            <Stack gap="xs" mt="md">
              <Button
                fullWidth
                radius={0}
                size="sm"
                color="#EAECF0"
                styles={{
                  root: {
                    fontWeight: 600,
                    fontSize: rem(14),
                  },
                }}
              >
                Check-out
              </Button>

              <Button
                fullWidth
                radius={0}
                size="sm"
                variant="outline"
                color="gray"
                leftSection={
                  <Image
                    src={CheckOutIcon}
                    alt="Check-Out Icon"
                    width={16}
                    height={16}
                  />
                }
                styles={{
                  root: {
                    fontWeight: 600,
                    fontSize: rem(14),
                    color: "#6B7280",
                  },
                }}
              >
                Early Checkout
              </Button>
            </Stack>

            {/* Footer Text */}
            <Text size="xs" c="dimmed" ta="center" mt="md">
              To enjoy your stay and foster relationship, take a moment to{" "}
              <Anchor href="/house-rules" target="_blank" c="#046F7B">
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
