import React, {useRef} from "react";
import "../Filter/Filter.scss"
import {AUTHORS} from "../../../myData";
import {TAGS} from "../../../myData";
import faker from "faker";

export function Filter(props) {
  const {setSearchText, setSearchAuthor, setSearchTags} = props;

  const inputValue = useRef('');
  const authorsForFilterRefs = useRef([]);
  const tagsForFilterRefs = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let checkedTags = tagsForFilterRefs.current.filter(tag => tag.checked);
    if (checkedTags.length > 0) {
      setSearchTags(checkedTags.map(i => i.name))
    } else {
      setSearchTags([]);
    }

    let checkedAuthor = authorsForFilterRefs.current.filter(author => author.checked);
    if (checkedAuthor.length > 0) {
      setSearchAuthor(checkedAuthor[0].value);
    } else {
      setSearchAuthor(null);
    }
    setSearchText(inputValue.current.value);
    inputValue.current.value = '';
  }

  const handleDiscard = () => {
    inputValue.current.value = '';
    setSearchText(inputValue.current.value);
    setSearchAuthor(null);
    setSearchTags([]);
  }

  //------------------------------------------------------RETURN-------------------------------------------//

  return <div className="header__filter">
    <form className="header__filterForm"
          onSubmit={(event) => handleSubmit(event)}>
      <input className="header__filterInputForSearch"
             type="text"
             ref={inputValue}
             placeholder="Enter text to find it!"/>
      <button type='submit'
              className="header__filterButton"
      >Search
      </button>
      <button type="reset"
              onClick={handleDiscard}
              className="header__cancelFilterButton"
      >Discard
      </button>
    </form>
    {AUTHORS.map((item, index) => {
      return <label key={faker.datatype.uuid()}>
        <input type="radio"
               ref={((author) => authorsForFilterRefs.current[index] = author)}
               name="author"
               value={item.name}
        />
        {item.name}
      </label>
    })}
    <br/>
    <br/>
    {TAGS.map((item, index) => {
      return <label key={faker.datatype.uuid()}>
        <input type="checkbox"
               ref={(node) => tagsForFilterRefs.current[index] = node}
               name={item.name}/>
        {item.name}
      </label>
    })}

  </div>
}