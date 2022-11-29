import { Container, Group, Header } from '@mantine/core';
import DarkModeButton from 'components/DarkModeButton';
import Logo from 'components/Logo';

const sx = { height: '100%' };
const noPrint = {
  '@media print': {
    margin: 0,
    display: 'none',
  },
};

const HeaderNavbar = () => {
  return (
    <Header height={60} sx={noPrint}>
      <Container sx={sx}>
        <Group sx={sx} align="center" position="apart" noWrap>
          <Logo />
          <DarkModeButton />
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderNavbar;
