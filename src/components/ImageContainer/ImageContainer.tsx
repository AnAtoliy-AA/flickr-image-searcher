import React from "react";
import { useSelector } from "react-redux";

const ImageContainer: React.FC = () => {
  const imagesData = useSelector(
    (store: any) => store.imagesList.imagesInfoList
  );
  return (
    <div>
      {imagesData.page
        ? imagesData.photo.map((imageEl: any) => {
            const imageSrcPath = `https://farm${imageEl.farm}.staticflickr.com/${imageEl.server}/${imageEl.id}_${imageEl.secret}.jpg`;

            if (imageSrcPath) {
              return (
                <img key={imageEl.id} src={imageSrcPath} alt={imageEl.id}></img>
              );
            }
          })
        : "TODO No images"}
    </div>
  );
};

export default ImageContainer;
