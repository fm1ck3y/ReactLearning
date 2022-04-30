
/*
 * типы экшенов
 */

export const ADD_NEWS = 'ADD_NEWS'
export const ADD_NEWS_ALL = 'ADD_NEWS_ALL'

/*
 * генераторы экшенов
 */

export function addNews(text, title, author, date) {
  return { type: ADD_NEWS, title, text, author, date }
}

export function addNewsAll(news) {
  return { type: ADD_NEWS_ALL, news }
}
