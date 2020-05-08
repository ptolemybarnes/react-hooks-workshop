import React, { useContext } from 'react';
import FeatureFlagContext from './FeatureFlagContext';

const FEATURES = [
  'foo',
  'bar',
  'cats'
]

function FeatureDisplay() {
  const isFeatureOn = useContext(FeatureFlagContext);

  return (
    <div className="App">
      <header className="App-header">
        {
          FEATURES.map(feature =>
            <div key={feature}>
              {`${feature} is ${isFeatureOn(feature) ? 'on' : 'off'}`}
            </div>
          )
        }
      </header>
    </div>
  );
}

export default FeatureDisplay;
