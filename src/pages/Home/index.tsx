import {
  AppShell,
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronRight, IconDownload, IconFileSearch } from '@tabler/icons';
import { Link } from 'react-router-dom';

import GitHubButton from 'components/GitHubButton';
import HeaderNavbar from 'components/HeaderNavbar';
import LinkedInButton from 'components/LinkedInButton';
import MailButton from 'components/MailButton';
import WhatsAppButton from 'components/WhatsAppButton';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <AppShell
      // padding="md"
      header={<HeaderNavbar />}
      // footer={
      //   <Footer height={60} py="md">
      //     <Container sx={sx}>
      //       <Group align="center" position="center" spacing={2}>
      //         <Text size="sm">Coded with</Text>{' '}
      //         <IconHeart stroke={1} size={18} color="red" />{' '}
      //         <Text size="sm">and some </Text>
      //         <IconCoffee stroke={1} size={18} color="brown" />
      //       </Group>
      //     </Container>
      //   </Footer>
      // }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Stack align="center">
          <Title weight={600} color="blue" align="center">
            Hello I'm Andrey
          </Title>
          <Title order={3} weight={400} color="blue" align="center">
            You are just one tap away to contact me
          </Title>
          <Image
            width={256}
            radius={256}
            src={process.env.PUBLIC_URL + '/img/me.jpg'}
          />
          <Group>
            <MailButton />
            <GitHubButton />
            <LinkedInButton />
            <WhatsAppButton />
          </Group>
          <Group position="center">
            <Button
              leftIcon={<IconDownload size={18} />}
              component="a"
              href="/CV_ANDREY_NALDONI.pdf"
              download
            >
              Download resume
            </Button>
            <Button
              leftIcon={<IconFileSearch size={18} />}
              component={Link}
              to="/cv"
            >
              View resume online
            </Button>
          </Group>
          <Title weight={600} color="blue" align="center">
            Projects
          </Title>
          <Paper
            radius="md"
            withBorder
            shadow="sm"
            sx={{
              overflow: 'hidden',
            }}
          >
            <Group
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
              }}
              spacing={0}
            >
              <Box
                component="a"
                href="https://nextpic.app"
                sx={{
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <Image
                  src={process.env.PUBLIC_URL + '/img/nextpic.jpg'}
                  fit="contain"
                  alt="NextPic.app"
                />
              </Box>
              <Box
                p="lg"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <Title weight={600} mb="sm">
                  NextPic.app
                </Title>
                <Text size="xl" mb="sm">
                  Free online photo proofing, available in 🇧🇷 and 🇺🇸 languages.
                </Text>
                <Text
                  size="xl"
                  variant="link"
                  component="a"
                  href="https://nextpic.app"
                  sx={{ display: 'flex' }}
                  arial-label="NextPic.app website"
                  role="link"
                >
                  See more
                  <span
                    style={{
                      marginLeft: 4,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <IconChevronRight size={22} />
                  </span>
                </Text>
              </Box>
            </Group>
          </Paper>
        </Stack>
      </Container>
    </AppShell>
  );
};

export default Home;
