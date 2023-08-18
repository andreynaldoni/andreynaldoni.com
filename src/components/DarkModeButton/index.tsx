import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

const DarkModeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      onLabel={<IconSun color={theme.white} size={16} stroke={1.5} />}
      offLabel={
        <IconMoonStars color={theme.colors.gray[6]} size={16} stroke={1.5} />
      }
      sx={{
        marginTop: "-17px",
      }}
    />
  );
};

export default DarkModeButton;
