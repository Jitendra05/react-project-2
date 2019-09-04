import React from 'react';
import Footer from '../../components/footer.component';
import {shallow} from 'enzyme';

test('should render Footer component correctly',()=>{
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});