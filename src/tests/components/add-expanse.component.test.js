import React from 'react';
import {shallow} from 'enzyme';
import {AddExpanseComponent} from '../../components/add-expanse.component';
import {expanses} from '../fixtures/expanses-data';

let startAddExpanseSpy, historySpy, wrapper;

beforeEach(()=>{
  startAddExpanseSpy =  jest.fn();
  historySpy = {push:jest.fn()};
  wrapper = shallow(<AddExpanseComponent startAddExpanse={startAddExpanseSpy} history={historySpy}/>);
});

test('Should render AddExpanseComponent correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit',()=>{
  wrapper.find('ExpanseForm').prop('onSubmit')(expanses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpanseSpy).toHaveBeenLastCalledWith(expanses[1]);
});