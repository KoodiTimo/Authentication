// Näin saadaan ios ja android versiot samanlaisiksi. Muutokset tehdään /src/app.js

import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('auth', () => App);
