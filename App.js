import React from 'react';
import Instagram from 'App/App.js';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const App: () => React$Node = () => {
    return <Instagram/>;
};

export default App;
