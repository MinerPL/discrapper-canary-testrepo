n.d(t, {
    Z: function () {
        return d;
    },
    w: function () {
        return c;
    }
});
var r = n(442837),
    i = n(496675),
    a = n(700785),
    s = n(231338);
let o = [s.Pl.SET_VOICE_CHANNEL_STATUS, s.Pl.CONNECT, s.Pl.VIEW_CHANNEL],
    l = [s.Pl.SET_VOICE_CHANNEL_STATUS];
function u(e, t, n, r) {
    return (n ? l : o).every((n) =>
        null == r
            ? t.can(n, e)
            : a.BT({
                  permission: n,
                  user: r,
                  context: e
              })
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return u(e, i.Z, t, n);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, r.e7)([i.Z], () => u(e, i.Z, t, n), [e, t, n]);
}
