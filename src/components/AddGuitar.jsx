import React from "react";
import axios from "axios";


import { AddStyle} from "../style/styled";

export default class AddGuitar extends React.Component {

    state = {
        guitar: []
    }

    

    onChangeTypeGuitar = (e) => {
        this.setState({
            typeGuitar: e.target.value
        });
    };

    onChangeBrandGuitar = (e) => {
        this.setState({
            brandGuitar: e.target.value
        });
    };

    onChangePriceGuitar = (e) => {
        this.setState({
            priceGuitar: e.target.value
        });
    };

    onSubmitGuitar = async (e) => {
        const response = await axios.post(`/guitar`, {
            typeGuitar: this.state.typeGuitar,
            brandGuitar: this.state.brandGuitar,
            priceGuitar: this.state.priceGuitar,
        });
        this.setState({
            typeGuitar: '',
            brandGuitar: '',
            priceGuitar: '',
            
        });
    }


    render() {
        return (
            <AddStyle>
                <form onSubmit={this.onSubmitGuitar}>
                    <input
                        type="text"
                        name="typeGuitar"
                        placeholder="Type Guitar"
                        onChange={this.onChangeTypeGuitar} />
                    <input
                        type="text"
                        name="brandGuitar"
                        placeholder="Brand"
                        onChange={this.onChangeBrandGuitar} />
                        
                    <input
                        type="number"
                        name="priceGuitar"
                        placeholder="Price"
                        onChange={this.onChangePriceGuitar} />
                    <button type="submit">SAVE FORM</button>    
                </form>
            </AddStyle>
        )
    }
}