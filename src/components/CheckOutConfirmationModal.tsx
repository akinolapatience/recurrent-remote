"use client";

import {
  Modal,
  Stack,
  Text,
  ThemeIcon,
  Flex,
  Button,
  Box,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface CheckOutConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CheckOutConfirmationModal({
  opened,
  onClose,
  onConfirm,
  onCancel,
}: CheckOutConfirmationModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="md"
      padding="xl"
      radius={0}
      withCloseButton={false}
      overlayProps={{ opacity: 0.3, blur: 3 }}
      styles={{
        content: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack align="center" gap="xl">
        <ThemeIcon
          size={80}
          radius="50%"
          variant="light"
          color="teal"
          styles={{
            root: {
              backgroundColor: "#e6f7ff",
              border: "2px solid #f0f9ff",
            },
          }}
        >
          <IconCheck size={40} stroke={3} color="#008080" />
        </ThemeIcon>

        <Text size="xl" c="#333" fw={700} ta="center">
          Confirm Check-Out?
        </Text>

        <Text
          size="md"
          c="#666666"
          ta="center"
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            maxWidth: "320px",
            marginBottom: "16px",
          }}
        >
          You are about to confirm that user has checked out of the property.
        </Text>

        <Flex style={{ width: "100%" }} gap="md">
          <Box style={{ width: "50%" }}>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={onCancel}
              styles={{
                root: {
                  borderColor: "#008080",
                  color: "#008080",
                  height: "48px",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#f0fdfa",
                  },
                },
              }}
            >
              Cancel
            </Button>
          </Box>

          <Box style={{ width: "50%" }}>
            <Button
              size="lg"
              fullWidth
              onClick={onConfirm}
              styles={{
                root: {
                  backgroundColor: "#008080",
                  height: "48px",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#006666",
                  },
                },
              }}
            >
              Confirm
            </Button>
          </Box>
        </Flex>
      </Stack>
    </Modal>
  );
}
