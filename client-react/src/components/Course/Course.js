import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Course.css'

const useStyles = makeStyles({
  container: {},
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },

})

const Course = ({
  id,
  name,
  description,
  author,
  rating,
  reviewCount,
  originalPrice,
  discountedPrice,
  isPaid,
  isBestSeller,
  imageUrl,
}) => {

  const classes = useStyles()
  const history = useHistory()

  const onCourseComponentClick = () => {
    history.push('/course')
  }

  return (
    <div classeName="container">
      <Card className={[classes.root]} onClick={onCourseComponentClick}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="button" size="small">
            Rating: {rating}/5
          </Button>
          <Button className="button" size="small">
            Price: <del>{originalPrice}</del>
            {discountedPrice}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
export default Course
