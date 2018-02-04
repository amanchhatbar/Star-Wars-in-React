import React from 'react';
import {Table} from 'react-bootstrap';
import {CustomDialog} from '../StarWarsHomePage/CustomDialog';
import Attack_of_the_Clones from '../../Images/Attack_of_the_Clones.jpg';
import A_New_Hope from '../../Images/A_New_Hope.jpg';
import Return_of_the_Jedi from '../../Images/Return_of_the_Jedi.jpg';
import Revenge_of_the_Sith from '../../Images/Revenge_of_the_Sith.jpg';
import The_Empire_Strikes_Back from '../../Images/The_Empire_Strikes_Back.jpg';
import The_Force_Awakens from '../../Images/The_Force_Awakens.jpg';
import The_Phantom_Menace from '../../Images/The_Phantom_Menace.jpg';
import {Link} from 'react-router-dom';

export default class MovieTitleDialog extends React.Component{
    
    getTitleForImage(id){
        var value = "";
        switch(id){
            case 1: value = The_Phantom_Menace;
            break;
            case 2: value = Attack_of_the_Clones;
            break;
            case 3: value = Revenge_of_the_Sith;
            break;
            case 4: value = A_New_Hope;
            break;
            case 5: value = The_Empire_Strikes_Back;
            break;
            case 6: value = Return_of_the_Jedi;
            break;
            case 7: value = The_Force_Awakens;
            break;
            default: "none";
            break;
        }
        return value;
    }

    render(){
        
        return (
            <div className="row"> 
            <div className = ".col-md-2" style={{float:'left'}}>
            <img className = {'imgTitle'} src = {this.getTitleForImage(this.props.starWarsSingleValues.id)} />
            </div>
            <div className = ".col-md-10">
                <div ><strong>Title:</strong> {this.props.starWarsSingleValues.title}</div>
                <div ><strong>Director:</strong> {this.props.starWarsSingleValues.director}</div>
                <div ><strong>Main Characters:</strong></div>
                <div >
                {this.props.starWarsSingleValues.opening_crawl}</div>
            </div> 
            </div>
        );      
    }
}