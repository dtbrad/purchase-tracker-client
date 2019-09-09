export function setToken(token: string) {
    if (token) {
        localStorage.setItem("jwt", token);
    }
}

export function removeToken() {
    localStorage.removeItem("jwt");
}
