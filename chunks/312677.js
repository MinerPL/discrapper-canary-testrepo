var e = r(147018), o = r(161581), i = r(4340), u = r(325008), c = TypeError, f = Object.defineProperty, a = o.self !== o;
try {
    if (u) {
        var s = Object.getOwnPropertyDescriptor(o, 'self');
        (a || !s || !s.get || !s.enumerable) && i(o, 'self', {
            get: function () {
                return o;
            },
            set: function (t) {
                if (this !== o)
                    throw c('Illegal invocation');
                f(o, 'self', {
                    value: t,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
            },
            configurable: !0,
            enumerable: !0
        });
    } else
        e({
            global: !0,
            simple: !0,
            forced: a
        }, { self: o });
} catch (t) {
}
