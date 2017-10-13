import React from 'react';
import {Table} from 'react-bootstrap';
import './style.css';
import {Panel} from 'primereact/components/panel/Panel';
import Attack_of_the_Clones from '../../Images/Attack_of_the_Clones.jpg';
import A_New_Hope from '../../Images/A_New_Hope.jpg';
import Return_of_the_Jedi from '../../Images/Return_of_the_Jedi.jpg';
import Revenge_of_the_Sith from '../../Images/Revenge_of_the_Sith.jpg';
import The_Empire_Strikes_Back from '../../Images/The_Empire_Strikes_Back.jpg';
import The_Force_Awakens from '../../Images/The_Force_Awakens.jpg';
import The_Phantom_Menace from '../../Images/The_Phantom_Menace.jpg';

import {Image} from 'react-bootstrap';

export default class StarWarsCardDisplay extends React.Component{

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
        return(
            
                <div className="ui-g-6 ui-md-3"> 
                <div><img className = {'img'} src = {this.getTitleForImage(this.props.starwarslist.id)} /></div>
                <div><strong>Title:</strong> {this.props.starwarslist.title}</div>
                <div><strong>Director:</strong> {this.props.starwarslist.director}</div>
                <div><strong>Main Characters:</strong></div>
                <div>1){this.props.starwarslist.character1}</div>
                <div>2){this.props.starwarslist.character2}</div>
                <div>3){this.props.starwarslist.character3}</div>
                </div>
            
                              
        );
    }
}
