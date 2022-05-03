import { combineReducers } from 'redux'
import {
  ADD_POST,
  ADD_POST_ALL,
} from './actions'

function news(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      const news = [
        ...state,
        {
          id: action.id,
          description: action.description,
          title: action.title,
          author: action.author,
          date_create: action.date_create,
          image: action.image
        }
      ]
      return news
    case ADD_POST_ALL:
      return [...action.news]
    default:
      return state
  }
}

const newsApp = combineReducers({
  news
})

export default newsApp