t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(442837), u = t(314897), i = t(979651), r = t(258609);
function a() {
    let e = (0, l.e7)([u.default], () => u.default.getId()), n = (0, l.e7)([r.Z], () => r.Z.getRemoteSessionId());
    return (0, l.e7)([i.Z], () => {
        var t;
        return null !== (t = i.Z.getVoiceStateForSession(e, n)) && void 0 !== t ? t : void 0;
    });
}
