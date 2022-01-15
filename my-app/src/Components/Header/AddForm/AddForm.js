import React, {useState, useRef} from "react";
import faker from "faker";
import './AddForm.scss';
import "../../../Fonts/fonts.scss";
import {AUTHORS, TAGS} from "../../../myData";

export function AddForm(props) {
  const {addNews} = props;
  const [show, setShow] = useState(false);
  const addTitle = useRef("");
  const addText = useRef("");
  const addDescription = useRef("");
  const addPhoto = useRef(null);
  const tagsRefs = useRef([]);
  const authorsRefs = useRef([]);

  let [errorTitleMessage, setErrorTitleMessage] = useState(null);
  let [errorTextMessage, setErrorTextMessage] = useState(null);
  let [errorPhotoMessage, setErrorPhotoMessage] = useState(null);
  let [errorTagsMessage, setErrorTagsMessage] = useState(null);
  let [errorAuthorMessage, setErrorAuthorMessage] = useState(null);

  //------------------------------------------------------RETURN-------------------------------------------//

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const selectedTags = tagsRefs.current.filter(i => i.checked);
    const selectedAuthor = authorsRefs.current.filter(i => i.checked);

    setErrorTitleMessage(null);
    setErrorTextMessage(null);
    setErrorPhotoMessage(null);
    setErrorTagsMessage(null);
    setErrorAuthorMessage(null);

    if (addTitle.current.value.length <= 3) {
      setErrorTitleMessage('Title value should include more symbols');
    }

    if (addText.current.value.length <= 3) {
      setErrorTextMessage('Text value should include more symbols');
    }

    if (!addPhoto.current.value) {
      setErrorPhotoMessage('Should choose some photo');
    }

    if (selectedTags.length === 0) {
      setErrorTagsMessage('Choose one or more #hashTags');
    }

    if (selectedAuthor.length === 0) {
      setErrorAuthorMessage('Choose author of the news');
    }

    if (addTitle.current.value.length > 3 &&
      addText.current.value.length > 3 &&
      selectedTags.length > 0 &&
      selectedAuthor.length > 0 &&
      addPhoto.current.value) {

      const createdNews = {
        id: faker.datatype.uuid(),
        title: addTitle.current.value.toUpperCase(),
        text: addText.current.value,
        description: addDescription.current.value,
        photo: URL.createObjectURL(addPhoto.current.files[0]),
        hashTags: selectedTags.map(i => i.name),
        author: selectedAuthor.map(i => i.value),
      }

      addTitle.current.value = '';
      addText.current.value = '';
      addDescription.current.value = '';
      addPhoto.current.value = '';
      setShow((s) => !s);

      return addNews(createdNews);
    }
  }

  //----------------------------RETURN------------------------//

  tagsRefs.current = [];
  authorsRefs.current = [];

  return <div className="header__addBlock">

    <button onClick={() => setShow((s) => !s)}
            className="header__addNews">
      {show === true ? "Hide" : "Add news"}
    </button>

    <form className="header__addForm"
          style={{visibility: show ? 'visible' : "hidden", opacity: show ? 1 : 0}}>
      <p className="header__addFormAbout">Enter information with Breaking news</p>

      <input className="header__addTitle"
             ref={addTitle}
             type="text"
             placeholder="Enter title"/>

      {errorTitleMessage &&
        <span className="error">{errorTitleMessage}</span>
      }

      <input className="header__addText"
             ref={addText}
             type="text"
             placeholder="Enter text"/>

      {errorTextMessage &&
        <span className="error">{errorTextMessage}</span>
      }

      <textarea className="header__addDescription"
                ref={addDescription}
                placeholder="Enter description">
      </textarea>

      <input className="header__addPhoto"
             ref={addPhoto}
             type="file"
             accept="image/*"
      />

      {errorPhotoMessage &&
        <span className="error">{errorPhotoMessage}</span>
      }

      <div className="header__addTags">
        <span>Choose tags: </span>
        {TAGS.map((item, index) => {
          return <label key={faker.datatype.uuid()}>
            <input type="checkbox"
                   ref={(node) => tagsRefs.current[index] = node}
                   name={item.name}/>
            {item.name}
          </label>
        })}
      </div>

      {errorTagsMessage &&
        <span className="error">{errorTagsMessage}</span>
      }

      <div className="header__addAuthor">
        <span>Choose author: </span>
        {AUTHORS.map((item, index) => {
          return <label key={faker.datatype.uuid()}>
            <input type="radio"
                   name="author"
                   value={item.name}
                   ref={(node) => authorsRefs.current[index] = node}
            />
            {item.name}
          </label>
        })}
      </div>

      {errorAuthorMessage &&
        <span className="error">{errorAuthorMessage}</span>
      }

      <button className="header__submit"
              type="submit"
              onClick={handleFormSubmit}
      >Add
      </button>

    </form>
  </div>
}