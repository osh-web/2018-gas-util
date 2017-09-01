import fetch from 'node-fetch'
import { URLSearchParams } from 'url';

export default function({url, headers, method ,payload}): Promise<Object> {
    const body = new URLSearchParams();
    Object.keys(payload).map(key => {
        body.append(key, payload[key]);
    })

    console.log(body.toString());
    return fetch(url, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...headers },
        method,
        body: body.toString(),
    })
    .then(res => res.json())
}