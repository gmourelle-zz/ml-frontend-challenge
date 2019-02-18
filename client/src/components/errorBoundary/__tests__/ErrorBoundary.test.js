import React from 'react';
import { shallow } from 'enzyme';

import { ErrorBoundary } from '../ErrorBoundary';

describe('<ErrorBoundary />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary error={true} message={'hola'} />);
  });

  it('reacts to prop and renders children', () => {
    //const wrapper = shallow(<ErrorBoundary error={false} message={''} />);
    wrapper.setProps({ error: new Error('error') });
    console.log(wrapper.debug());

    // expect(wrapper.is('[data-testid="ErrorBoundary-children"]')).toBe(true);
    // wrapper.setProps({ error: new Error('error') });
    // expect(wrapper.is('[data-testid="ErrorBoundary"]')).toBe(true);
  });
});
