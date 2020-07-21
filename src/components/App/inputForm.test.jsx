import React from 'react';
import { shallow } from 'enzyme';
import Inputform from './Inputform';

describe('inputForm component', () => {
  it('renders inputForm', () => {
    const wrapper = shallow(<Inputform username="someBroski" onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
