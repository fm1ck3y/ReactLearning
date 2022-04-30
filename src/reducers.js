import { combineReducers } from 'redux'
import {
  ADD_NEWS,
  ADD_NEWS_ALL,
} from './actions'

function news(state = [], action) {
  switch (action.type) {
    case ADD_NEWS:
      const news = [
        ...state,
        {
          _id: action.id,
          text: action.text,
          title: action.title,
          author: action.author,
          date: action.date
        }
      ]
      debugger;
      return news
    case ADD_NEWS_ALL:
      return [...action.news]
    default:
      return state
  }
}

const newsApp = combineReducers({
  news
})

export default newsApp