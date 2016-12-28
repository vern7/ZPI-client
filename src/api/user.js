export const getUserId = () => '1';

export const login = (username, password) => {
    return fetch(`http://zpi.herokuapp.com/callback?client_name=FormClient&username=${username}&password=${password}`, {
                method: 'POST',
                credentials: 'include',
            })
        .then(res => res.json());
};

export const loginFacebook = (token) => {
    return fetch(`//zpi.herokuapp.com/api/login/facebook?token=${token}`, {
                method: 'GET',
                credentials: 'include',
            })
        .then(res => res.json());
};

export const logout = () => {
    return fetch('https://zpi.herokuapp.com/logout');
}
