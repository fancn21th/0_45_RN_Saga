import React, { Component } from 'react';
import { Container, Header, Content, Toast, Button, Text } from 'native-base';
export default class ToastExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button onPress={()=> Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay'
          })}>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
