import React from "react";
import "./Header.scss";
import "../../Fonts/fonts.scss";
import headerLogo from "../../Images/Pictures/header_logo.png";
import {AddForm} from "./AddForm/AddForm";
import {Filter} from "./Filter/Filter";

export function Header(props) {
  const {addNews, setSearchText, setSearchAuthor, setSearchTags} = props;

  //------------------------------------------------------RETURN-------------------------------------------//

  return <header className="header">
    <div className="header__line">
      <a href="#">
        <img
          className="header__photo"
          src={headerLogo}
          alt="header"
        />
      </a>
      <a href="#" className="header__title">Breaking News</a>

      <AddForm addNews={addNews}/>

    </div>

    <Filter setSearchText={setSearchText} setSearchAuthor={setSearchAuthor} setSearchTags={setSearchTags}/>

  </header>
}