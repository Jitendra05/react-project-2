import React from 'react';
import NotFoundComponent from '../../components/not-found.component';
import {shallow} from 'enzyme';

test('should render NotFoundComponent component correctly',()=>{
    const wrapper = shallow(<NotFoundComponent />);
    expect(wrapper).toMatchSnapshot();
});
