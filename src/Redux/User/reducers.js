import { EDIT_USER } from "./action";


const initialState = {
  username: '',
  password:''
};

function userReducer(state = initialState ,action) {
    switch (action.type) {
        case EDIT_USER:
            return { ...state, username: state.username ,password: state.password }
        
        default:
            return state
    }
}

export default userReducer;

