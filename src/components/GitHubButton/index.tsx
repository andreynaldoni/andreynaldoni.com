import { ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const GitHubButton = () => {
  return (
    <ActionIcon
      variant="light"
      title="GitHub"
      color="blue"
      size={48}
      component="a"
      href="https://github.com/andreynaldoni"
      rel="noopener"
    >
      <IconBrandGithub stroke={1.5} />
    </ActionIcon>
  );
};

export default GitHubButton;
