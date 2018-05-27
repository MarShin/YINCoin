import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { me } from '../config/data';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem title="電郵" rightTitle={this.props.email} />
          <ListItem title="手機號碼" rightTitle={this.props.phone} />
          <ListItem title="密碼設置" />
          <ListItem title="指紋保護" />
          <ListItem title="隱私設置" />
          <ListItem title="語言" />
        </List>

        <List>
          <ListItem title="關於" />
        </List>

        <List>
          <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} />
        </List>
      </ScrollView>
    );
  }
}

Settings.defaultProps = { ...me };

export default Settings;
