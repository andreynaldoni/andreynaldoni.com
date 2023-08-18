import { ActionIcon } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons";

const WhatsAppButton = () => {
  return (
    <ActionIcon
      variant="light"
      title="GitHub"
      color="blue"
      size={48}
      component="a"
      href="https://api.whatsapp.com/send?phone=5513981750611&text=I'm%20looking%20for%20a%20professional%20like%20you"
      rel="noopener"
    >
      <IconBrandWhatsapp stroke={1.5} />
    </ActionIcon>
  );
};

export default WhatsAppButton;
