import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import NewGameScreen from '../screens/NewGameScreen';
import RulesScreen from '../screens/RulesScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  new_game: () => NewGameScreen,
  rules: () => RulesScreen,
  rootNavigation: () => RootNavigation,
}));
