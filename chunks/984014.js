n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(442837), a = n(872810), l = n(199902), s = n(314897);
function r(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getId()), r = (0, i.e7)([l.Z], () => {
            let t = l.Z.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]), o = (0, i.e7)([l.Z], () => l.Z.isSelfStreamHidden(e), [e]);
    return [
        (null == t || t === n) && r,
        o,
        t => {
            (0, a.pR)(e, t);
        }
    ];
}
