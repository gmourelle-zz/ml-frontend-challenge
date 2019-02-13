import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should render App general container with children', () => {
    const generalContainer = app.find('div.App');
    expect(generalContainer.exists()).toBe(true);
    expect(generalContainer.find('h1').exists()).toBe(true);
    expect(generalContainer.find('div.App__container').exists()).toBe(true);
  });

  it('should render Football Player Finder title', () => {
    const title = app.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Football Player Finder');
    //console.log(app.debug());
  });
});
