import react from 'react';

const TotalExpanseAmount = (expanses=[]) => {
    return expanses.map((expanse) => expanse.amount)
        .reduce((sum, value) => sum + value , 0)
};

export default TotalExpanseAmount;