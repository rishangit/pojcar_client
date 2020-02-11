export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const ReGISTER_SUCCESS = 'ReGISTER_SUCCESS';

export const registerAttempt = payload=>({type:REGISTER_ATTEMPT, payload});
export const registerSuccess = payload=>({type:ReGISTER_SUCCESS, payload})