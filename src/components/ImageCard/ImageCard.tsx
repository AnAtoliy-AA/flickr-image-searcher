import React from "react";
import { Route } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "./ImageCard.scss";
import { ELEMENT_TEXT } from "../../shared/const";

type TProps = {
  imageSrcPath: string;
  handleAddButtonClick: any;
  handleRemoveButtonClick: any;
  imageTitle?: string;
};

const ImageCard: React.FC<TProps> = ({
  imageSrcPath,
  imageTitle,
  handleAddButtonClick,
  handleRemoveButtonClick,
}) => {
  return (
    <Card className="ImageCard">
      <CardActionArea>
        <CardMedia component="img" height="180" image={imageSrcPath} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {imageTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Route exact path="/">
          <Button
            size="small"
            color="primary"
            onClick={() => handleAddButtonClick(imageSrcPath)}
          >
            {ELEMENT_TEXT.ADD_BUTTON}
          </Button>
        </Route>
        <Route exact path="/bookmarks">
          <Button
            size="small"
            color="primary"
            onClick={() => handleRemoveButtonClick(imageSrcPath)}
          >
            {ELEMENT_TEXT.REMOVE_BUTTON}
          </Button>
        </Route>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
