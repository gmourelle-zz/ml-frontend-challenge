import React from 'react';
import Spinner from '../Spinner';
import { shallow } from 'enzyme';

describe('<Spinner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('should render a Spinner component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('render', () => {
    it('should render a div with loader class', () => {
      const productMainWrapper = wrapper.find('div.loader');
      expect(productMainWrapper).toHaveLength(1);
    });
  });
});
