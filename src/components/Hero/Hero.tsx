import screenMockupsImage from '../../assets/misc/screen-mockups.svg';
import './Hero.scss';

export const Hero = () => {
  return (
    <div className="hero__container">
      <h2 className="hero__header">Build The Community Your Fans Will Love</h2>
      <p className="hero__text">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="hero__button">Get Started For Free</button>
      <img className="hero__image" src={screenMockupsImage} alt="" />
    </div>
  );
};
