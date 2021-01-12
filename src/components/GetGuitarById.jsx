import React from "react";
import axios from "axios";


import { IdStyle } from "../style/styled";

export default class GetGuitarById extends React.Component {

    state = {
        guitar: []
    }

    

    onChangeIdGuitar = (e) => {
        this.setState({
            idGuitar: e.target.value
        });
    };

    onSubmitGuitar = async (e) => {
        const response = await axios.get(`/guitar/getbyid`, {
            idGuitar: this.state.idGuitar,
        }).then(responses => {
            console.log(responses.data)
        });
        this.setState({
            typeGuitar: '',
        });
    }


    render() {
        return (
            <IdStyle>
                <form onSubmit={this.onSubmitGuitar}>
                    <input
                        type="text"
                        name="idGuitar"
                        placeholder="ID Guitar"
                        onChange={this.onChangeIdGuitar} />
                    <button type="submit">FIND BY ID</button>    
                </form>
            </IdStyle>
        )
    }
}