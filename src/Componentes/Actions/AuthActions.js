export const editLogin = (login) => {
    return{
        type: 'editLogin',
        payload: {
            login:login
        }
    };
};

export const editPswd = (pswd) =>{
    return{
        type: 'editPswd',
        payload:{
            pswd:pswd
        }
    };
};