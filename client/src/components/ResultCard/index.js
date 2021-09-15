import React from 'react'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CACHED_RESULTS } from '../../gql/querys';
import {useQuery} from "@apollo/client"
export default function ResultCard(props) {
    const {data, loading, error} = useQuery(CACHED_RESULTS)
    console.log(data)




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
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}
