import React from 'react';
import Product from '../Product';
import { shallow } from 'enzyme';

const item = {
  id: 'MLA687093655',
  title: 'Jeep Renegade 1.8 Sport Manual',
  price: {
    currency: 'ARS',
    amount: '659.900',
    decimals: '00'
  },
  picture: 'http://mla-s2-p.mlstatic.com/705233-MLA27350454115_052018-I.jpg',
  condition: 'new',
  free_shipping: true,
  localidad: 'Capital Federal'
};

describe('<Product />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Product item={item} />);
  });

  it('should render a SearchBar component', () => {
    expect(wrapper.exists()).toBe(true);
    //console.log(wrapper.debug());
  });
  describe('render', () => {
    describe('Link', () => {
      let linkWrapper;
      beforeEach(() => {
        linkWrapper = wrapper.find('Link');
      });

      it('should render a Link component with a prop to', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.prop('to')).toEqual(`/items/${item.id}`);
      });

      it('should render a div with product-main class', () => {
        const productMainWrapper = linkWrapper.find('div.product-main');
        expect(productMainWrapper).toHaveLength(1);
      });

      it('should render a img with src prop', () => {
        const imgWrapper = linkWrapper.find('img.img-container');
        expect(imgWrapper).toHaveLength(1);
        expect(imgWrapper.prop('src')).toEqual(item.picture);
      });

      it('should render a div with price-container class', () => {
        const divWrapper = linkWrapper.find('div.price-container');
        expect(divWrapper).toHaveLength(1);
      });

      it('should render a span with price-font-size class', () => {
        const spanWrapper = linkWrapper.find('span.price-font-size');
        expect(spanWrapper).toHaveLength(1);
      });

      it('should render a img free shipping with src prop', () => {
        const spanWrapper = linkWrapper.find('span.price-font-size');
        const imgWrapper = spanWrapper.find('img.img-free-shipping');
        expect(imgWrapper).toHaveLength(1);
        expect(imgWrapper.prop('src')).toEqual('ic_shipping.png');
      });

      it('should render a span with format-title class', () => {
        const spanWrapper = linkWrapper.find('span.format-title');
        expect(spanWrapper).toHaveLength(1);
      });

      it('should render a div with localidad-container class', () => {
        const divWrapper = linkWrapper.find('div.localidad-container');
        expect(divWrapper).toHaveLength(1);
      });
    });
  });
});
