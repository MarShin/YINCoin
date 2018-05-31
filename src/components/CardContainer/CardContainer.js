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

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.setState({ isFocused: true });
    });
    this.props.navigation.addListener('willBlur', () => {
      this.setState({ isFocused: false });
    });
  }

  render() {
    const FAB = (
      <FABGroup
        style={styles.fabContainer}
        open={this.state.open}
        icon={this.state.open ? 'phone' : 'add'}
        label="Email"
        actions={[
          { icon: 'email', label: 'Email', onPress: () => {} },
          { icon: 'notifications', label: 'Remind', onPress: () => {} }
        ]}
        onStateChange={({ open }) => this.setState({ open })}
        onPress={() => {
          if (this.state.open) {
            // do something if the speed dial is open
            console.log('specifically press phone button');
          }
        }}
      />
    );

    return (
      <ScrollView style={styles.container}>
        <Card>
          <CardContent>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </CardContent>
          <CardCover source={{ uri: 'https://picsum.photos/300' }} />
          <CardActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </CardActions>
        </Card>
        <Card>
          <CardContent>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </CardContent>
          <CardCover source={{ uri: 'https://picsum.photos/400' }} />
          <CardActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </CardActions>
        </Card>
        {/* {this.state.isFocused ? FAB : null} */}
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
