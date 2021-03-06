import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { bounce } from 'react-animations';

const CourseAdditionalInformation = ({ originalPrice, discountedPrice, imageUrl }) => {

  return (
    <>
      <Button color="error" size="large" variant="contained">Enroll Now</Button>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Today's price: {discountedPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Original price: {originalPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CourseAdditionalInformation