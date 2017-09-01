export function setTimeout(callback, time) {
    Utilities.sleep(time)
    callback();
}