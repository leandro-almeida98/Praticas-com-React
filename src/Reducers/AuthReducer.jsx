const initialState = {
    login: 'admin@admin.com',
    pswd: '123'
};
const AuthReducer = (state = [], action) => {
    if(state.length ==0){
        return initialState;
    }
    return state;
}
export default AuthReducer;