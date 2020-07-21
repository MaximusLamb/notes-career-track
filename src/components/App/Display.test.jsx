import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders User Display', () => {
    const wrapper = shallow(<Display username="crazyTony" followers={300} followings={200} profile={'http://website.gov'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
