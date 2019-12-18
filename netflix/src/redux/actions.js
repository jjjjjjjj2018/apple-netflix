import axios from 'axios';
//get all list items action
const getStart = () => {
    return {
        type: 'GET_START',
    };
}

const getSuccess = (response) => {
    return {
        type: 'GET_SUCCESS',
        data: response.data,
    };
}

const getFail = (error) => {
    return {
        type: 'GET_FAIL',
        error,
    };
}

export const getAll = () => {
    return (dispatch) => {
        dispatch(getStart());
        axios.get('./list.json')
            .then(res => {
                dispatch(getSuccess(res));
            })
            .catch(err => {
                dispatch(getFail(err));
            });
    };
}

export const removeFromList = (id) => {
    return {
        type: 'REMOVE_FROM_LIST',
        id
    }
}

export const moveToMyList = (id) => {
    return {
        type: 'ADD_TO_LIST',
        id
    }
}




