// @flow
declare var UrlFetchApp: Object
export default function gasAadapter({ url, headers, method, payload, body }: Object): Object {
    const options = {
        method,
        headers,
        payload,
        body,
    };
    const response = UrlFetchApp.fetch(url, options)
    const status = response.getResponseCode()
    if (status == 200) {
        return JSON.parse(response.getContentText())
    }
    throw new Error("status is not 200. status: ${status}")
}
