import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders User Display', () => {
    const wrapper = shallow(<Display username="crazyTony" followers={300} following={200} html_url={'http://website.gov'} repos={[{ name: 'crazyTony', html_url: 'http://website.gov' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
