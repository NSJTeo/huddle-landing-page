import './FlowingConversations.scss';
import flowingConversationsIllustration from '../../assets/illustrations/illustration-flowing-conversation.svg';

export const FlowingConversations = () => {
  return (
    <div className="flowing-conversations__container">
      <div className="flowing-conversations__illustration-container">
        <img
          className="flowing-conversations__illustration"
          src={flowingConversationsIllustration}
          alt=""
        />
      </div>
      <div>
        <h3 className="flowing-conversations__header">Flowing Conversations</h3>
        <p className="flowing-conversations__text">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
};
