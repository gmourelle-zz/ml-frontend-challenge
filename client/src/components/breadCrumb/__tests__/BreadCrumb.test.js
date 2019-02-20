import React from 'react';
import BreadCrumb from '../BreadCrumb';
import { shallow } from 'enzyme';

const items = ['Autos, Motos y Otros'];

describe('<BreadCrumb />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BreadCrumb items={items} />);
  });

  it('should render a BreadCrumb component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });
  describe('render', () => {
    describe('when there are category', () => {
      beforeEach(() => {
        wrapper = shallow(<BreadCrumb items={items} />);
      });

      it('should render a Crumb with props', () => {
        const crumbWrapper = wrapper.find('Crumb');
        expect(crumbWrapper.prop('crumb')).toEqual('Autos, Motos y Otros');
        expect(crumbWrapper).toHaveLength(1);
      });
    });

    describe('when there are no category', () => {
      const category = [];
      beforeEach(() => {
        wrapper = shallow(<BreadCrumb items={category} />);
      });

      it('should render a span with no-category class', () => {
        const crumbWrapper = wrapper.find('span.no-category');
        expect(crumbWrapper).toHaveLength(0);
      });
    });
  });
});
