import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ListView,
} from 'react-native';
import Button from 'react-native-button';
import { capitalizeFirstLetter } from '../utilities/helpers';

export default class NewGameScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Create a New Game',
    },
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleStartPress() {
    console.log(`Red Team: ${this._redTeam.state.playerNames}`);
    console.log(`Green Team: ${this._greenTeam.state.playerNames}`);
  }

  render() {
    return (
      <View
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <AddTeamMembers
          color="red"
          ref={component => this._redTeam = component}/>
        <AddTeamMembers
          color="green"
          ref={component => this._greenTeam = component}/>
        <Button
          style={styles.startButton}
          containerStyle={styles.startButtonContainer}
          styleDisabled={styles.disabledStartButton}
          onPress={() => this._handleStartPress()}>
          Start Game!
        </Button>
      </View>
    );
  }
}

class AddTeamMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNames: [],
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.teamNameText}>
          Team {capitalizeFirstLetter(this.props.color)}
        </Text>
        <TextInput
          ref={component => this._textInput = component}
          style={{height: 80}}
          autoCapitalize="words"
          returnKeyType="done"
          placeholder={`Add player to Team ${this.props.color}`}
          onSubmitEditing= {(event) => {
            this._textInput.clear();
            const name = event.nativeEvent.text;
            let players = this.state.playerNames.concat([name]);
            this.setState({
              playerNames: players,
              dataSource: this.state.dataSource.cloneWithRows(players),
            });
          }}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  teamNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButtonContainer: {
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'green',
  },
  startButton: {
    fontSize: 20,
    color: 'white',
  },
  disabledStartButton: {
    color: 'red',
  },
});
