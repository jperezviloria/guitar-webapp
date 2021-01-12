import React from "react"
import {HeaderStyle} from "../style/styled"


export default class HeaderComponent extends React.Component{


    render(){
        return(
            <HeaderStyle>
                <a href="/">List Guitars</a>
                <a href="/addguitar">Add Guitar</a>
                <a href="/getguitarbyid">Find by Id</a>
            </HeaderStyle>
        )
    }
}