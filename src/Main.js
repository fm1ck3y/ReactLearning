import './Main.css';
import { Link } from "react-router-dom";
import React from 'react';
import addNewsAll from './actions'

class Main extends React.Component
{
  render()
  {
    console.log(this.props.news);

    return (
      <main className="main columns">
        <section className="column main-column">
              <a className="article first-article" href="{{ url_for('main.page_post',post_id= obj['id']) }}">
                <figure className="article-image is-4by3">
                  {/* <img src="{{ url_for('static',filename=obj['image_path']) }}" alt=""> </img> */}
                </figure>
                <div className="article-body">
                  <h2 className="article-title">
                    This is my Title
                  </h2>
                  <p className="article-content">
                    Hello team!
                  </p>
                  <footer className="article-info">
                    <span>Автор: m1ck3y</span>
                    <span>Дата публикации: 29.04.2022</span>
                  </footer>
                </div>
              </a>
        </section>
  
        <section className="column">
              <a className="article" href="{{ url_for('main.page_post',post_id= obj['id']) }}">
                <figure className="article-image is-3by2">
                  {/* <img src="{{ url_for('static',filename=obj.image_path) }}" alt=""> */}
                </figure>
                <div className="article-body">
                  <h2 className="article-title">
                  This is my Title
                  </h2>
                  <p className="article-content">
                  Hello team!
                  </p>
                  <footer className="article-info">
                    <span>Автор: fm1ck3y</span>
                    <span>Дата публикации: 29.04.2022</span>
                  </footer>
                </div>
              </a>
        </section>
      </main>
    );
  }
}

function mapStateToNews(state) {
  return {
    todos: [...state.news]
  }
}

export default Main;