import moment from 'moment';

export const expanses = [
    {
        id:'1',
        description:'rent',
        note:'',
        amount:9000,
        createdAt:moment(0).add(4,"days"),
    },
    {
        id:'2',
        description:'gas bill',
        note:'',
        amount:900,
        createdAt:moment(0),
    },
    {
        id:'3',
        description:'water bill',
        note:'',
        amount:1200,
        createdAt:moment(0).subtract(4,"days"),
    }
];