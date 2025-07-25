import React from "react";
import {
  Container,
  Title,
  Timeline,
  Text,
  Button,
  Paper,
  Group,
  Stack,
  ThemeIcon,
  Box,
} from "@mantine/core";
import {
  IconCheck,
  //   IconClock,
  //   IconLogin,
  //   IconLogout,
} from "@tabler/icons-react";

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

  const getTimelineColor = (status: string) => {
    switch (status) {
      case "completed":
        return "teal";
      case "current":
        return "blue";
      case "pending":
        return "gray";
      default:
        return "gray";
    }
  };

  const getStatusIcon = (status: string, defaultIcon: React.ReactNode) => {
    if (status === "completed") {
      return <IconCheck size={16} />;
    }
    return defaultIcon;
  };

  return (
    <Container size="md" py="xl">
      <Paper radius={0} p="xl">
        <Stack gap="lg">
          <Title order={2} size="h3" w={600} c="dark">
            Guest Timeline
          </Title>

          <Timeline active={1} bulletSize={24} lineWidth={1}>
            {timelineData.map((item, index) => (
              <Timeline.Item
                key={item.id}
                bullet={
                  <ThemeIcon
                    size={24}
                    variant="filled"
                    color="#046F7B"
                    radius="sm"
                  >
                    {getStatusIcon(item.status, item.icon)}
                  </ThemeIcon>
                }
                title={
                  <Group p="apart" align="flex-start" gap="sm">
                    <Box>
                      <Text w={400} size="sm" c="dark">
                        {item.title}
                      </Text>
                      <Text size="xs" c="dimmed" mt={2}>
                        {item.description}
                      </Text>
                    </Box>
                    <Box ta="right">
                      <Text size="xs" c="dimmed" w={500}>
                        {item.time}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {item.date}
                      </Text>
                    </Box>
                  </Group>
                }
              />
            ))}
          </Timeline>

          <Box mt="xl">
            <Button
              fullWidth
              size="md"
              color="#046F7B"
              variant="filled"
              radius={0}
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
