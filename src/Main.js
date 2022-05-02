import './Main.css';
import { connect } from 'react-redux';
import React from 'react';
import { getNewsAll } from './actions'
import PostLeft from "./PostNewsMenu"
import PostRight from "./PostNewsRightSide"

class Main extends React.Component
{
  componentDidMount() {
    let dispatch = this.props.dispatch;

    fetch('/news').then(res => res.json()).then(data => {
      dispatch(getNewsAll(data));
    })
  }

  render()
  {
    console.log(this.props.news);

    return (
      <main className="main columns">
        <section className="column main-column">
              {
                this.props.news.map(function(post) {
                  return (
                    <PostLeft key={post.id} post_object={post}/>
                  )
                })
              }
        </section>
  
        <section className="column">
              {
                this.props.news.map(function(post) {
                  return (
                    <PostRight key={post.id} post_object={post}/>
                  )
                })
              }
        </section>
      </main>
    );
  }
}


function mapStateToProps(state) {
  return {
    news: [...state.news]
  }
}

export default connect(mapStateToProps)(Main);
