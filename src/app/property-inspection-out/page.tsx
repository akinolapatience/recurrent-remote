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
    <Stack key={item.id} gap="xs" mb="sm">
      <Title order={5} size="h6">
        {item.name}
      </Title>

      {/* Icon + FileInput stack vertically on small screens */}
      <Box
        p="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f8f9fa",
          borderRadius: rem(0),
        }}
      >
        <Box w={50} h={50} style={{ borderRadius: 6, overflow: "hidden" }}>
          <Image
            src="/assets/Items-icon.png"
            alt="Item Icon"
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
          />
        </Box>

        <FileInput
          placeholder="Upload item video"
          accept="video/*"
          value={item.videoFile ?? undefined}
          onChange={(file) => handleVideoUpload(item.id, file)}
          styles={{
            input: {
              border: "none",
              backgroundColor: "transparent",
              paddingLeft: 0,
              fontSize: "13px",
            },
          }}
        />
      </Box>

      {item.uploaded && (
        <Alert
          mt="xs"
          icon={<CheckCircle size={16} />}
          color="green"
          radius="xs"
          variant="light"
        >
          <Text size="sm">Video uploaded successfully</Text>
        </Alert>
      )}
    </Stack>
  );

  return (
    <Box bg="gray.1" py="sm" mih="100vh">
      <Container size="xs" px="xs">
        <Card radius={0} p="md">
          <Stack gap="lg">
            {/* Header */}
            <Stack gap={2}>
              <Title order={4} size="h5">
              Check-Out Property Inspection
              </Title>
              <Text size="xs" c="dimmed">
                Confirm that the properties are in order before checking out
              </Text>
            </Stack>

            {/* Instructions */}
            <Alert color="orange" radius={0} variant="light">
              <Text c="#92400E" size="xs">
               Make and upload a video to confirm that the listed items are
                still in order
              </Text>
            </Alert>

            {/* Inspection Items */}
            <Stack gap="sm">
              {inspectionItems.map(renderInspectionSection)}
            </Stack>

            {/* Buttons */}
            <Group justify="center" mt="sm" grow>
              <Button
                variant="default"
                size="sm"
                radius={0}
                style={{ fontSize: "14px", fontWeight: 500, height: 42 }}
              >
                Back
              </Button>
              <Button
                color="blue"
                size="sm"
                radius={0}
                style={{ fontSize: "14px", fontWeight: 500, height: 42 }}
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
