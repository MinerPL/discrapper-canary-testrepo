n.d(t, {
    Y: function () {
        return s;
    },
    o: function () {
        return o;
    }
});
var r = n(18323),
    i = n(358085),
    a = n(616922);
function s(e) {
    let t = null;
    !(0, i.isDesktop)() && (t = window.open('', '_blank')), null != t ? (t.location.href = e) : window.open(e);
}
function o(e, t) {
    s(r.Z.isProtocolRegistered() ? a.C7.PLAYER_OPEN(e, t) : a.C7.WEB_OPEN(e, t));
}
