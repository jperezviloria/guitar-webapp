import React from "react";
import axios from "axios";

import { ListStyle } from "../style/styled";


 export default class ListGuitar extends React.Component{

     state = {
         guitar: [],
     }

     componentDidMount(){
         axios.get(`/guitar/getall`)
         .then(response => {
             console.log(response);
             if(response.status )
             this.setState({ guitar: response.data});
         });
     }

     render(){
         return (
            <ListStyle>
                
            {
                this.state.guitar.map(particularGuitar =>
                    //the condition will here to show only the enable works 

                    <div className="particular">
                        <img href="https://static.vecteezy.com/system/resources/previews/001/206/378/non_2x/cute-music-icon-guitar-png.png"/>
                         <h3>{particularGuitar.typeGuitar}</h3>
                        <p>{particularGuitar.brandGuitar}</p>
                        <p>{particularGuitar.priceGuitar}</p>
                    </div>
                )
            }
        </ListStyle>
         )
     }


 }