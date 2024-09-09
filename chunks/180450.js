function r(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw Error(`positive integer expected, not ${t}`);
}
n.d(e, {
    Gg: function () {
        return s;
    },
    J8: function () {
        return h;
    },
    Rx: function () {
        return r;
    },
    aI: function () {
        return i;
    },
    vp: function () {
        return o;
    }
});
function i(t, ...e) {
    var n;
    if (!((n = t) instanceof Uint8Array || (null != n && 'object' == typeof n && 'Uint8Array' === n.constructor.name))) throw Error('Uint8Array expected');
    if (e.length > 0 && !e.includes(t.length)) throw Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function o(t) {
    if ('function' != typeof t || 'function' != typeof t.create) throw Error('Hash should be wrapped by utils.wrapConstructor');
    r(t.outputLen), r(t.blockLen);
}
function s(t, e = !0) {
    if (t.destroyed) throw Error('Hash instance has been destroyed');
    if (e && t.finished) throw Error('Hash#digest() has already been called');
}
function h(t, e) {
    i(t);
    let n = e.outputLen;
    if (t.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
}
