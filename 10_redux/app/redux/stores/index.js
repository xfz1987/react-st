export default (state = {
    items:['aaa','bbb']
}, action) => {
    switch(action.type){
        case 'ADD':
            state.items.push(action.addtext);
        default:
            return state;
    }
};
