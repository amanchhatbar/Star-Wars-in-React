import React from 'react';
import './style.css';
import StarWarsDisplayPic from '../../Images/StarWarsDisplayPic.jpg'
import DeathStar from '../../Images/DeathStar.jpg'
import nightsky from '../../Images/night-sky.jpg'
import {Image} from 'react-bootstrap';

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
      type="text/css" rel="stylesheet" />


export default function StarWarsLoading({show}){
    if(!show){
        return null;
    }
    return(
        <div className = "loading">            
            <div className = "loading-indicator"> <Image className = "imgClass"src ={DeathStar} circle/></div>            
        </div>
    )
}




