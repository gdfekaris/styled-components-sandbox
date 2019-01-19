import React from 'react';
import { GlobalStyle, Container, Banner, Title, ClickMe } from './styles.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: null,
      colors: { brightColor: '#fdff03', shadow: '#F5F711' }
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Banner>
          <Title></Title>
        </Banner>
        <ClickMe></ClickMe>
      </Container>
    );
  }
};

