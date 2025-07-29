import React from "react";
import {
  Container,
  Title,
  Timeline,
  Text,
  Button,
  Flex,
  Paper,
  Group,
  Stack,
  ThemeIcon,
  Box,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface TimelineItemData {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  status: "completed" | "pending";
  icon: React.ReactNode;
}

const GuestTimeline: React.FC = () => {
  const timelineData: TimelineItemData[] = [
    {
      id: "booked",
      title: "Booked",
      description: "A quick submission of a means of identification",
      time: "2:17pm",
      date: "04/07/2025",
      status: "completed",
      icon: <IconCheck size={16} />,
    },
    {
      id: "reserved",
      title: "Reserved",
      description: "Booking has been completed, user awaiting check-in",
      time: "2:48pm",
      date: "04/07/2025",
      status: "completed",
      icon: <IconCheck size={16} />,
    },
    {
      id: "checkin",
      title: "Check-In",
      description: "User has been checked in, and is in the building",
      time: "3:13pm",
      date: "04/07/2025",
      status: "pending",
      icon: <IconCheck size={16} />,
    },
    {
      id: "checkout",
      title: "Check-Out",
      description: "User has checked out",
      time: "3:13pm",
      date: "09/07/2025",
      status: "pending",
      icon: <IconCheck size={16} />,
    },
  ];

  const getStatusIcon = (status: string, defaultIcon: React.ReactNode) => {
    if (status === "completed") {
      return <IconCheck size={16} />;
    }
    return defaultIcon;
  };

  return (
    <Container px="xs" py="md" size="100%" style={{ maxWidth: "100%" }}>
      <Paper radius={0} p="md" style={{ width: "100%" }}>
        <Stack gap="lg">
          <Title order={3} size="h4" fw={600} c="dark">
            Guest Timeline
          </Title>

          <Timeline active={1} bulletSize={20} lineWidth={1}>
            {timelineData.map((item) => (
              <Timeline.Item
                key={item.id}
                bullet={
                  <ThemeIcon size={20} variant="filled" color="#D6DAE0
                  " radius="sm">
                    {getStatusIcon(item.status, item.icon)}
                  </ThemeIcon>
                }
                title={
                  <Flex
                    justify="space-between"
                    align="start"
                    wrap="wrap"
                    w="100%"
                    gap="xs"
                  >
                    {/* Left side */}
                    <Box style={{ flex: 1, minWidth: "60%" }}>
                      <Text fw={500} size="sm" c="dark">
                        {item.title}
                      </Text>
                      <Text size="xs" c="dimmed" mt={2}>
                        {item.description}
                      </Text>
                    </Box>

                    {/* Right side */}
                    <Box style={{ textAlign: "right" }}>
                      <Text size="xs" c="dimmed">
                        {item.time}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {item.date}
                      </Text>
                    </Box>
                  </Flex>
                }
              />
            ))}
          </Timeline>

          <Box mt="md">
            <Button
              fullWidth
              size="md"
              color="#046F7B"
              variant="filled"
              radius={0}
              style={{ fontSize: "14px" }}
            >
              Check-In
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default GuestTimeline;
