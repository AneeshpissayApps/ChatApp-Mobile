/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import StorePersist from './StorePersist';

AppRegistry.registerComponent(appName, () => StorePersist);
