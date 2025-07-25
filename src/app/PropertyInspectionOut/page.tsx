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
  ThemeIcon,
  Alert,
  Paper,
} from "@mantine/core";

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

  const handleVideoUpload = (itemId: string, file: File | null) => {
    setInspectionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, videoFile: file, uploaded: !!file }
          : item
      )
    );
  };

  const handleDirectCamera = (itemId: string) => {
    console.log(`Opening camera for ${itemId}`);
    setInspectionItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, uploaded: true } : item
      )
    );
  };

  const renderInspectionSection = (item: InspectionItem) => (
    <Card key={item.id} radius={0} p="md">
      <Title order={4} mb="sm">
        {item.name}
      </Title>

      <Paper p="md" radius={0} bg={"gray.0"}>
        <Group align="flex-start" gap="md" wrap="nowrap">
          {/* Appliance Icon */}
          <ThemeIcon variant="light" size={60} radius={0} color="cyan">
            <Box w={30} h={20} bg="teal.5" pos="relative">
              <Box
                w={20}
                h={10}
                bg="teal.7"
                pos="absolute"
                bottom={2}
                left={5}
              />
            </Box>
          </ThemeIcon>

          {/* Upload Section */}
          <Stack gap={4} style={{ flexGrow: 1 }}>
            <FileInput
              placeholder="Click to upload video direct from camera"
              accept="video/*"
              value={item.videoFile || undefined}
              onChange={(file) => handleVideoUpload(item.id, file)}
            />
          </Stack>
        </Group>
      </Paper>
    </Card>
  );

  const allItemsUploaded = inspectionItems.every((item) => item.uploaded);

  return (
    <Box bg="gray.1" py="xl" mih="100vh">
      <Container size="sm">
        <Card radius={0} p="xl">
          <Stack gap="xl">
            {/* Header */}
            <div>
              <Title order={3} mb={4}>
                Check-Out Property Inspection
              </Title>
              <Text size="md" c="dimmed">
                Confirm that the properties are in order before checking out
              </Text>
            </div>

            {/* Instructions */}
            <Alert color="orange" radius={0} variant="light">
              <Text c="orange.9">
                Make and upload a video to confirm that the listed items are
                still in order
              </Text>
            </Alert>

            {/* Inspection Items */}
            <Stack gap="md">
              {inspectionItems.map(renderInspectionSection)}
            </Stack>

            {/* Action Buttons */}
            <Group justify="center" mt="xl">
              <Button variant="default">Save for Later</Button>
              <Button
                color="blue"
                disabled={!allItemsUploaded}
                style={{ cursor: allItemsUploaded ? "pointer" : "not-allowed" }}
              >
                Complete Inspection
              </Button>
            </Group>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PropertyInspectionUI;
