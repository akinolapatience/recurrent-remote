"use client";
import React, { useState } from "react";

import {
  Container,
  Paper,
  Title,
  Text,
  Checkbox,
  Stack,
  Group,
  Box,
  ThemeIcon,
  List,
  Button,
  Flex,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import houseRulesIcon from "@/assets/HouseRulesIcon.png";

interface HouseRulesProps {
  onAccept?: () => void;
  onBack?: () => void;
}

const HouseRules: React.FC<HouseRulesProps> = ({ onAccept }) => {
  const [generalRulesAccepted, setGeneralRulesAccepted] = useState(false);
  const [cleanlinessRulesAccepted, setCleanlinessRulesAccepted] =
    useState(false);
  const [securityRulesAccepted, setSecurityRulesAccepted] = useState(false);

  const allRulesAccepted =
    generalRulesAccepted && cleanlinessRulesAccepted && securityRulesAccepted;

  const handleAccept = () => {
    if (allRulesAccepted && onAccept) {
      onAccept();
    }
  };

  return (
    <Container size="sm" py="md" px="xs">
      <Paper p="md" radius={0}>
        {/* Header */}
        <Flex align="center" gap="md" mb="xl">
          <Image
            src={houseRulesIcon}
            alt="House Rules Icon"
            width={40}
            height={40}
          />
          <div>
            <Title order={3} size="h5" mb={4}>
              House Rules
            </Title>
            <Text size="sm" c="dimmed">
              Please read and accept our house rules
            </Text>
          </div>
        </Flex>

        <Stack gap="xl">
          {/* General Rules Section */}
          <Box>
            <Group mb="md" gap="sm">
              <ThemeIcon size="sm" radius="xl" color="#046F7B" variant="filled">
                <IconCheck size={12} />
              </ThemeIcon>
              <Title order={3} size="h4" c="dark.7">
                General Rules
              </Title>
            </Group>

            <List
              spacing="sm"
              size="sm"
              pl="xl"
              icon={
                <ThemeIcon size={6} radius="xl" color="gray.6" variant="filled">
                  <div />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.7">
                  Quiet hours: 10:00 PM - 7:00 AM — please respect neighbors.
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">
                  No parties or events without prior written permission.
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">
                  Maximum guests: as per your booking. No unregistered guests.
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">
                  Pets: Not allowed (or allowed on request — adapt this)
                </Text>
              </List.Item>
            </List>
          </Box>

          {/* Cleanliness & Use Section */}
          <Box>
            <Group mb="md" gap="sm">
              <ThemeIcon size="sm" radius="xl" color="#046F7B" variant="filled">
                <IconCheck size={12} />
              </ThemeIcon>
              <Title order={3} size="h4" c="dark.7">
                Cleanliness & Use
              </Title>
            </Group>

            <List
              spacing="sm"
              size="sm"
              pl="xl"
              icon={
                <ThemeIcon size={6} radius="xl" color="gray.6" variant="filled">
                  <div />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.7">Please keep the property clean and tidy.</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">
                  Dispose of trash properly in provided bins.
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">Wash dishes after use.</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.7">
                  No smoking indoors — smoking allowed only in designated areas.
                </Text>
              </List.Item>
            </List>
          </Box>

          {/* Security and Safety Section */}
          <Box>
            <Group mb="md" gap="sm">
              <ThemeIcon size="sm" radius="xl" color="#046F7B" variant="filled">
                <IconCheck size={12} />
              </ThemeIcon>
              <Title order={3} size="h4" c="dark.7">
                Security and Safety
              </Title>
            </Group>

            <Box pl="xl">
              <Checkbox
                checked={securityRulesAccepted}
                onChange={(event) =>
                  setSecurityRulesAccepted(event.currentTarget.checked)
                }
                color="#046F7B"
                size="sm"
                variant="filled"
                label={
                  <Text c="gray.7" size="sm">
                    I have read and agree to the house rules
                  </Text>
                }
              />
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box px="xs">
            <Flex mt="lg" justify="space-between" gap="sm">
              <Button
                variant="outline"
                size="md"
                h={48}
                radius={0}
                style={{
                  flex: 1,
                  color: "#374151",
                  border: "1px solid #EAECF0",
                }}
                onClick={() => {
                  window.history.back();
                }}
              >
                Back
              </Button>

              <Button
                size="md"
                h={48}
                color="#046F7B"
                radius={0}
                style={{ flex: 1 }}
                onClick={handleAccept}
                disabled={!securityRulesAccepted}
              >
                Confirm
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default HouseRules;
