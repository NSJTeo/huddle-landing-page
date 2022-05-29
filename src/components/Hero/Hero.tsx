import {
  HeroHeader as Header,
  HeroContainer as Container,
  HeroText as Text,
  HeroImage as Image,
} from '../../styles';
import screenMockupsImage from '../../assets/misc/screen-mockups.svg';
import './Hero.scss';

export const Hero = () => {
  return (
    <Container>
      <Header>Build The Community Your Fans Will Love</Header>
      <Text>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </Text>
      <button className="hero__button">Get Started For Free</button>
      <Image src={screenMockupsImage} />
    </Container>
  );
};
