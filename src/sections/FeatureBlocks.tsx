import { ReactNode } from "react";

import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <Card grayer className="relative items-center gap-1 p-6 col">
      {children}
    </Card>
    
  );
};

export const FeatureBlocks = () => {
  return (
    <Section className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="green-sky">Hosting</GradientText>{" "}
          Shouldn't be hard.
        </Title>
        <Details>
          Bots, Websites, Landing Pages. The list goes on.
        </Details>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>

          <ShuffleIcon />
          <BlockTitle>Worldwide</BlockTitle>
          <BlockText>
            Azoria operates on a global scale, offering our web hosting and development services to clients worldwide.
          </BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <SignalIcon />
          <BlockTitle>Open Source</BlockTitle>
          <BlockText>
            We leverage open-source technology for timely security updates and transparency, ensuring your projects are secure.
          </BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <TalkingIcon />
          <BlockTitle>Communication</BlockTitle>
          <BlockText>
            We value clear and open communication, ensuring seamless collaboration and exceptional service for your projects.
          </BlockText>
        </Block>
        {/* Block 4 */}
        <Block>
          <DoorIcon />
          <BlockTitle>Production-ready code</BlockTitle>
          <BlockText>
          Multiplatform solutions, ensuring your projects are compatible across various devices and operating systems.
          </BlockText>
        </Block>
        {/* Block 5 */}
        <Block>
          <CardsIcon />
          <BlockTitle>Workflow Management</BlockTitle>
          <BlockText>
          Our streamlined workflow ensures efficient project management and timely delivery for any services.
          </BlockText>
        </Block>
        {/* Block 6 */}
        <Block>
          <MagicIcon />
          <BlockTitle>Flexible Revisions</BlockTitle>
          <BlockText>
          At Azoria, we offer flexible revisions to ensure your project meets your exact specifications.
          </BlockText>
        </Block>
      </div>
    </Section>
  );
};
