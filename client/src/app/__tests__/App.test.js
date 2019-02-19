import React from 'react';
import App from '../App';
import { ProductList, ProductDetails } from '../../components';
import { shallow } from 'enzyme';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render', () => {
    describe('Helmet', () => {
      let helmetWrapper;
      beforeEach(() => {
        helmetWrapper = wrapper.find('HelmetWrapper');
      });

      it('should render a meta tag', () => {
        const metaWrapper = helmetWrapper.find('meta');
        expect(metaWrapper.exists()).toBe(true);
      });

      it('should render a title tag', () => {
        const titleWrapper = helmetWrapper.find('title');
        expect(titleWrapper.exists()).toBe(true);
      });
    });

    describe('SearchBar', () => {
      it('should render <withRouter(SearchBar) /> component', () => {
        const searchBarWrapper = wrapper.find('withRouter(SearchBar)');
        expect(searchBarWrapper.exists()).toBe(true);
      });
    });
    describe('Router', () => {
      it('should render Switch component', () => {
        const switchWrapper = wrapper.find('Switch');
        expect(switchWrapper.exists()).toBe(true);
      });

      it('should render Route component', () => {
        const routeWrapper = wrapper.find('Route');
        expect(routeWrapper.exists()).toBe(true);
      });

      it('should contain Route for item', () => {
        const routeWrapper = wrapper.find('Route');
        expect(routeWrapper.exists()).toBe(true);
        expect(routeWrapper.at(0).prop('path')).toEqual('/items');
        expect(routeWrapper.at(0).prop('component')).toEqual(ProductList);
      });

      it('should contain Route for item/:id', () => {
        const routeWrapper = wrapper.find('Route');
        expect(routeWrapper.exists()).toBe(true);
        expect(routeWrapper.at(1).prop('path')).toEqual('/items/:id');
        expect(routeWrapper.at(1).prop('component')).toEqual(ProductDetails);
      });
    });
  });
});
