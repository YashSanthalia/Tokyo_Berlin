export default (state = {}, action) => {
    switch(action.type){
        case "STATUS" : return action.payload;
        default : return state;
    }
} 