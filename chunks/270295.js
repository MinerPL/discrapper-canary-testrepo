n.d(t, {
    Z: function () {
        return o;
    }
}), n(47120);
var i = n(470079), a = n(442837), l = n(314897), s = n(471253), r = n(590415);
function o(e) {
    let t = (0, a.e7)([l.default], () => l.default.getId()), n = (0, r.ZP)(t, e.id), o = n === r.xO.REQUESTED_TO_SPEAK || n === r.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, [c, u] = i.useState(o);
    return i.useEffect(() => {
        u(o);
    }, [o]), [
        c,
        function () {
            n === r.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, s.RK)(e, !0) : (0, s.Q1)(e, !c), u(!c);
        }
    ];
}
