import React, { useState } from "react";
import "./Paginator.scss";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { DEFAULT_VALUES, ELEMENT_TEXT } from "../../shared/const";
import { useDispatch, useSelector } from "react-redux";
import { getImagesByNameInfo } from "../../redux/imagesList-reducer";

const PREVIOUS_NUMBER = 1;
const NEXT_NUMBER = 1;

const Paginator: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (store: any) => store.searchForm.searchTerm
  );
  const activePage = useSelector(
    (store: any) => store.imagesList.imagesInfoList.page
  );
  const allPagesCount = useSelector(
    (store: any) => store.imagesList.imagesInfoList.pages
  );

  const pages = [];

  for (let i = 1; i <= allPagesCount; i++) {
      pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);

  const portionCount = Math.ceil(allPagesCount / DEFAULT_VALUES.PAGES_PORTION);
  const leftPortionPageNumber = (portionNumber - PREVIOUS_NUMBER) * DEFAULT_VALUES.PAGES_PORTION + NEXT_NUMBER;
  const rightPortionPageNumber = portionNumber * DEFAULT_VALUES.PAGES_PORTION;

  const onPageChanged = (page: number): void => {
      dispatch(
        getImagesByNameInfo(searchTerm, page)
      );
  };

  return (
    <div className="Paginator">
      {portionNumber > 1 && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setPortionNumber(portionNumber - PREVIOUS_NUMBER)}
          startIcon={<ArrowBackIcon />}
        >
          {ELEMENT_TEXT.BACK}
        </Button>
      )}
      {ELEMENT_TEXT.PAGE}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              className={`${activePage === p && "selected-page"}`}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      <span> {ELEMENT_TEXT.OF} {allPagesCount}</span>
      {portionCount > portionNumber && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setPortionNumber(portionNumber + NEXT_NUMBER)}
          startIcon={<ArrowForwardIcon />}
        >
          {ELEMENT_TEXT.FORWARD}
        </Button>
      )}
    </div>
  );
};

export default Paginator;
