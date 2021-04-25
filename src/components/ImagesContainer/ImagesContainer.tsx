import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ImagesContainer.scss";
import { addBookmark, removeBookmark } from "../../redux/bookmarks-reducer";
import { Route } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import { IImageData } from "../../shared/interfaces";
import { ELEMENT_TEXT } from "../../shared/const";

const ImagesContainer: React.FC = () => {
  const imagesData = useSelector(
    (store: any) => store.imagesList.imagesInfoList
  );
  const bookmarksList = useSelector(
    (store: any) => store.bookmarks.bookmarksList
  );

  const dispatch = useDispatch();

  const handleAddButtonClick = (imageSrcPath: string) => {
    dispatch(addBookmark(imageSrcPath));
  };

  const handleRemoveButtonClick = (imageSrcPath: string) => {
    dispatch(removeBookmark(imageSrcPath));
  };

  return (
    <div className="ImagesContainer">
      <Route exact path="/">
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
      <Route exact path="/bookmarks">
        {bookmarksList.map((imageElSrc: string):JSX.Element | undefined => {
          if (imageElSrc) {
            return (
              <ImageCard
                key={imageElSrc}
                imageSrcPath={imageElSrc}
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
