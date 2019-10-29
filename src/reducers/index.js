export default function reduce(state = {num: 0}, action)
{
    console.log(action);

    switch (action.type) {
        case "ADD_COUNTER":
            console.log('reducer add counter');
            return {...state,
                num: state.num + action.step};
        default:
            console.log('reducer default');
            return state;
    }
};
