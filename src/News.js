import './Main.css';
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import Post from "./PostNewsMenu"
import { getNewsAll } from "./actions"

class News extends React.Component
{
  componentDidMount() {
    let dispatch = this.props.dispatch;

    fetch('/news').then(res => res.json()).then(data => {
      dispatch(getNewsAll(data));
    })
  }

  render()
  {
    return (
        <div className= "news">
         <main className="main columns">
            <section className="column main-column">
              {
                this.props.news.map(function(post) {
                  return (
                    <Post key={post.id} post_object={post}/>
                  )
                })
              }
            </section>
          </main>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: [...state.news],
  }
}

export default connect(
  mapStateToProps
)(News);