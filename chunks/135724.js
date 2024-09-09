n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(735250);
n(470079);
var l = n(829750),
    r = n(280102);
function a(e) {
    let { channel: t, video: n, userCount: a } = e,
        { limit: s } = (0, l.Z)(t),
        o = -1,
        c = !1;
    return (
        t.userLimit > 0 && (o = t.userLimit),
        n && s > 0 && ((c = o < 0 || s < o), (o = o > 0 ? Math.min(o, s) : s)),
        (0, i.jsx)(r.Z, {
            users: a,
            total: o,
            videoLimit: c
        })
    );
}
