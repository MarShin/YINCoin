import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button title="設定" buttonStyle={{ marginTop: 20 }} onPress={this.handleSettingsPress} />

        <List>
          <ListItem title="消費紀錄" />
          <ListItem title="信用卡管理" />
          <ListItem title="餘額增值 / 直接買幣功能" />
          <ListItem title="客服" />
          <ListItem title="身分認證" />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
