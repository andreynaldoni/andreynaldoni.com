import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  List,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  // IconDeviceMobile,
  IconMail,
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import HeaderNavbar from "components/HeaderNavbar";

const textIcon = { display: "flex", alignItems: "center", gap: 4 };
const iconSize = 14;

const Contact = () => {
  const theme = useMantineTheme();
  const color = theme.colors.blue[6];

  const contacts = [
    {
      icon: <IconMapPin size={iconSize} style={{ color }} />,
      text: "Sao Paulo, Brazil",
    },
    // {
    //   icon: <IconDeviceMobile size={iconSize} style={{ color }} />,
    //   text: "+55 13 98175 0611",
    // },
    {
      icon: <IconMail size={iconSize} style={{ color }} />,
      text: "andreynaldoni@gmail.com",
    },
    {
      icon: <IconWorld size={iconSize} style={{ color }} />,
      text: "andreynaldoni.com",
    },
  ];

  return (
    <Box mb="md">
      {contacts.map((c) => (
        <Text size="sm" sx={textIcon} key={c.text}>
          {c.icon} {c.text}
        </Text>
      ))}
    </Box>
  );
};

type ExperienceProps = {
  title: string;
  date: string;
  company: string;
  activities: string[];
};

const Experience = ({ title, date, company, activities }: ExperienceProps) => {
  const theme = useMantineTheme();
  return (
    <Box mb="sm">
      <Title order={5}>{title}</Title>
      <Text mb={4} color={theme.primaryColor} weight={500}>
        {date} | {company}
      </Text>
      <List>
        {activities.map((activity) => (
          <List.Item key={activity}>{activity}</List.Item>
        ))}
      </List>
    </Box>
  );
};

const TitleSection = ({ children }: { children: React.ReactNode }) => (
  <>
    <Title order={4} mb="lg">
      {children}
    </Title>
  </>
);

type SkillsProps = {
  title: string;
  skills: string[];
};

const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <Box mb="xl">
      <Title order={5} mb={4}>
        {title}
      </Title>
      <Flex wrap="wrap" gap={4}>
        {skills.map((skill) => (
          <Button variant="outline" radius="xl" size="xs" key={skill}>
            {skill}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

const CV = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <HeaderNavbar />
      <Container
        my={40}
        sx={{
          "@media print": {
            margin: 0,
          },
        }}
      >
        <Flex>
          <Flex direction="column" miw={isMobile ? "50%" : "70%"}>
            <Title weight={600} mb="xs">
              Andrey Naldoni
            </Title>
            <Title order={4} weight={400} sx={{ letterSpacing: 2 }} mb="xl">
              Tech Lead
            </Title>

            <TitleSection>RECENT EXPERIENCE</TitleSection>

            <Experience
              title="Software Development Manager"
              date="Ago 2023 – Present"
              company="Harpio"
              activities={["TBD"]}
            />

            <Experience
              title="Full-Stack Developer"
              date="Jan 2020 – Jul 2023"
              company="Claro Brazil"
              activities={[
                "Developed and maintaining an onboarding app available for 20k new customers daily.",
              ]}
            />

            <Experience
              title="Software Engineer"
              date="May 2017 – Dec 2019"
              company="Nextel Brazil"
              activities={[
                "Integrated and maintained ANATEL (Equivalent to US FCC) Consumidor with Zendesk attending about 1k customers daily;",
                "Designed and developed an anti-fraud system using biometrics validation with 70% efficiency;",
                "Supported and guided 500+ automated process with more than $50 million estimated savings.",
              ]}
            />

            <Experience
              title="Software Developer"
              date="Nov 2014 – May 2017"
              company="Bematech S/A"
              activities={[
                "Technical leadership of automation initiatives and the quality team;",
                "Test architecture development using TDD (Test Driven Development) and KDT (Keyword Driven Development) resulting in a decrease of approximately 90% in the incidence of bugs and 70% in maintenance costs;",
                "Automated data collection with real time results available in cloud.",
              ]}
            />

            <Experience
              title="Programmer"
              date="Jun 2012 – Out 2014"
              company="Nortia IT"
              activities={[
                "Developed and maintained new features in retail ERP system for Leroy Merlin.",
              ]}
            />

            <Experience
              title="Computing instructor"
              date="Jun 2011 – Dez 2011"
              company="Praia Grande City Hall"
              activities={[
                "Digital inclusion project aimed at children, teenagers, elderly and people with special needs in public schools.",
              ]}
            />

            <Experience
              title="Room monitor"
              date="Jun 2010 – Dez 2010"
              company="Sao Paulo Government"
              activities={[
                "Digital inclusion project aimed at students and teachers of state public schools, focusing on collaboration trough technology.",
              ]}
            />
          </Flex>
          <Flex direction="column" w={isMobile ? "50%" : "30%"} pl="lg">
            <Contact />

            <TitleSection>KEY SKILLS</TitleSection>

            <Skills
              title="Front-end"
              skills={["React", "Next.js", "TypeScript", "JavaScript"]}
            />

            <Skills
              title="Back-end"
              skills={[
                "Node.js",
                "Express",
                "Fastify",
                "NestJS",
                "Python",
                "Flask",
              ]}
            />

            <Skills
              title="Database"
              skills={[
                "SQL",
                "NoSQL",
                "MySQL",
                "PostgreeSQL",
                "Oracle",
                "MS SQL",
                "MongoDB",
                "Firestore",
              ]}
            />

            <Skills title="Cloud" skills={["GCP", "AWS"]} />

            <TitleSection>LANGUAGES</TitleSection>

            <Group position="apart">
              <Text>English</Text>
              <Text color="blue">Professional</Text>
            </Group>
            <Group position="apart">
              <Text>Portuguese</Text>
              <Text color="blue">Native</Text>
            </Group>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default CV;
