import styled from "styled-components"



export const AppStyle = styled.div`

    font-family: 'Hind Vadodara', sans-serif;  
    background-color: #ff7b54;  

`


export const HeaderStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    background-color: #fdffbc;
    
    a{
        text-decoration: none;
        color: black;
        padding: 5px 15px;
        background-color: orange;
        border: 2px solid red;
        border-radius: 10px;
        margin: 30px auto;
        font-size: 20px;
        text-align: center;
        width: 200px;
        

    }

`


export const ListStyle = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-items: center;

    div{
        display: grid;
        justify-content: center;
        text-align: center;
        border: 4px solid red;
        width: 200px;
        background-color: #fff3e6;
        border-radius: 20px;
        margin-top: 20px;

    img{
        width: 100px;
    }

    p{
        font-size: 23px;
        font-weight: 800;
        color: orange;
    }
        &.particular{
            display: grid;
            justify-content: center
        }
    }

`

export const AddStyle = styled.div`
    
display: grid;

form{

    display: grid;
    width: 300px;
    justify-self: center;
    input{
        padding: 10px;
        margin: 3px;
        border: 4px solid red;
        border-radius: 10px;
        background-color: #ffd56b;
        color: black;
        font-size: 20px;
        font-weight: 500;
    }
    button{
        padding: 15px 20px;
        border-radius: 10px;
    }
}

`

export const IdStyle = styled.div`
    

`
