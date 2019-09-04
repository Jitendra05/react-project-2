import React from 'react';
import Header from '../../components/header-component';
import {shallow} from 'enzyme';

test('should render Header component correctly',()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expansify');
});
