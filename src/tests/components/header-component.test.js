import React from 'react';
import {HeaderPage} from '../../components/header-component';
import {shallow} from 'enzyme';

test('should render HeaderPage component correctly',()=>{
    const wrapper = shallow(<HeaderPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expansify');
});
