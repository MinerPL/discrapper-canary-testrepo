n.d(e, {
    $e: function () {
        return l;
    },
    aF: function () {
        return c;
    },
    lW: function () {
        return a;
    },
    nZ: function () {
        return u;
    },
    s3: function () {
        return h;
    },
    wi: function () {
        return f;
    }
});
var r = n(899517),
    i = n(833873),
    s = n(356442),
    o = n(307854);
function u() {
    let t = (0, s.c)();
    return (0, i.G)(t).getCurrentScope();
}
function c() {
    let t = (0, s.c)();
    return (0, i.G)(t).getIsolationScope();
}
function a() {
    return (0, r.Y)('globalScope', () => new o.s());
}
function l(...t) {
    let e = (0, s.c)(),
        n = (0, i.G)(e);
    if (2 === t.length) {
        let [e, r] = t;
        return e ? n.withSetScope(e, r) : n.withScope(r);
    }
    return n.withScope(t[0]);
}
function f(...t) {
    let e = (0, s.c)(),
        n = (0, i.G)(e);
    if (2 === t.length) {
        let [e, r] = t;
        return e ? n.withSetIsolationScope(e, r) : n.withIsolationScope(r);
    }
    return n.withIsolationScope(t[0]);
}
function h() {
    return u().getClient();
}
