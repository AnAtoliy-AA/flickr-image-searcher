import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesByNameInfo } from "../../redux/imagesList-reducer";
import { DEFAULT_VALUES, ELEMENT_TEXT } from "../../shared/const";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(DEFAULT_VALUES.EMPTY);
  const activePage = useSelector( 
    (store: any) => store.imagesList.page
  )

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (searchTerm) {
      dispatch(getImagesByNameInfo(searchTerm, activePage || DEFAULT_VALUES.FIRST_PAGE));
    }
  };

  return (
    <div>
      SearchForm Component
      <form onSubmit={handleOnSubmit}>
        <input value={searchTerm} onChange={handleOnInputChange}></input>
        {/* <button type="submit">{ELEMENT_TEXT.SUBMIT}</button> */}
      </form>
    </div>
  );
};

export default SearchForm;
