export const EDIT_USER = 'EDIT_USER';

export const editUser = (username,password) => dispatch => {
    dispatch({
        type: EDIT_USER,
        username: username,
        password: password
    })
}