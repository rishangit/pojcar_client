export const LIST_PAGES_ATTEMPT = '[PAGES] [LIST_PAGES] ATTEMPT';
export const LIST_PAGES_SUCCESS = '[PAGES] [LIST_PAGES] SUCCESS';


export const listPagesAttempt = payload =>({type:LIST_PAGES_ATTEMPT,payload});
export const listPagesSuccess = payload =>({type:LIST_PAGES_SUCCESS,payload});