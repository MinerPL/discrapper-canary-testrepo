t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(442837),
    i = t(314897),
    u = t(979651),
    r = t(258609);
function a() {
    return (0, l.e7)(
        [i.default, u.Z, r.Z],
        () => {
            var e;
            let n = i.default.getId(),
                t = r.Z.getRemoteSessionId();
            return null !== (e = u.Z.getVoiceStateForSession(n, t)) && void 0 !== e ? e : void 0;
        },
        []
    );
}
