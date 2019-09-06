import getTotalExpanseAmount from '../../selectors/total-expanse-amount';
import {expanses} from '../fixtures/expanses-data';

test('should return 0 if no expanse',()=>{
  const total = getTotalExpanseAmount();
  expect(total).toBe(0);
});

test('should correctly add up a single expanse',()=>{
  const total = getTotalExpanseAmount([expanses[0]]);
  expect(total).toBe(9000);
});

test('should correctly add up a multiple expanse',()=>{
  const total = getTotalExpanseAmount(expanses);
  expect(total).toBe(11100);
});