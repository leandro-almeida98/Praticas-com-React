const initialState = {
    login: '',
    pswd: ''
};
const AuthReducer = (state = [], action) => {
    if(state.length ==0){
        return initialState;
    }
    if(action.type == 'editLogin'){
        return{
            ...state, login: action.payload.login
        };
    }
    if(action.type == 'editPswd'){
        return{
            ...state, pswd: action.payload.pswd
        };
    }
    return state;
}

export default AuthReducer;