import React from 'react';
import { render } from '@testing-library/react';
import FeatureDisplay from './FeatureDisplay';
import FeatureFlagContext from './FeatureFlagContext';

test('displays whether the feature flag is on or off', () => {
  const component = render(
    <FeatureFlagContext.Provider value={() => true}>
      <FeatureDisplay />
    </FeatureFlagContext.Provider>
  )

  expect(component.getByText("foo is on")).toBeInTheDocument()
});
