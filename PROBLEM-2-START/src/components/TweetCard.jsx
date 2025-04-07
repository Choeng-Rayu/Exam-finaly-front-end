// components/TweetCard.jsx
import React from "react";

export default function TweetCard({ tweet, onToggleRead }) {
  return (
    <div 
      className={`tweet ${tweet.read ? "read" : "not-read"}`}
      onClick={onToggleRead}
    >
      <h4>{tweet.title}</h4>
      <small>{tweet.read ? "Read" : "Not Read"}</small>
    </div>
  );
}