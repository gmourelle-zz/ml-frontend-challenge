import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render', () => {
    describe('Router', () => {
      it('should render Switch component', () => {
        const switchWrapper = wrapper.find('Switch');
        expect(switchWrapper.exists()).toBe(true);
      });

      it('should render Route component', () => {
        const routeWrapper = wrapper.find('Route');
        expect(routeWrapper.exists()).toBe(true);
      });

      it('should contain Route for /', () => {
        const routeWrapper = wrapper.find({ path: '/' });
        expect(routeWrapper.exists()).toBe(true);
      });

      it('should contain Route for item', () => {
        const routeWrapper = wrapper.find({ path: '/items' });
        expect(routeWrapper.exists()).toBe(true);
      });

      it('should contain Route for item/id', () => {
        const routeWrapper = wrapper.find({ path: '/items/:id' });
        expect(routeWrapper.exists()).toBe(true);
      });
    });
  });
});
