import React from 'react';
import Cards from '../ui/cards';
import classes from './MeetupItem.module.css'

const MeetupItem = (props) => {
    console.log(props);
  return (
    <li className={classes.item}>
        <Cards>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>  
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3> 
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favourites</button>
            </div>
        </Cards>
    </li>
  )
}

export default MeetupItem;