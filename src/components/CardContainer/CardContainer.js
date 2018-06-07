import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph,
  FABGroup
} from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class CardContainer extends Component {
  state = {
    open: false,
    isFocused: false
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <CardContent>
            <Title>水舞间</Title>
            <Paragraph>感受水舞澎湃，兼享环球美馔‎</Paragraph>
          </CardContent>
          <CardCover source={require('../../images/home_placeholder1.png')} />
        </Card>
        <Card>
          <CardContent>
            <Title>阿尔乔姆水晶虎宫殿</Title>
            <Paragraph>不一样的旅游体验‎</Paragraph>
          </CardContent>
          <CardCover source={require('../../images/home_placeholder2.png')} />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fabContainer: {
    marginHorizontal: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'blue',
    color: 'red'
  }
});

export default withNavigation(CardContainer);
