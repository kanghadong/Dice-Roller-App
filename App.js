import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';

import RollingButton from './RollingButton';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      uri: require('./src/images/dice1.png'),
      isLoading: false,
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  getNewDice = () => {
    let rNumber = this.getRandomValue();

    switch(rNumber) {
      case 1:
        this.setState({
          uri: require('./src/images/dice1.png'),
          isLoading: false
        });
        break;
      case 2:
        this.setState({
          uri: require('./src/images/dice2.png'),
          isLoading: false
        });
        break;
      case 3:
        this.setState({
          uri: require('./src/images/dice3.png'),
          isLoading: false
        });
        break;
      case 4:
        this.setState({
          uri: require('./src/images/dice4.png'),
          isLoading: false
        });
        break;
      case 5:
        this.setState({
          uri: require('./src/images/dice5.png'),
          isLoading: false
        });
        break;
      case 6:
        this.setState({
          uri: require('./src/images/dice6.png'),
          isLoading: false
        });
        break;
      default:
        this.setState({
          uri: require('./src/images/dice1.png'),
          isLoading: false
        });
        break;
    }
  };

  isRolling = () => {
    this.setState({ isLoading: true});
  };

  playButtonPressed = async () => {
    await this.isRolling();
    await setTimeout(this.getNewDice, 300);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={[styles.showDice, this.state.isLoading && styles.rolling]}
          source={this.state.uri} 
        />
        <RollingButton onPressed={this.playButtonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E74292',
  },
  showDice: {
    width: 300,
    height: 300,
  },
  rolling: {
    color: 'black',
    transform: [
      {scale: 0.3}
    ]
  }
});
