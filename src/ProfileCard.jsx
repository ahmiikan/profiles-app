import React from "react";

export default function ProfileCard({ name, bio, avatar, isFollowed, onToggleFollow }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button className={isFollowed ? "unfollow" : "follow"} onClick={onToggleFollow}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}
