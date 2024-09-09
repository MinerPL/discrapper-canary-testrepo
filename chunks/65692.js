n.d(t, {
    q: function () {
        return f;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var r = n(470079),
    l = n(250683),
    i = n(512722),
    u = n.n(i),
    s = n(442837),
    o = n(253135),
    a = n(314897),
    c = n(19780),
    d = n(760373);
function f(e) {
    let { userId: t } = e,
        n = (0, s.e7)([a.default], () => a.default.getId());
    u()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, f] = r.useState(null),
        [E, _] = r.useState(!1),
        S = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(t)),
        I = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(n)),
        g = r.useCallback(async (e, t, n, r) => {
            let i = await (0, o.Il)(d.Xj, new Uint8Array(t), e, new Uint8Array(r), n);
            f(l.fromByteArray(i)), _(!1);
        }, []),
        R = r.useRef(null);
    return (
        r.useEffect(() => {
            null != S && null != I && null == R.current && (_(!0), (R.current = setTimeout(() => g(n, I, t, S), 0)));
            let e = R.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [n, I, g, t, S]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: S,
                loading: E
            }),
            [i, E, S]
        )
    );
}
