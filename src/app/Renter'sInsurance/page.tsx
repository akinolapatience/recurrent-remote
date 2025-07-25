"use client";
import React from "react";
import {
  Container,
  Paper,
  Title,
  Text,
  Stack,
  Group,
  Divider,
  Badge,
  Box,
  Flex,
  Button,
} from "@mantine/core";

interface InsuranceBreakdownProps {
  checkInDate?: string;
  checkOutDate?: string;
  nights?: number;
  pricePerNight?: number;
  total?: number;
}

const RentersInsurance: React.FC<InsuranceBreakdownProps> = ({
  checkInDate = "12th Oct, 2024",
  checkOutDate = "16th Oct, 2024",
  nights = 4,
  pricePerNight = 3000,
  total = 12000,
}) => {
  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <Box>
          <Title order={2} size="h3" fw={600} mb="xs">
            Renter's Insurance
          </Title>
          <Text size="sm" c="dimmed">
            Renters insurance is crucial for protecting your belongings from
            theft, fire, or water damage.
          </Text>
        </Box>
      </Group>

      {/* Insurance Cost Breakdown Section */}
      <Paper
        p="lg"
        // radius="md"
        // withBorder
        style={{ backgroundColor: "#fafafa" }}
      >
        <Stack gap="xl">
          <Title order={3} size="h4" fw={500}>
            Insurance Cost Breakdown:
          </Title>

          {/* Date Information */}
          <Stack gap="md">
            <Flex justify="space-between" align="center">
              <Text fw={400} c="dimmed">
                Check In Date:
              </Text>
              <Text c="dark" fw={500}>
                {checkInDate}
              </Text>
            </Flex>

            <Flex justify="space-between" align="center">
              <Text fw={400} c="dimmed">
                Check Out Date:
              </Text>
              <Text c="dark" fw={500}>
                {checkOutDate}
              </Text>
            </Flex>
          </Stack>

          <Divider />

          {/* Pricing Breakdown */}
          <Stack gap="md">
            <Flex justify="space-between" align="center">
              <Text size="md" c="dimmed" fw={400}>
                N{pricePerNight.toLocaleString()} x {nights}nights
              </Text>
              <Text size="md" fw={500}>
                N{total.toLocaleString()}
              </Text>
            </Flex>
          </Stack>

          <Divider />

          {/* Total */}
          <Flex justify="space-between" align="center">
            <Text size="lg" fw={600}>
              Total:
            </Text>
            <Text size="lg" fw={700}>
              ₦{total.toLocaleString()}
            </Text>
          </Flex>
        </Stack>
      </Paper>

      {/* Additional Information */}
      <Box
        p="md"
        style={{
          backgroundColor: "#FFF8E1",
          marginTop: "30px",
          //   borderRadius: "8px",
          //   border: "1px solid #FFE082",
        }}
      >
        <Text size="sm" c="orange.8">
          Our Insurance fee also covers liability for injuries in our space,
          giving you peace of mind.
        </Text>
      </Box>
      <Box
        style={{
          width: "100%",
          padding: "0 16px",
          boxSizing: "border-box",
          marginTop: 40,
        }}
      >
        <Flex gap="md">
          {/* Back Button */}
          <Button
            fullWidth
            variant="default"
            size="lg"
            radius={0}
            style={{
              height: 60,
              fontSize: 18,
              fontWeight: 500,
              border: "1px solid #D9D9D9",
              backgroundColor: "white",
              color: "#000",
            }}
            onClick={() => {
              // handle back
            }}
          >
            Back
          </Button>

          {/* Done Button */}
          <Button
            fullWidth
            size="lg"
            radius={0}
            style={{
              height: 60,
              fontSize: 18,
              fontWeight: 500,
              backgroundColor: "#006D75",
              color: "white",
            }}
            onClick={() => {
              // handle done
            }}
          >
            Done
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default RentersInsurance;
