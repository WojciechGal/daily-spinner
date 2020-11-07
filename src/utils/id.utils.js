export default function createUUID() {
    let dateTime = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dateTime + Math.random() * 16) % 16 | 0;
        dateTime = Math.floor(dateTime / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}