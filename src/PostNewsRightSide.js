import './Main.css';
import React from 'react';

class Post extends React.Component
{
  render()
  {
    return (
      <a className="article" href="">
      <figure className="article-image is-3by2">
        <img src={'image/' + this.props.post_object.image} />
      </figure>
      <div className="article-body">
        <h2 className="article-title">
          {this.props.post_object.title}
        </h2>
        <footer className="article-info">
          <span>Автор: {this.props.post_object.author}</span>
          <span>Дата публикации: {new Date(this.props.post_object.date_create).toLocaleString()}</span>
        </footer>
      </div>
    </a>
    );
  }
}

export default Post;