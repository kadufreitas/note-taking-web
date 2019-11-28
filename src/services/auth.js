export const TOKEN_KEY = 'user';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () =>
  localStorage.getItem('user')
    ? `Token ${JSON.parse(localStorage.getItem('user')).token}`
    : null;
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
