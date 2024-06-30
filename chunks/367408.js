n.d(t, {
    M: function () {
        return d;
    }
}), n(852437);
var i = n(70956), a = n(359119), l = n(116347), s = n(444957), r = n(403485), o = n(276618);
let c = 1 * i.Z.Millis.HOUR, u = 12 * i.Z.Millis.HOUR;
function d(e) {
    var t;
    let n = (0, s.h)(e), i = (0, r.h)(e), d = (0, o.o)(e);
    if (null == n || d || (0, l.tX)(i))
        return;
    let h = i.some(e => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1), p = i.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
    if (p.length < 1 || !function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e)
                return !0;
            let n = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= n;
        }(p[0].dismiss_timestamp, h))
        return;
    let m = i.filter(e => null == e.dismiss_timestamp);
    return null !== (t = m.findLast(e => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : m.findLast(e => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
}
