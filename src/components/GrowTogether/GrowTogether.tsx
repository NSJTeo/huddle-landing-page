import growingTogetherIllustration from '../../assets/illustrations/illustration-grow-together.svg';
import {
  GrowTogetherBody as Body,
  GrowTogetherImage as Image,
  GrowTogetherBackgroundImageTop as BackgroundImageTop,
  GrowTogetherBackgroundImageBottom as BackgroundImageBottom,
} from '../../styles';
import './GrowTogether.scss';

export const GrowTogether = () => {
  return (
    <div className="grow-together__container">
      <BackgroundImageTop />
      <Body>
        <Image src={growingTogetherIllustration} alt="" />
        <h3 className="grow-together__header">Grow Together</h3>
        <p className="grow-together__text">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </Body>
      <BackgroundImageBottom />
    </div>
  );
};
