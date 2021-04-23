import React from "react";
import "./ImageCard.scss";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Route } from "react-router-dom";

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
    <Card
      className="ImageCard"
      // key={imageEl.id}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={imageSrcPath}
        />
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
            ADD
          </Button>
        </Route>
        <Route exact path="/bookmarks">
          <Button
            size="small"
            color="primary"
            onClick={() => handleRemoveButtonClick(imageSrcPath)}
          >
            RRR
          </Button>
        </Route>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
