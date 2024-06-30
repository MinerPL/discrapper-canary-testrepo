n.d(t, {
    Kh: function () {
        return c;
    },
    ad: function () {
        return d;
    }
});
var r = n(512722), i = n.n(r), a = n(493683), o = n(727429), s = n(592125), l = n(703656), u = n(981631);
function c(e, t, n) {
    let r = s.Z.getChannel(e);
    if (null == r)
        return;
    let i = (0, o.e)(r);
    a.Z.preload(r.guild_id, r.id), (0, l.uL)(u.Z5c.CHANNEL(i, r.id), t, n);
}
function d(e, t, n) {
    i()(null != e.parent_id, 'Thread must have a parent ID.');
    let r = (0, o.e)(e);
    (0, l.uL)(u.Z5c.CHANNEL(r, e.id), n, t);
}
