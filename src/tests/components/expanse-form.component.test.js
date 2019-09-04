import React from 'react';
import {shallow} from 'enzyme';
import ExpanseForm from '../../components/expanse-form.component';
import {expanses} from '../fixtures/expanses-data';
import moment from 'moment';

test('should render ExpanseForm component correctly',()=>{
    const wrapper = shallow(<ExpanseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpanseForm component correctly with expanse data',()=>{
    const wrapper = shallow(<ExpanseForm expanse={expanses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpanseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test('should set description on input data change',()=>{
    const wrapper = shallow(<ExpanseForm />);
    const value = 'new description';
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea data change',()=>{
    const wrapper = shallow(<ExpanseForm />);
    const value = 'new note';
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
});



test('should set amount on input data change, if it is in valid format',()=>{
    const wrapper = shallow(<ExpanseForm />);
    const value = '120.25';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});


test('should set amount to be empty on input data change, if it is in invalid format',()=>{
    const wrapper = shallow(<ExpanseForm />);
    const value = '120.250';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
});


test('should call onSubmit on props for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpanseForm expanse={expanses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description:expanses[0].description,
        note: expanses[0].note,
        amount: expanses[0].amount,
        createdAt: expanses[0].createdAt.valueOf()
    })
});




test('should set new date on date change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpanseForm />);
    wrapper.find('#someid').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});


test('should set focused on date change',()=>{
    const wrapper = shallow(<ExpanseForm />);
    wrapper.find('#someid').prop('onFocusChange')({focused:true});
    expect(wrapper.state('focused')).toBeTruthy();
});

