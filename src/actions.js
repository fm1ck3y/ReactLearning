
/*
 * типы экшенов
 */

export const ADD_POST = 'ADD_POST'
export const ADD_POST_ALL = 'ADD_POST_ALL'
export const GET_PAGE = 'GET_PAGE'
/*
 * генераторы экшенов
 */

export function addNews(description, title, author, date_create, image, id) {
  return { type: ADD_POST, description, title, author, date_create, image, id }
}

export function getNewsAll(news) {
  return { type: ADD_POST_ALL, news }
}

export function getPage(page){
  return { type: GET_PAGE, page: page }
}