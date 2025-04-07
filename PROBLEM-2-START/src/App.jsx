// App.jsx
import React, { useState } from "react";
import TweetForm from "./components/TweetForm";
import TweetCard from "./components/TweetCard";

const INITIAL_TWEETS = [
  {
    id: 0,
    title: "React JS exam on going",
    read: false,
  },
  {
    id: 1,
    title: "KNY Holidays tomorrow!",
    read: false,
  },
  {
    id: 2,
    title: "Review you Web Dev course !",
    read: true,
  },
];

export default function App() {
  const [tweets, setTweets] = useState(INITIAL_TWEETS);

  const addTweet = (newTweet) => {
    setTweets([{
      id: Date.now(),
      title: newTweet,
      read: false
    }, ...tweets]);
  };

  const toggleReadStatus = (id) => {
    setTweets(tweets.map(tweet => 
      tweet.id === id ? {...tweet, read: !tweet.read} : tweet
    ));
  };

  return (
    <>
      <header>
        <h1>CADT Tweets</h1>
      </header>
      <TweetForm onAddTweet={addTweet} />
      <div className="tweet-list">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            onToggleRead={() => toggleReadStatus(tweet.id)}
          />
        ))}
      </div>
    </>
  );
}