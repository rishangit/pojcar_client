export const LOGIN_ATTEMPT = '[AUTH] [LOGIN] ATTEMPT';
export const LOGIN_SUCCESS = '[AUTH] [LOGIN] SUCCESS';


export const loginAttempt = payload =>({type:LOGIN_ATTEMPT, payload });
export const loginSuccess = payload =>({type:LOGIN_SUCCESS, payload });