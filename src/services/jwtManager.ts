import decode from "jwt-decode";

export function setToken(token: string) {
    if (token) {
        localStorage.setItem("jwt", token);
    }
}

export function removeToken() {
    localStorage.removeItem("jwt");
}

export function getToken(): string | null {
    return localStorage.getItem("jwt");
}

type DecodedToken = {
    email: string;
    exp: string;
    iat: string;
    name: string;
    sub: string;
};

export function returnUserId(token: string | null) {
    if (token) {
        const decodedToken: DecodedToken = decode(token);
        return decodedToken.sub;
    }

    return false;
}

export function validToken(token: string | null) {
    if (token) {
        const decodedToken: DecodedToken = decode(token);
        const val = new Date() < new Date(decodedToken.exp);
        return val;
    }

    return false;
}
