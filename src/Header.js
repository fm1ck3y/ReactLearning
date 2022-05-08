import './Header.css';
import { Link } from "react-router-dom";
import React from 'react';
import IconHeader from './logo.png'

class Header extends React.Component
{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e)
    {
        let navWrapper = document.querySelector(".nav__wrapper");
        if (navWrapper.classList.contains("active")) {
          this.setAttribute("aria-expanded", "false");
          this.setAttribute("aria-label", "menu");
          navWrapper.classList.remove("active");
        } else {
          navWrapper.classList.add("active");
          this.setAttribute("aria-label", "close menu");
          this.setAttribute("aria-expanded", "true");
        }
    }

    render()
    {
        return (
            <header className="site-header">
              <div className="wrapper site-header__wrapper">
                  <div className="site-header__start">
                    <Link to='/'>
                        <img src={IconHeader} />
                    </Link>
                  </div>
                  <div className="site-header__middle">
                      <nav className="nav">
                          <button className="nav__toggle" aria-expanded="false" type="button">Меню</button>
                            <ul className="nav__wrapper">
                                <li className="nav__item">
                                    <Link to='/'>Главная страница</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to='/news'>Новости</Link>
                                </li>
                            </ul>
                      </nav>
                  </div>
                  <div className="site-header__end">
                    <Link to='/news/add'>Добавить пост</Link>
                  </div>
              </div>
              </header>
          );
    }
}

export default Header;
