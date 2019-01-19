import React from 'react';
import { GlobalStyle, Container, Banner, Title, ClickMe } from './styles.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: null,
      colors: { basic: 'white' }
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Banner>
          <Title>Styles</Title>
        </Banner>
        <ClickMe data-color={this.state.colors}>Click me</ClickMe>
      </Container>
    );
  }
};

