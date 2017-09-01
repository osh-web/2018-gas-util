declare interface UrlFetchAppParams {
    +contentType: string;
    +headrs: Object;
    +method: "get" | "post" | "put" | "delete";
    +payload: Object;
    +useIntranet: boolean;
    +validateHttpCertificatios: boolean;
    +followRedirects: boolean;
    +muteHttpExceptions: boolean;
    +escaping: boolean;
}

declare interface HttpResponse {
    getAllHeaders(): Object;
    getContentText(): string;
}
declare class UrlFetchApp {
    fetch(url: string, params: UrlFetchAppParams): HttpResponse
}
declare var UrlFetchApp: UrlFetchApp