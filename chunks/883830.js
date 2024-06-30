let r;
n.d(t, {
    Z: function () {
        return a;
    }
});
let i = new Uint8Array(16);
function a() {
    if (!r && !(r = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
        throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    return r(i);
}
