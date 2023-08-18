import { ActionIcon } from "@mantine/core";
import { IconMail } from "@tabler/icons";

const MailButton = () => {
  return (
    <ActionIcon
      variant="light"
      title="GitHub"
      color="blue"
      size={48}
      component="a"
      href="mailto:AndreyNaldoni@gmail.com?Subject=Job enquiry"
      rel="noopener"
    >
      <IconMail stroke={1.5} />
    </ActionIcon>
  );
};

export default MailButton;
