import React from 'react';
import Crumb from '../Crumb';
import { shallow } from 'enzyme';

const crumb = ['Autos, Motos y Otros'];

describe('<Crumb />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Crumb crumb={crumb} />);
  });

  it('should render a Crumb component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });
  describe('render', () => {
    it('should render a span with crumb class', () => {
      const crumbWrapper = wrapper.find('span.crumb');
      expect(crumbWrapper).toHaveLength(1);
    });
  });
});
