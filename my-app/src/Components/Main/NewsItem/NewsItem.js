import React from "react";
import faker from "faker";
import "./NewsItem.scss"

export function NewsItem(props) {

  const {news, delNews} = props;

  //------------------------------------------------------RETURN-------------------------------------------//

  return <div key={faker.datatype.uuid(10)} className="news__item">
    <p className="news__title">
      <b>{news.title}</b>
    </p>

    <p className="news__text">
      <b>Text: </b>

      {news.text}
    </p>
    <p className="news__description">
      <b>Description: </b>
      {news.description}
    </p>
    <img
      className="news__photo"
      src={news.photo}
      alt="pic"
      width="300px"
      height="225px"
      title="photo"
    />
    <p className="news__hashTags">
      <b>Hash tags: </b>
      {news.hashTags.map((item) => {
        return <span key={faker.datatype.uuid()}>{item + " "}</span>;
      })}
    </p>

    <p className="news__author">
      <b>Author: </b>
      {news.author}
    </p>
    <button onClick={() => delNews(news.id)}>Delete</button>
  </div>
}