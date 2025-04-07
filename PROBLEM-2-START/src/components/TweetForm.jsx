// components/TweetForm.jsx
import React, { useState } from "react";

export default function TweetForm({ onAddTweet }) {
  const [tweetText, setTweetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim()) {
      onAddTweet(tweetText);
      setTweetText("");
    }
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="What's happening?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <button disabled={!tweetText.trim()}>Tweet</button>
    </form>
  );
}