
export const setUser = (username, email, token) => {
    let user = {
        username, email, token
    }
    if (user.username == null && user.email == null && user.token == null) {
        user = null;
    }
    window.App.updateState(user);
}