r.d(t, {
    o: function () {
        return o;
    }
});
var n = r(622916),
    a = r(255768);
function o(e) {
    if ('boolean' == typeof e) return Number(e);
    let t = 'string' == typeof e ? parseFloat(e) : e;
    if ('number' != typeof t || isNaN(t) || t < 0 || t > 1) {
        a.X && n.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
        return;
    }
    return t;
}
