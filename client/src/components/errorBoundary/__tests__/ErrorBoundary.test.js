import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  describe('when NO error is found', () => {
    it('should render the children', () => {
      const ComponentA = () => {
        return <div>Welcome</div>;
      };
      const wrapper = shallow(
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
      );
      expect(wrapper.html()).toEqual('<div>Welcome</div>');
    });
  });

  describe('when an error is found', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <ErrorBoundary error={true} message="There has been an error" />
      );
    });

    it('should render the error msg', () => {
      expect(wrapper.html()).toEqual(
        '<h2 class="error-message-container">There has been an error</h2>'
      );
    });
  });
});
