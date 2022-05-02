
/*
 * типы экшенов
 */

export const ADD_NEWS = 'ADD_NEWS'
export const ADD_NEWS_ALL = 'ADD_NEWS_ALL'

/*
 * генераторы экшенов
 */

export function addNews(description, title, author, date_create, image, id) {
  return { type: ADD_NEWS, description, title, author, date_create, image, id }
}

export function getNewsAll(news) {
  return { type: ADD_NEWS_ALL, news }
}
