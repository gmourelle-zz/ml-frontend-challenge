import React from 'react';
import Layout from '../Layout';
import { shallow } from 'enzyme';

describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  describe('render', () => {
    describe('Fragment', () => {
      let fragmentWrapper;

      beforeEach(() => {
        fragmentWrapper = wrapper.find('Fragment');
      });

      it('should render Fragment component', () => {
        expect(fragmentWrapper).toHaveLength(1);
      });

      it('should render HelmetWrapper component', () => {
        const helmetWrapper = fragmentWrapper.find('HelmetWrapper');
        expect(helmetWrapper).toHaveLength(1);
      });

      it('should render meta tag', () => {
        const metaWrapper = fragmentWrapper.find('meta');
        expect(metaWrapper).toHaveLength(1);
      });

      it('should render title tag', () => {
        const titleWrapper = fragmentWrapper.find('title');
        expect(titleWrapper).toHaveLength(1);
      });

      it('should render a SearchBar component', () => {
        const searchBarWrapper = fragmentWrapper.find('SearchBar');
        expect(searchBarWrapper).toHaveLength(1);
      });

      it('should render a div', () => {
        const divWrapper = fragmentWrapper.find('div');
        expect(divWrapper).toHaveLength(1);
        //expect(divWrapper.children()).toHaveLength(1);
      });
    });
  });
});
