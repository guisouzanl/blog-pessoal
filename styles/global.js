import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html,body, #root{
    min-height:100px;
  }

  body{
    background: #EEEEEE;
    -webkit-font-smoothing: antialiased !important;
  }

  body,input,button{
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap');
    font-family: 'Roboto', sans-serif;

  }

  h1{
    font-weight:700;
    line-height:40px;
    color: #555;
  }

  h2{
    font-weight:700;
    line-height:30px;
    color: #555;
  }

  p{
    font-weight: 100;
    color: #000000cc;
    line-height:28px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #555;
    transition: all 01s ease 0s;

    &:hover{
      color: #383d41;
    }
  }
  `;
