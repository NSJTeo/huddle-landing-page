import './Stats.scss';
import communitiesIcon from '../../assets/icons/icon-communities.svg';
import messagesIcon from '../../assets/icons/icon-messages.svg';

export const Stats = () => {
  return (
    <div className="stats__container">
      <div className="stats__communities-container">
        <img
          className="stats__communities-image"
          src={communitiesIcon}
          alt="group of people"
        />
        <p className="stats__communities-count">1.4k+</p>
        <p className="stats__communities-text">Communities Formed</p>
      </div>
      <div>
        <img
          className="stats__messages-image"
          src={messagesIcon}
          alt="text message speech bubble"
        />
        <p className="stats__messages-count">2.7m+</p>
        <p className="stats__messages-text">Messages Sent</p>
      </div>
    </div>
  );
};
