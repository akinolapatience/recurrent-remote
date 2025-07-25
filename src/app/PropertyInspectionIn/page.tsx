"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FileInput,
  Group,
  Stack,
  Text,
  Title,
  Alert,
  rem,
} from "@mantine/core";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface InspectionItem {
  id: string;
  name: string;
  videoFile?: File | null;
  uploaded: boolean;
}

const PropertyInspectionUI: React.FC = () => {
  const [inspectionItems, setInspectionItems] = useState<InspectionItem[]>([
    { id: "televisions", name: "Televisions", uploaded: false },
    { id: "fridges", name: "Fridges", uploaded: false },
    { id: "microwave", name: "Microwave", uploaded: false },
  ]);

  const allItemsUploaded = inspectionItems.every((item) => item.uploaded);

  const handleVideoUpload = (itemId: string, file: File | null) => {
    setInspectionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, videoFile: file, uploaded: !!file }
          : item
      )
    );
  };

  const renderInspectionSection = (item: InspectionItem) => (
    <Stack key={item.id} gap="xs" mb="md">
      {/* Title on top */}
      <Title order={4} size="h5">
        {item.name}
      </Title>

      {/* Icon + FileInput inside a styled container */}
      <Box
        p="sm"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#f8f9fa",
          borderRadius: rem(6),
        }}
      >
        {/* Appliance Icon */}
        <Box w={60} h={60} style={{ borderRadius: 8, overflow: "hidden" }}>
          <Image
            src="/assets/Items-icon.png"
            alt="Item Icon"
            width={60}
            height={60}
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* File Upload */}
        <FileInput
          placeholder="Click to upload video Direct from camera"
          accept="video/*"
          value={item.videoFile ?? undefined}
          onChange={(file) => handleVideoUpload(item.id, file)}
          style={{ flex: 1 }}
          styles={{
            input: {
              border: "none",
              backgroundColor: "transparent",
              paddingLeft: 0,
              fontSize: "14px",
            },
          }}
        />
      </Box>

      {/* Success Alert */}
      {item.uploaded && (
        <Alert
          mt="sm"
          icon={<CheckCircle size={16} />}
          color="green"
          radius="xs"
          variant="light"
        >
          Video uploaded successfully
        </Alert>
      )}
    </Stack>
  );

  return (
    <Box bg="gray.1" py="md" mih="100vh">
      <Container size="xs" px="xs">
        <Card radius={0} p="md">
          <Stack gap="xl">
            {/* Header */}
            <Stack gap={4}>
              <Title order={4}>Check-In Property Inspection</Title>
              <Text size="sm" c="dimmed">
                Confirm that the properties are in order before checking in
              </Text>
            </Stack>

            {/* Instructions */}
            <Alert color="orange" radius="xs" variant="light">
              <Text c="#92400E" size="sm">
                Make and upload a video to confirm that the listed items are in
                order pre-check-in
              </Text>
            </Alert>

            {/* Inspection Items */}
            <Stack gap="md">
              {inspectionItems.map(renderInspectionSection)}
            </Stack>

            {/* Action Buttons */}
            <Group justify="center" mt="sm" grow>
              <Button
                variant="default"
                size="md"
                w="50%"
                h={48}
                radius={0}
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Back
              </Button>
              <Button
                color="blue"
                size="md"
                w="50%"
                h={48}
                radius={0}
                style={{ fontSize: "16px", fontWeight: 500 }}
                disabled={!allItemsUploaded}
              >
                Done
              </Button>
            </Group>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PropertyInspectionUI;
