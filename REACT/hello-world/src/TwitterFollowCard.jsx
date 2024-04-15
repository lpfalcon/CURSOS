import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUserName,
  userName = "Unknow",
  initialIsFollowing = false,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const followText = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";


  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
        />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text"> {followText} </span>
          <span className="tw-followCard-unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
