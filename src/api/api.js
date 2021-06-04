import http from "./request";

export function httpAction(method, url, params, data, headers) {
    return http({
        url: url,
        method,
        params,
        data,
    });
}
export function getAction(url, params) {
    return http.get(url, {
        params,
    });
}
export function deleteAction(url, params) {
    return http.delete(url, {
        params,
    });
}
export function postAction(url, data, params) {
    return http({
        url: url,
        method: "post",
        data,
        params,
    });
}

export function putAction(url, data, params) {
    return http({
        url: url,
        method: "put",
        data,
        params,
    });
}
