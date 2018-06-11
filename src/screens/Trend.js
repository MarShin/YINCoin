import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';
import Sample from '../components/Sample';

class Trend extends Component {
  state = {
    active: 'First Item'
  };

  render() {
    const { active } = this.state;
    return (
      <ScrollView>
        <Image
          source={require('../images/trend.png')}
          style={{
            resizeMode: 'contain'
          }}
        />

        {/* <Card>
          <CardCover
            source={require('../images/trend.png')}
            style={{
              resizeMode: 'contain'
            }}
          />
        </Card> */}

        <Sample />
      </ScrollView>
    );
  }
}
export default Trend;
