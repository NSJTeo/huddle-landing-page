import backgroundTop from '../assets/backgrounds/bg-section-top-mobile-1.svg';
import backgroundBottom from '../assets/backgrounds/bg-section-bottom-mobile-1.svg';
import growingTogetherIllustration from '../assets/illustrations/illustration-grow-together.svg';
import {
  GrowTogetherBody as Body,
  GrowTogetherImage as Image,
  GrowTogetherBackgroundImageTop as BackgroundImageTop,
} from '../styles';

export const GrowTogether = () => {
  return (
    <div>
      <BackgroundImageTop />
      <Body>
        <Image src={growingTogetherIllustration} alt="" />
        <h3>Grow Together</h3>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </Body>
      {/* <BackgroundImage src={backgroundBottom} alt="" /> */}
    </div>
  );
};
