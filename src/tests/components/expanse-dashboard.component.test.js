import React from 'react';
import ExpanseDashboardComponent from '../../components/expanse-dashboard.component';
import {shallow} from 'enzyme';

test('should render ExpanseDashboardComponent component correctly',()=>{
    const wrapper = shallow(<ExpanseDashboardComponent />);
    expect(wrapper).toMatchSnapshot();
});

