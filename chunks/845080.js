t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(735250), i = t(470079), o = t(778947), l = t(901461);
let u = i.memo(o.ZP);
function s(e) {
    let {
        message: n,
        channel: t,
        author: i,
        compact: o,
        animateAvatar: s,
        guildId: a,
        isGroupStart: c = !0,
        roleIcon: d,
        hideTimestamp: _
    } = e;
    return !(0, l.Z)(n) && (c || o) ? (0, r.jsx)(u, {
        message: n,
        channel: t,
        author: i,
        guildId: a,
        compact: o,
        animate: s,
        roleIcon: d,
        hideTimestamp: _
    }) : void 0;
}
