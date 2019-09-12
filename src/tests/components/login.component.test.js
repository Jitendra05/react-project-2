import React from 'react';
import { LoginPage } from '../../components/login.component';
import { shallow} from 'enzyme';

test('Should render LoginPage correctly',()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});