n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(135869),
    s = n(763296),
    o = n(242291),
    l = n(22382),
    u = n(747071);
function c(e, t) {
    let { currentPreviewRef: n } = r.useContext(a.Z),
        [c, d] = r.useState(!1),
        _ = (0, i.e7)([s.Z], () => s.Z.isPlayingSound(e.soundId), [e]),
        E = r.useCallback(
            (r) => {
                null != n.current && n.current.pause(), null != t && (0, o.GN)(e, t, r);
            },
            [e, n, t]
        ),
        f = r.useCallback(() => {
            let t = new Audio((0, l.Z)(e.soundId));
            null != n.current && n.current.pause(), (n.current = t), (t.currentTime = 0), (t.volume = (0, u.Z)(e.volume)), t.play(), d(!0), t.addEventListener('pause', () => d(!1), { once: !0 });
        }, [e, n]);
    return (
        r.useCallback(
            () => () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.pause();
            },
            [n]
        ),
        {
            playSoundboardSound: E,
            isPlayingSound: _,
            previewSound: f,
            isPreviewingSound: c
        }
    );
}
