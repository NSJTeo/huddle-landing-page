import growingTogetherIllustration from '../../assets/illustrations/illustration-grow-together.svg';
import './GrowTogether.scss';

export const GrowTogether = () => {
  return (
    <div className="grow-together__container">
      <div className="grow-together__background-image--top" />
      <div className="grow-together__body">
        <div className="grow-together__illustration-container">
          <img
            className="grow-together__illustration"
            src={growingTogetherIllustration}
            alt=""
          />
        </div>
        <div>
          <h3 className="grow-together__header">Grow Together</h3>
          <p className="grow-together__text">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
      <div className="grow-together__background-image-container">
        <div className="grow-together__background-image--bottom" />
      </div>
    </div>
  );
};
