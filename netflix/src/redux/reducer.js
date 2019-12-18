const initState = {
    mylist: [],
    recommendations: [],
    error: null,
    isLoading: false
}

const lists = (state = initState, action) => {
    switch (action.type) {
        case 'GET_START':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_SUCCESS':
            return {
                ...state,
                mylist: action.data.mylist,
                recommendations: action.data.recommendations,
                isLoading: false
            };
        case 'GET_FAIL':
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                recommendations: [...state.recommendations, state.mylist.find(({ id }) => id === action.id)],
                mylist: state.mylist.filter(item => item.id !== action.id)
            };
        case 'ADD_TO_LIST':
            return {
                ...state,
                mylist: [...state.mylist, state.recommendations.find(({ id }) => id === action.id)],
                recommendations: state.recommendations.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}
export default lists;