import React from 'react';
import FeatureDisplay from './FeatureDisplay';
import isFeatureOn from './isFeatureOn';
import FeatureFlagContext from './FeatureFlagContext';
import './App.css';

const App = () => {
  return (
    <FeatureFlagContext.Provider value={isFeatureOn}>
      <div className="App">
        <header className="App-header">
          <FeatureDisplay />
        </header>
      </div>
    </FeatureFlagContext.Provider>
  );
}

export default App;
