/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Rooter from './src/Rooter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Rooter);
