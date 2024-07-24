import React from "react";
import { Button, ActiveButton, CommonButton, CommonButtonTwo, Rotate} from './stateStyle'
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props)=> props.theme.bg};
    color: ${(props) => props.theme.cl};
  }
`;

class Provider extends React.Component{
  state = {
    light: true,
  };

  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? 'black' : 'white',
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <h1>Theme Provider</h1>
        <Button>Click me</Button>
        <ActiveButton>Active Button</ActiveButton>
        <CommonButton>CommonButton</CommonButton>
        <CommonButtonTwo>CommonButtonTwo</CommonButtonTwo>
        <Rotate>Rotate</Rotate>
        <br /> <br />
        <button onClick={() => this.setState({ light: !this.state.light})}>Change theme</button>
      </ThemeProvider>
      )
  }
}


export default Provider