n.d(t, {
    u: function () {
        return l;
    }
});
var r = n(964742),
    i = n(304832);
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? a(Object(n), !0).forEach(function (t) {
                  (function (e, t, n) {
                      t in e
                          ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            })
                          : (e[t] = n);
                  })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var o = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function l() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case r.TL:
        case r.qu:
            return {
                initialSourceClientOffset: n.sourceClientOffset,
                initialClientOffset: n.clientOffset,
                clientOffset: n.clientOffset
            };
        case r.$T:
            if ((0, i.YJ)(e.clientOffset, n.clientOffset)) return e;
            return s(s({}, e), {}, { clientOffset: n.clientOffset });
        case r.Bs:
        case r.rp:
            return o;
        default:
            return e;
    }
}
