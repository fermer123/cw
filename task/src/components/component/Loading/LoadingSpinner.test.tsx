/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import renderer from 'react-test-renderer';

import LoadingSpinner from './LoadingSpinner';

describe('InputForm', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<LoadingSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
