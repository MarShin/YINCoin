import PropTypes from 'prop-types';
import * as React from 'react';
import DropdownAlert from 'react-native-dropdownalert';

type Props = {
  children: React.Node
};

class AlertProvider extends React.Component<Props> {
  static get childContextTypes() {
    return {
      alertWithType: PropTypes.func,
      alert: PropTypes.func
    };
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args)
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </React.Fragment>
    );
  }
}

export default AlertProvider;
