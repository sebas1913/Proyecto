export const URL_BASE = "http://localhost:3000";
export const URL_USERS = `${URL_BASE}/users`;
export const URL_POST = `${URL_BASE}/post`;
export const URL_UPDATE_PASSWORD = (userId) => `${URL_USERS}/${userId}`;
