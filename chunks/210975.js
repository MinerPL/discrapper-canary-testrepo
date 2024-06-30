n.d(t, {
    m$: function () {
        return m;
    },
    wV: function () {
        return p;
    }
});
var i = n(470079), a = n(442837), l = n(470956), s = n(314897), r = n(592125), o = n(979651), c = n(441894);
function u(e) {
    let t = (0, a.e7)([o.Z], () => o.Z.getVoiceStatesForChannel(e)), n = i.useMemo(() => Object.keys(t), [t]);
    return (0, l.Yp)(e, n);
}
function d(e) {
    let {
            channelId: t,
            location: n
        } = e, i = (0, c.J)({
            channelId: t,
            location: n
        }), l = (0, a.e7)([r.Z], () => {
            var e;
            return (null === (e = r.Z.getChannel(t)) || void 0 === e ? void 0 : e.isGuildStageVoice()) === !0;
        });
    return i && !l;
}
function h(e, t) {
    return !1;
}
function p(e) {
    var t, n;
    let {
            userId: i,
            channelId: l,
            location: r
        } = e, o = u(l), c = d({
            channelId: l,
            location: r
        }), h = (0, a.e7)([s.default], () => s.default.getId());
    return c && o.has(h) && null != i && o.has(i) && (t = 0, n = 0, !1);
}
function m(e) {
    let {
            channelId: t,
            location: n
        } = e, l = u(t), r = d({
            channelId: t,
            location: n
        }), o = (0, a.e7)([s.default], () => s.default.getId());
    return i.useMemo(() => !!(r && l.has(o)) && Array.from(l).every(e => {
        var t, n;
        return t = 0, n = 0, e === o;
    }), [
        t,
        o,
        r,
        l
    ]);
}
