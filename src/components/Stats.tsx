import {
  StatsContainer as Container,
  StatsCommunitiesContainers as CommunitiesContainer,
  StatsCommunitiesImage as CommunitiesImage,
  StatsCommunitiesCount as CommunitiesCount,
  StatsCommunitiesText as CommunitiesText,
  StatsMessagesCount as MessagesCount,
  StatsMessagesImage as MessagesImage,
  StatsMessagesText as MessagesText,
} from '../styles';
import communitiesIcon from '../assets/icons/icon-communities.svg';
import messagesIcon from '../assets/icons/icon-messages.svg';

export const Stats = () => {
  return (
    <Container>
      <CommunitiesContainer>
        <CommunitiesImage src={communitiesIcon} alt="group of people" />
        <CommunitiesCount>1.4k+</CommunitiesCount>
        <CommunitiesText>Communities Formed</CommunitiesText>
      </CommunitiesContainer>
      <div>
        <MessagesImage src={messagesIcon} alt="text message speech bubble" />
        <MessagesCount>2.7m+</MessagesCount>
        <MessagesText>Messages Sent</MessagesText>
      </div>
    </Container>
  );
};
