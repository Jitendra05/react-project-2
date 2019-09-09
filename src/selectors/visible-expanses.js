import moment from 'moment';

export default (expanses, {text, sortBy, startDate, endDate}) => {
    return expanses.filter((expanse) => {
        const createdAtMoment = moment(expanse.createdAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
        const textMatch = expanse.description? expanse.description.toLowerCase().includes(text.toLowerCase()): true;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}