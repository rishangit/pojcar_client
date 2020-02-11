export const REGISTER_ATTEMPT = '[AUTH] [REGISTER] ATTEMPT';
export const ReGISTER_SUCCESS = '[AUTH] [REGISTER] SUCCESS';

export const registerAttempt = payload=>({type:REGISTER_ATTEMPT, payload});
export const registerSuccess = payload=>({type:ReGISTER_SUCCESS, payload})