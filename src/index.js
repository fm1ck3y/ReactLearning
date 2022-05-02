import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import News from "./News";
import AddPost from "./AddPost";
import newsApp from "./reducers"
import { createStore } from 'redux'

const store = createStore(newsApp)

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header store={store}/>
    <Routes>
       <Route path="/" element={<Main  store={store}/>} />
       <Route path="/news" element={<News  store={store}/>} />
       <Route path="/news/add" element={<AddPost  store={store}/>} />
     </Routes>
  </BrowserRouter>,
  rootElement
);