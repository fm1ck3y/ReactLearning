import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import News from "./News";
import AddPost from "./AddPost";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/news" element={<News />} />
       <Route path="/news/add" element={<AddPost />} />
     </Routes>
  </BrowserRouter>,
  rootElement
);