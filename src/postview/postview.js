import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Card from "../card";

const Postview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  });

  return (
    <>
      <Header />
      <div>
        {posts.map((user, i) => {
          return <Card post={user} key={i} />;
        })}
      </div>
    </>
  );
};

export default Postview;
