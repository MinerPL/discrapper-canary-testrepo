n.d(t, {
    u: function () {
        return d;
    }
});
var r = n(141725),
    i = n(830651),
    a = n(164441),
    s = n(35066),
    o = n(43266),
    l = n(144459);
function u(e, t) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? u(Object(n), !0).forEach(function (t) {
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
              : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function d() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (0, s.u)(e.dirtyHandlerIds, {
            type: t.type,
            payload: c(c({}, t.payload), {}, { prevTargetIds: (0, l.U2)(e, 'dragOperation.targetIds', []) })
        }),
        dragOffset: (0, r.u)(e.dragOffset, t),
        refCount: (0, a.u)(e.refCount, t),
        dragOperation: (0, i.u)(e.dragOperation, t),
        stateId: (0, o.u)(e.stateId)
    };
}
