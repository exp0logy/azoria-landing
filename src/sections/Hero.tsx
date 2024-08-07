import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Demo } from "../components/Demo";
import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";
import { WaitlistForm } from "../components/WaitlistForm";

// Built with Vivid (https://vivid.lol) ⚡️

const Background = () => (
  <div
    className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
    aria-hidden="true"
  >
    <ScatteredSpheres />
  </div>
);

export const Hero = () => {
  return (
    <Section
      gradients
      className="items-center justify-center min-h-screen h-fit gap-16 col md:flex-row"
    >
      <Background />
      {/* Text */}
      <div className="z-10 gap-5 text-center col md:text-left">
        <Title size="lg">
          Develop <GradientText className="orange-blue">Faster.</GradientText>
          <br />
          Host <GradientText className="purple-orange">Better.</GradientText>
        </Title>
        <Details>
          Development alongside Unique, Problem solving Hosting Solutions.
        </Details>
        {/* <WaitlistForm
          id="hero-waitlist"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        /> */}
      </div>
      {/* Image */}
      <Demo
        data-aos="fade-left"
        webmSrc="/videos/hero.webm"
        mp4Src="/videos/hero.mp4"
        alt="A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing"
      />
    </Section>
  );
};
