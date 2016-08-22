import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';

export default class NewGameScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Create a New Game'
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
