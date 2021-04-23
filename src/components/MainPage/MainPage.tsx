import React from "react";
import { useSelector } from "react-redux";

const MainPage: React.FC = () => {
  const imagesData = useSelector(
    (store: any) => store.imagesList.imagesInfoList
  );
  
  return (
    <div>
      MainPage Component
      {imagesData.page ? imagesData.photo.map((imageEl: any) => {
        const imageSrcPath = `https://farm${imageEl.farm}.staticflickr.com/${imageEl.server}/${imageEl.id}_${imageEl.secret}.jpg`;
        
        if (imageSrcPath) {
          return (
            <img key={imageEl.id} src={imageSrcPath} alt={imageEl.id}></img>
          );
        }
      }) : 'No images'}
    </div>
  );
};

export default MainPage;
