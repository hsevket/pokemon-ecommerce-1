import styled from "styled-components";
import {useState} from "react";
// import {Link } from "react-router-dom";

const InputWrapper = styled.form`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  input {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
  }
  button{
    background-color: black;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
    a {
      color: white;
      text-decoration: none;
    }
    &:hover{
      background-color: gray;
      
    }
  }
`;


export function Checkout() {
const [name, setName] = useState();
const [surname, setSurname] = useState();
const [address, setAddress] = useState();
const [credit, setCredit] = useState();

  return <div>
    <InputWrapper action="/order-completed" >
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input type="text" placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)}/>
      <input type="number" placeholder="Credit Card Number" value={credit} onChange={(e) => setCredit(e.target.value)}/>
      <button type="submit" onClick={() => {
        const user = {name: name || '', surname: surname || '', credit: credit|| '', address: address|| '' };
        localStorage.setItem('user', JSON.stringify(user));
      }}>Place Order</button>
    </InputWrapper>
  </div>
  
}
