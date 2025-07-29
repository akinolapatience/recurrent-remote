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
    <Container size="xs" py="md">
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Box>
          <Title order={3} size="h5" fw={600} mb={4}>
            Renter's Insurance
          </Title>
          <Text size="xs" c="dimmed">
            Protect your belongings from theft, fire, or water damage.
          </Text>
        </Box>
      </Group>

      {/* Cost Breakdown Section */}
      <Paper p="md" style={{ backgroundColor: "#fafafa" }}>
        <Stack gap="md">
          <Title order={4} size="h6" fw={500}>
            Insurance Cost Breakdown:
          </Title>

          {/* Dates */}
          <Stack gap="xs">
            <Flex justify="space-between" align="center">
              <Text size="sm" c="dimmed">
                Check In Date:
              </Text>
              <Text size="sm" fw={500}>
                {checkInDate}
              </Text>
            </Flex>
            <Flex justify="space-between" align="center">
              <Text size="sm" c="dimmed">
                Check Out Date:
              </Text>
              <Text size="sm" fw={500}>
                {checkOutDate}
              </Text>
            </Flex>
          </Stack>

          <Divider />

          {/* Pricing */}
          <Flex justify="space-between" align="center">
            <Text size="sm" c="dimmed">
              ₦{pricePerNight.toLocaleString()} x {nights} nights
            </Text>
            <Text size="sm" fw={500}>
              ₦{total.toLocaleString()}
            </Text>
          </Flex>

          <Divider />

          {/* Total */}
          <Flex justify="space-between" align="center">
            <Text size="md" fw={600}>
              Total:
            </Text>
            <Text size="md" fw={700}>
              ₦{total.toLocaleString()}
            </Text>
          </Flex>
        </Stack>
      </Paper>

      {/* Info Note */}
      <Box
        p="sm"
        mt="md"
        style={{
          backgroundColor: "#FFF8E1",
        }}
      >
        <Text size="xs" c="#92400E">
          Our insurance also covers liability for injuries in our space, giving you peace of mind.
        </Text>
      </Box>

      {/* Buttons */}
      <Box mt="lg">
        <Flex direction={{ base: "column", sm: "row" }} gap="sm">
          <Button
            fullWidth
            variant="default"
            size="sm"
            radius={0}
            style={{
              height: 45,
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: "white",
              color: "#000",
              border: "1px solid #D9D9D9",
            }}
          >
            Back
          </Button>

          <Button
            fullWidth
            size="sm"
            radius={0}
            style={{
              height: 45,
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: "#006D75",
              color: "white",
            }}
          >
            Proceed to Payment
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default RentersInsurance;
