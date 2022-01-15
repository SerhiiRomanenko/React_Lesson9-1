import React from "react";
import {NewsItem} from "./NewsItem/NewsItem";
import "./Main.scss";
import faker from "faker";

export function Main(props) {

  const {newsToRender, delNews} = props;

  //------------------------------------------------------RETURN-------------------------------------------//

  return <main className="main">
    {newsToRender.map((news) => {
      return <NewsItem key={faker.datatype.uuid(10)} news={news} delNews={delNews}/>
    })}
  </main>
}
