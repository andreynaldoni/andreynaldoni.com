import {
  AppShell,
  Container,
  Group,
  Header,
  Image,
  Stack,
  Title,
} from '@mantine/core';
import DarkModeButton from 'components/DarkModeButton';
import GitHubButton from 'components/GitHubButton';
import LinkedInButton from 'components/LinkedInButton';
import MailButton from 'components/MailButton';
import WhatsAppButton from 'components/WhatsAppButton';

const sx = { height: '100%' };

const Home = () => {
  return (
    <AppShell
      // padding="md"
      header={
        <Header height={60}>
          <Container sx={sx}>
            <Group sx={sx} align="center" position="apart" noWrap>
              <Title
                weight={600}
                order={3}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
              >
                &lt;Andrey Naldoni/&gt;
              </Title>
              <DarkModeButton />
            </Group>
          </Container>
        </Header>
      }
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
            src={process.env.PUBLIC_URL + '/img/Me.jpg'}
          />
          <Group>
            <MailButton />
            <GitHubButton />
            <LinkedInButton />
            <WhatsAppButton />
          </Group>
        </Stack>
      </Container>
    </AppShell>
  );
};

export default Home;
