import { Title } from "@mantine/core";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Title
        weight={600}
        order={3}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        &lt;Andrey Naldoni/&gt;
      </Title>
    </Link>
  );
};

export default Logo;
