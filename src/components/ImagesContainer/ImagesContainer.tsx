import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ImagesContainer.scss";
import { addBookmark, removeBookmark } from "../../redux/bookmarks-reducer";
import { Route } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import { IImageData } from "../../shared/interfaces";
import { ELEMENT_TEXT, ROUTE_NAMES_BOOKMARKS, ROUTE_NAMES_MAIN } from "../../shared/const";
import Loader from "../Loader/Loader";

const ImagesContainer: React.FC = () => {
  const imagesData = useSelector(
    (store: any) => store.imagesList.imagesInfoList
  );
  const bookmarksList = useSelector(
    (store: any) => Object.values(store.bookmarks.bookmarksList)
  );
  const isLoading = useSelector(
    (store: any) => store.imagesList.isLoading
  );

  const dispatch = useDispatch();

  const handleAddButtonClick = (imageSrcPath: string, imageTitle: string, tagInputValue: string) => {
    dispatch(addBookmark(imageSrcPath, imageTitle, tagInputValue));
  };

  const handleRemoveButtonClick = (imageSrcPath: string) => {
    dispatch(removeBookmark(imageSrcPath));
  };

  return (
    <div className="ImagesContainer">
      {isLoading && <Loader />}
      <Route exact path={`/${ROUTE_NAMES_MAIN}`}>
        {imagesData.page
          ? imagesData.photo.map((imageEl: IImageData) => {
            //TODO
              const imageSrcPath = `https://farm${imageEl.farm}.staticflickr.com/${imageEl.server}/${imageEl.id}_${imageEl.secret}.jpg`;

              if (imageSrcPath) {
                return (
                  <ImageCard
                    key={imageEl.id}
                    imageSrcPath={imageSrcPath}
                    imageTitle={imageEl.title}
                    handleAddButtonClick={handleAddButtonClick}
                    handleRemoveButtonClick={handleRemoveButtonClick}
                  />
                );
              }
            })
          : `${ELEMENT_TEXT.EMPTY_IMAGE_CONTAINER}`}
      </Route>
      <Route exact path={`/${ROUTE_NAMES_BOOKMARKS}`}>
        {bookmarksList.map((imageEl: any):JSX.Element | undefined => {
          if (imageEl) {
            return (
              <ImageCard
                key={imageEl}
                imageSrcPath={imageEl.bookmark}
                imageTitle={imageEl.imageTitle}
                userTags={imageEl.tagValue}
                handleAddButtonClick={handleAddButtonClick}
                handleRemoveButtonClick={handleRemoveButtonClick}
              />
            );
           }
        })}
      </Route>
    </div>
  );
};

export default ImagesContainer;
