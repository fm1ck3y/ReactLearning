import './Main.css';
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component
{
  render()
  {
    return (
      <a className="article" href="">
      <figure className="article-image is-3by2">
        <img src={this.props.post_object.image} alt=""/>
      </figure>
      <div className="article-body">
        <h2 className="article-title">
          {this.props.post_object.title}
        </h2>
        <p className="article-content">
          {this.props.post_object.description}
        </p>
        <footer className="article-info">
          <span>Автор: {this.props.post_object.author}</span>
          <span>Дата публикации: {this.props.post_object.date_create}</span>
        </footer>
      </div>
    </a>
    );
  }
}

export default Post;