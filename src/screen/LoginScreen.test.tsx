import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from './LoginScreen';

describe('<LoginScreen />', () => {
  given('component', () => shallow(<LoginScreen {...given.props} />));
  given('props', () => ({}));

  it('renders', () => {
    expect(given.component).toMatchSnapshot();
  });
});
