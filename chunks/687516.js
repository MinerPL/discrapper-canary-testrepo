n.d(t, {
    Cf: function () {
        return d;
    },
    L2: function () {
        return u;
    },
    Um: function () {
        return l;
    }
});
var r = n(442837), i = n(902704), a = n(158776), o = n(981631);
function s(e) {
    return e.type === o.IIU.PLAYING;
}
function l(e, t) {
    var n;
    return null != e ? (n = e.ownerId, t.findActivity(n, s)) : null;
}
function u(e, t) {
    if (null == e)
        return null;
    let n = l(e, t);
    return null == n ? null : {
        id: n.application_id,
        name: n.name
    };
}
function c(e, t) {
    return e === t || null != e && null != t && (0, i.Z)(e, t);
}
function d(e) {
    return (0, r.e7)([a.Z], () => u(e, a.Z), [e], c);
}
