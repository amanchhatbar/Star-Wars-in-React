import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';
import StarWarsCardDisplay from '../StarWarsCard/StarWarsCardDisplay';
import StarWarsLoading from '../LoadingStarWars';
import StarWarsDisplayPic from '../../Images/StarWarsDisplayPic.jpg';
import {DataGrid} from 'primereact/components/datagrid/DataGrid.js';
import {Panel} from 'primereact/components/panel/Panel';
import './style.css';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Button} from 'primereact/components/button/Button';
import {Chart} from 'primereact/components/chart/Chart';
import {CustomDialog} from './CustomDialog';
import MovieTitleDialog from '../StarWarsMovieTitleDialog/MovieTitleDialog';

class StarWarsHomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          testing:10,
          visible:false,
          titleDialogVisible: false,
          titleVisible:false,
          starWarsSingleValue:[],
          StarMoviesTitle:[]          
        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onHideTitleDialog = this.onHideTitleDialog.bind(this);
    }
    componentDidMount(){
        this.callLoadStarWarsList();
    }

    callLoadStarWarsList(){
        this.props.actions.loadStarWarsListRequest({            
            apiUrl: 'https://swapi.co/api/films'
        });
    }

   

    displayStarWarsList(starWarsList){
        return(
            <StarWarsCardDisplay starwarslist = {starWarsList} movieTitleDialog = {this.movieTitleDialog}/>
        );
    }

    displayPanelFavouriteCharacter(){
        return(
            <div style={{"padding-bottom": "15px"}}>
        <Panel header = "Favorite Character " className = 'ui-panel'>
            <h2> Han Solo </h2>
            It's the galaxy's most notorious response to a proclamation of amore, 
            but Han Solo is far more than a smug swashbuckler.             
        </Panel>
        </div>
        );
    }

    displayPanelLeastFavouriteCharacter(){
        return(
            <div style={{"padding-bottom": "15px"}}>
        <Panel header = "Least Favorite Character " className = 'ui-panel'>
            <h2> Jar Jar Binks </h2>
            His borderline racially insensitive manner of speaking, combined with his awkwardly executed comedic relief in 
            The Phantom Menace are enough to doom him to obscurity
        </Panel>
        </div>
        );
    }
    onClick(event) {
        this.setState({visible: true});
        //this.setState({titleDialogVisible : true});
    }

    onHide(event) {
        this.setState({visible: false});
    }

    onHideTitleDialog(event) {
        this.setState({titleDialogVisible: false});
    }
    showModal(){
        return (
        <Panel header = "Least Favorite Character " className = 'ui-panel'>
            alert("true")
        </Panel>
        );
    }

    printResults(){
        if(this.props.starWarsList){        
        return (      
            <div className = "ui-g">
                <div className="ui-g-12 ui-md-2">{this.displayPanelFavouriteCharacter()}
                {this.displayPanelLeastFavouriteCharacter()}
                <Panel header = "Opening Crawl length " className = 'ui-panel'>
                <Button label="Show Graph" onClick={this.onClick} />
                </Panel>
                {/* <Chart type="bar" data={this.chartDisplayValues(this.props.starWarsList)} />  */}
                </div>                
                <div className="ui-g-12 ui-md-10 ui-g-nopad">                            
                            <div className="ui-g-12">                                
                                <DataGrid value = {this.props.starWarsList} itemTemplate = {this.displayStarWarsList.bind(this)} />                                    
                                </div>                                
                            </div>
                        </div>                        
        );
        }
    }
    chartDisplayValues(starWarsList){        
        if(this.props.starWarsList)  {
            let data = {
                labels: [this.props.starWarsList[0].title, 
                this.props.starWarsList[1].title, 
                this.props.starWarsList[2].title, 
                this.props.starWarsList[3].title, 
                this.props.starWarsList[4].title, 
                this.props.starWarsList[5].title, 
                this.props.starWarsList[6].title],
                datasets: [
                    {
                        label: 'Star Wars Crawl Length',
                        data: [this.props.starWarsList[0].opening_crawl.length, 
                        this.props.starWarsList[1].opening_crawl.length, 
                        this.props.starWarsList[2].opening_crawl.length, 
                        this.props.starWarsList[3].opening_crawl.length, 
                        this.props.starWarsList[4].opening_crawl.length, 
                        this.props.starWarsList[5].opening_crawl.length, 
                        this.props.starWarsList[6].opening_crawl.length],
                        // fill: false,
                        borderColor: '#4bc0c0'
                    },                   
                ]   
            };
            return <Chart type="bar" data={data} />               
        }
    }

    movieTitleDialog = (starWarSingle) => {
        this.setState(
            {
                starWarsSingleValue: starWarSingle,
                titleDialogVisible : true,
                StarMoviesTitle: starWarSingle.title
            });
    }

    StarWarsListTitleDisplay(){
        if(this.state.starWarsSingleValue)  {
           return <MovieTitleDialog starWarsSingleValues = {this.state.starWarsSingleValue}/> 
        }
        return null;
    }
    render()
    {
        let footer = <div>       
        <Button label="Close" onClick={this.onHide} />
        </div>;
        let displayTitleFooter = <div>
            <Button label = "Close" onClick = {this.onHideTitleDialog} />
        </div>
        return(
            <div>                      
                {this.printResults()}
                <StarWarsLoading show = {this.props.loading} />
                <CustomDialog header="Star Wars Crawl Length Per Movie" visible={this.state.visible} width="1000px" modal={true} footer={footer} onHide={this.onHide}>
                   <div> {this.chartDisplayValues()} </div>
                </CustomDialog>
                <CustomDialog header={this.state.StarMoviesTitle} visible={this.state.titleDialogVisible} width="1000px" modal={true} onHide={this.onHideTitleDialog} footer ={displayTitleFooter}>
                   <div>{this.StarWarsListTitleDisplay()}</div>
                </CustomDialog>
            </div>
        );
    }
}

function mapStateToProps(state){
    let StarWarsHomePageReducer = state.get("starWarsHomePageReducer");

    return{
        starWarsList : StarWarsHomePageReducer.get('StarWarsList'),
        loading: state.get('starWarsLoadingReducer') > 0
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsHomePage)
