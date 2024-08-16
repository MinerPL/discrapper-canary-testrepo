l.d(e, {
    v: function () {
        return i;
    }
});
var t = l(944486),
    u = l(176505);
function i() {
    var n;
    let e = null !== (n = t.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
    return null != e && (0, u.AB)(e) ? { channel_static_route: e } : { channel_id: e };
}
