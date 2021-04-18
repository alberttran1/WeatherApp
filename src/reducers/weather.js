const reducer1 = (weatherList = [], action) => {
    switch(action.type){
        case 'ADD_SUCCESS':
            return [...weatherList,action.payload];
        default:
            return weatherList;
    }
};
export default reducer1;