import React from 'react';
import {shallow} from 'enzyme';
import {EditExpanseComponent} from '../../components/edit-expanse.component';
import {expanses} from '../fixtures/expanses-data';
import {
  startEditExpanse,
} from '../../actions/expanse-action';
let startEditExpanseSpy, okPopupSpy, historySpy, wrapper;

beforeEach(()=>{
  okPopupSpy = jest.fn();
  startEditExpanseSpy =  jest.fn();
  historySpy = {push:jest.fn()};
  wrapper = shallow(
    <EditExpanseComponent 
        startEditExpanse={startEditExpanseSpy} 
        history={historySpy} 
        expanse={expanses[2]}
        okPopup={okPopupSpy}
    />);
});

test('Should render EditExpanseComponent correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});


test('Should set EditExpanseComponent state correctly onSubmit',()=>{
  wrapper.find('ExpanseForm').prop('onSubmit')(expanses[1]);
  expect(wrapper.state('isSuccess')).toBeFalsy();
  expect(wrapper.state('isWarning')).toBeTruthy();
  expect(wrapper.state('id')).toEqual(expanses[2].id);
  expect(wrapper.state('updatedExpanse')).toEqual(expanses[1]);
});



// test('Should handle editExpanse on okPopup click',()=>{
//   wrapper.find('#warningModal').prop('okPopup')();
//   expect(okPopupSpy).toHaveBeenCalled();
// });
