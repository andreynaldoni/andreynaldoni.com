import { ActionIcon } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons";

const LinkedInButton = () => {
  return (
    <ActionIcon
      variant="light"
      title="GitHub"
      color="blue"
      size={48}
      component="a"
      href="https://br.linkedin.com/in/andreynaldoni"
      rel="noopener"
    >
      <IconBrandLinkedin stroke={1.5} />
    </ActionIcon>
  );
};

export default LinkedInButton;
