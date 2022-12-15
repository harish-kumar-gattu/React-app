import React from "react";
import "./card.css";

const Card = ({ post }) => {
  return (
    <>
      <section className="card">
        <section className="card-header">
          <div>
            <div className="card-header__name">{post.name}</div>
            <div className="card-header__place">{post.location}</div>
          </div>
          <span className="card-header__ellipseh">
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </section>
        <section className="card-image">
          <img src={require("" + post.PostImage)} alt="place" />
        </section>
        <section className="card-actions">
          <span className="card-actions__heart">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <span className="card-actions__share">
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </span>
          <span className="card-actions__date">{post.date}</span>
        </section>
        <section className="card-likes">{post.likes} likes</section>
        <section className="card-description">{post.description}</section>
      </section>
    </>
  );
};

export default Card;
