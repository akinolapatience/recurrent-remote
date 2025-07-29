"use client";
import React from "react";
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
  Center,
  Flex,
} from "@mantine/core";

import { IconId } from "@tabler/icons-react";

interface IDVerificationScreenProps {
  onContinue?: () => void;
}

const IDVerificationScreen: React.FC<IDVerificationScreenProps> = ({
  onContinue,
}) => {
  const handleContinueToVerification = () => {
    if (onContinue) {
      onContinue();
    } else {
      console.log("Redirecting to Helium ID verification...");
    }
  };

  return (
    <Container size="xs" px="md" style={{ minHeight: "100vh" }}>
      <Center style={{ minHeight: "100vh" }}>
        <Stack gap="lg" style={{ width: "100%", minHeight: "100vh"}}>
          {/* Header */}
          <Stack gap={4}>
            <Title order={3} size="h5" ta="left" c="dark">
              Verify Valid ID
            </Title>
            <Text c="dimmed" ta="left" size="sm">
              We need to verify your identity for security
            </Text>
          </Stack>

          {/* ID Verification Card */}
          <Paper
            style={{
              backgroundColor: "#f8f9fa",
              border: "1px solid #e9ecef",
            }}
            radius={0}
            p="md"
          >
            <Group gap="sm" align="flex-start" wrap="nowrap">
              {/* Icon (optional) */}
              {/* <Box
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#74c0fc",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconId size={20} color="white" />
              </Box> */}

              {/* Text */}
              <Box style={{ flex: 1 }}>
                <Text fw={600} size="sm" c="dark">
                  ID Verification
                </Text>
                <Text c="dimmed" size="xs">
                  You will be directed to Helium ID for your verification
                </Text>
              </Box>
            </Group>
          </Paper>

          {/* Continue Button */}
          <Button
            size="sm"
            radius={0}
            fullWidth
            style={{
              backgroundColor: "#0c8599",
              height: 42,
              fontSize: 14,
              fontWeight: 500,
            }}
            onClick={handleContinueToVerification}
          >
            Continue to Verification
          </Button>
        </Stack>
      </Center>

      {/* Bottom Buttons */}
      <Box
        style={{
          width: "100%",
          padding: "0 16px",
          boxSizing: "border-box",
          marginTop: 20,
        }}
      >
        <Flex gap="sm" direction={{ base: "column", sm: "row" }}>
          {/* Back */}
          <Button
            fullWidth
            variant="default"
            size="sm"
            radius={0}
            style={{
              height: 42,
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: "white",
              color: "#000",
              border: "1px solid #D9D9D9",
            }}
          >
            Back
          </Button>

          {/* Done */}
          <Button
            fullWidth
            size="sm"
            radius={0}
            style={{
              height: 42,
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: "#006D75",
              color: "white",
            }}
          >
            Done
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default IDVerificationScreen;
