n.d(t, {
    $m: function () {
        return l;
    },
    DX: function () {
        return d;
    },
    Qj: function () {
        return o;
    },
    Wu: function () {
        return c;
    },
    aK: function () {
        return u;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(699516),
    s = n(823379);
function o(e, t) {
    return e.filter((e) => (0, s.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : a.Z.isBlocked(e.id)));
}
function l(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : a.Z.isBlocked(e)));
}
function u(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e.ownerId) : a.Z.isBlocked(e.ownerId)));
}
function c(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : a.Z.isBlocked(e)));
}
function d(e) {
    return i()(e)
        .filter((e) => {
            var t;
            return (t = e), !a.Z.isBlocked(t.userId);
        })
        .keyBy('userId')
        .value();
}
