n.d(t, {
    c: function () {
        return o;
    }
}), n(913527);
var i = n(442837), s = n(91159), a = n(306680), r = n(709054), l = n(868807);
function o(e) {
    let t = (0, l.a)(e), n = function (e) {
            let {
                lastMessageId: t,
                message: n,
                loaded: i
            } = e;
            return i && null != n ? r.default.extractTimestamp(n.id) : null != t ? r.default.extractTimestamp(t) : null;
        }({
            lastMessageId: (0, i.e7)([a.ZP], () => a.ZP.lastMessageId(e.id)),
            ...t
        });
    return null == n ? '' : (0, s.Ye)(n);
}
