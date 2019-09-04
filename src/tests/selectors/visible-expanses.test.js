import moment from 'moment';
import uuid from 'uuid';
import visibleExpanses from '../../selectors/visible-expanses';

const expansesList = [
    {
        id:uuid(),
        description:'Rent',
        note:'this was august month rent',
        amount:9000,
        createdAt:moment(0).add(4,'days'),
    },
    {
        id:uuid(),
        description:'water Bill',
        note:'this was august month rent',
        amount:1000,
        createdAt:moment(0),
    },
    {
        id:uuid(),
        description:'Gas Bill',
        note:'this was august month rent',
        amount:5000,
        createdAt:moment(0).subtract(4,'days'),
    }
]

const filters = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

test('should get expanses after filter by text default value on description', ()=>{
    expect(visibleExpanses(expansesList,{...filters,text:''})).toEqual(
        [expansesList[0],expansesList[1],expansesList[2]]
    );
});

test('should get expanses after filter by text value on description', ()=>{
    expect(visibleExpanses(expansesList,{...filters,text:'Bill'})).toEqual(
        [expansesList[1],expansesList[2]]
    );
});

test('should get expanses after filter by text does not exists on description', ()=>{
    expect(visibleExpanses(expansesList,{...filters,text:'xyz'})).toEqual(
        []
    );
});

test('should get expanses after filter by sort by date', ()=>{
    expect(visibleExpanses(expansesList,{...filters})).toEqual(
        [expansesList[0],expansesList[1],expansesList[2]]
    );
});

test('should get expanses after filter by sort by amount', ()=>{
    expect(visibleExpanses(expansesList,{...filters, sortBy:'amount'})).toEqual(
        [expansesList[0],expansesList[2],expansesList[1]]
    );
});

test('should get expanses after filter by start date', ()=>{
    expect(visibleExpanses(expansesList,{...filters, startDate:moment(0)})).toEqual(
        [expansesList[0],expansesList[1]]
    );
});

test('should get expanses after filter by end date', ()=>{
    expect(visibleExpanses(expansesList,{...filters, endDate:moment(0).add(2,'days')})).toEqual(
        [expansesList[1],expansesList[2]]
    );
});