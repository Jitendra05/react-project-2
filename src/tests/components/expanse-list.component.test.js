import React from 'react';
import {shallow} from 'enzyme';
import {ExpanseList} from '../../components/expanse-list.component';
import {expanses} from '../fixtures/expanses-data';

test('should render ExpanseList component correctly with expanses',()=>{
    const wrapper = shallow(<ExpanseList expanses={expanses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpanseList component correctly with no expanses',()=>{
    const wrapper = shallow(<ExpanseList expanses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});


