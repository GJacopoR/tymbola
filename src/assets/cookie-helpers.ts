export function setCookie(name: string, value: string, expirationDays: number, path = '/') {
    const now = new Date();
    now.setTime(now.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + now.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=${path}`
}

export function getCookie(cookieName: string) {
    const name: string = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// function addOneYearAndMonth(date: Date) {
//     const dateCopy = new Date(date);
//     dateCopy.setMonth(dateCopy.getMonth() + 1);
//     dateCopy.setFullYear(dateCopy.getFullYear() + 1);
//     return dateCopy;
// }