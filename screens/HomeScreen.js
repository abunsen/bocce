import React, {
  PropTypes,
} from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Welcome to
            </Text>

            <Image
              source={require('../assets/images/bocce_ball.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Tarantino Vineyards Bocce Ball
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/v8.0.0/guides/up-and-running.html#can-t-see-your-changes');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
  },
  welcomeImage: {
    width: 90,
    height: 90,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
