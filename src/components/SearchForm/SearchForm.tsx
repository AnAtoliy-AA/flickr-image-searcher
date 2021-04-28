import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { getImagesByNameInfo } from "../../redux/imagesList-reducer";
import { setSearchFormTerm } from "../../redux/searchForm-reducer";
import { DEFAULT_VALUES } from "../../shared/const";
import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((store: any) => store.searchForm.searchTerm);

  const debouncedSearchTerm = useDebounce(
    searchTerm,
    DEFAULT_VALUES.SEARCH_DELAY_TIME
  );
  const activePage = useSelector(
    (store: any) => store.imagesList.imagesInfoList.page
  );
  const isLoading = useSelector((store: any) => store.imagesList.isLoading);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(
        getImagesByNameInfo(searchTerm, activePage || DEFAULT_VALUES.FIRST_PAGE)
      );
    }
  }, [activePage, debouncedSearchTerm, dispatch, searchTerm]);

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    dispatch(setSearchFormTerm(searchValue));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (searchTerm) {
      dispatch(
        getImagesByNameInfo(searchTerm, activePage || DEFAULT_VALUES.FIRST_PAGE)
      );
    }
  };

  return (
    <form className="SearchForm" onSubmit={handleOnSubmit}>
      <input
        className="SearchInput"
        value={searchTerm}
        onChange={handleOnInputChange}
      ></input>
      {isLoading && <div>Searching ...</div>}
    </form>
  );
};

export default SearchForm;
