import './Main.css';
import { Link } from "react-router-dom";
import React from 'react';

class News extends React.Component
{
  render()
  {
    console.log(this.props.news);

    return (
        <div class= "news">
         <main class="main columns">
            <section class="column main-column">
              <a class="article first-article" href="{{ url_for('main.page_post',post_id= obj['id']) }}">
                <figure class="article-image is-4by3">
                  <img src="{{ url_for('static',filename=obj['image_path']) }}" alt=""/>
                </figure>
                <div class="article-body">
                  <h2 class="article-title">
                    This is title
                  </h2>
                  <p class="article-content">
                    This is description
                  </p>
                  <footer class="article-info">
                    <span>Автор: fm1ck3y</span>
                    <span>Дата публикации: 22.04.2022</span>
                  </footer>
                </div>
              </a>
            </section>
        </main>
            <div class="btn-group">
                <a href="/news/page={{ previous_page }}">Предыдущая страница</a>
                <a href="/news/page={{ page }}">Следующая страница</a>
            </div>
        </div>
    );
  }
}

export default News;