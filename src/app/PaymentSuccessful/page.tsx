"use client";

import React from "react";
import {
  Container,
  Stack,
  Text,
  Button,
  ThemeIcon,
  Center,
  Box,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const PaymentSuccess: React.FC = () => {
  return (
    <Container
      size="xs"
      px="sm"
      py="xl"
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Center w="100%">
        <Stack
          align="center"
          gap="lg"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <ThemeIcon
            size={64}
            radius={100}
            variant="light"
            color="teal"
            style={{
              backgroundColor: "rgba(18, 184, 134, 0.1)",
              border: "none",
            }}
          >
            <IconCheck size={32} stroke={2.5} color="#0C8B8B" />
          </ThemeIcon>

          <Stack gap={4} align="center">
            <Text size="lg" fw={600} c="dark">
              Payment Successful
            </Text>

            <Text size="sm" c="dimmed">
              You have successfully completed your payment.
            </Text>
          </Stack>

          <Button
            size="md"
            fullWidth
            // mt="3xl"
            style={{
              backgroundColor: "#0C8B8B",
              borderRadius: 0,
              height: "44px",
              fontWeight: 500,
              marginTop: "70px",
            }}
            styles={{
              root: {
                "&:hover": {
                  backgroundColor: "#0A7A7A",
                },
              },
            }}
          >
            Done
          </Button>
        </Stack>
      </Center>
    </Container>
  );
};

export default PaymentSuccess;
