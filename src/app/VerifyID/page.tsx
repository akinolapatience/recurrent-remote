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
  Image,
  Center,
  Flex,
} from "@mantine/core";
import { IconId, IconArrowRight } from "@tabler/icons-react";

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
    <Container size="sm" px="md" style={{ minHeight: "100vh" }}>
      <Center style={{ minHeight: "100vh" }}>
        <Stack gap="xl" style={{ width: "100%", maxWidth: 480 }}>
          {/* Logo */}
          {/* <Group justify="center" gap="xs">
            <Box
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#1c7ed6",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text color="white" w={700} size="lg">
                R
              </Text>
            </Box>
            <Text size="xl" w={600} color="dark">
              re:current
            </Text>
          </Group> */}

          {/* Main Content */}
          {/* <Paper shadow="xs" radius="lg" p="xl" withBorder> */}
          <Stack gap="xl">
            {/* Header */}
            <Stack gap="xs">
              <Title order={2} ta="left" c="dark">
                Verify Valid ID
              </Title>
              <Text color="dimmed" ta="left" size="md">
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
              p="lg"
            >
              <Group gap="md" align="flex-start" wrap="nowrap">
                {/* ID Icon */}
                <Box
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#74c0fc",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconId size={24} color="white" />
                </Box>

                {/* Text Content */}
                <Box style={{ flex: 1 }}>
                  <Text fw={600} size="lg" c="dark">
                    ID Verification
                  </Text>
                  <Text c="dimmed" size="sm">
                    You will be directed to Helium ID for your verification
                  </Text>
                </Box>
              </Group>
            </Paper>

            {/* Continue Button */}
            <Button
              size="lg"
              radius={0}
              fullWidth
              style={{
                backgroundColor: "#0c8599",
                height: 48,
              }}
              onClick={handleContinueToVerification}
              rightSection={<IconArrowRight size={18} />}
            >
              Continue to Verification
            </Button>
          </Stack>
          {/* </Paper> */}
        </Stack>
      </Center>
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

export default IDVerificationScreen;
