import React, {useEffect}from 'react'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link, useRouteMatch, Route} from 'react-router-dom'
import ViewHouse from "../../pages/ViewHouse"

export default function ResultCard(props) {
  


  let { path, url } = useRouteMatch();



    return (
        <Card style={{width: "90%", marginTop: "10px"}}>
        <CardActionArea>
          <CardMedia
            style={{width: "100%", height: "300px"}}
            image={props.item.picture_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", justifyContent:"space-between"}}>
    <p>{props.item.price_formatted}</p>
          <Link to={`${url}/viewHouse/${props.index}`}>
            Learn More
          </Link>
        </CardActions>
      </Card>
    )
}
