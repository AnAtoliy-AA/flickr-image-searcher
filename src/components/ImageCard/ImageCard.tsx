import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from "@material-ui/core";
import "./ImageCard.scss";
import { DEFAULT_VALUES, ELEMENT_TEXT, ROUTE_NAMES_BOOKMARKS, ROUTE_NAMES_MAIN } from "../../shared/const";
import { Title } from "@material-ui/icons";

type TProps = {
  imageSrcPath: string;
  handleAddButtonClick: any;
  handleRemoveButtonClick: any;
  imageTitle?: string;
  userTags?: string;
};

const ImageCard: React.FC<TProps> = ({
  imageSrcPath,
  imageTitle,
  handleAddButtonClick,
  handleRemoveButtonClick,
  userTags,
}) => {
  const [tagInputValue, setTagInputValue] = useState(DEFAULT_VALUES.EMPTY);

  const handleTagInputChange = (event: any) => {
    setTagInputValue(event.currentTarget.value);
  }

  return (
    <Card className="ImageCard">
      <CardActionArea>
        <CardMedia component="img" height="180" image={imageSrcPath} title={imageTitle}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {imageTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="CardActionsContainer">
        <Route exact path={`/${ROUTE_NAMES_MAIN}`}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => handleAddButtonClick(imageSrcPath, imageTitle, tagInputValue)}
          >
            {ELEMENT_TEXT.ADD_BUTTON}
          </Button>
          <Input placeholder={ELEMENT_TEXT.WRITE_TAGS} onChange={handleTagInputChange}/>
        </Route>
        <Route exact path={`/${ROUTE_NAMES_BOOKMARKS}`}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => handleRemoveButtonClick(imageSrcPath)}
          >
            {ELEMENT_TEXT.REMOVE_BUTTON}
          </Button>
          <Typography gutterBottom variant="h5" title={userTags}  noWrap={true}>
            {userTags}
          </Typography>
        </Route>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
