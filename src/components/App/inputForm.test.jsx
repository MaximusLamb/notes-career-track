import React from 'react';
import { shallow } from 'enzyme';
import inputForm from './inputForm';

describe('inputForm component', () => {
  it('renders inputForm', () => {
    const wrapper = shallow(<inputForm username="someBroski" onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
