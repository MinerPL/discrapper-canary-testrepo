n.d(t, {
    q: function () {
        return d;
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
    i = n(250683),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    u = n(253135),
    l = n(314897),
    c = n(19780),
    E = n(760373);
function d(e) {
    let { userId: t } = e,
        n = (0, s.e7)([l.default], () => l.default.getId());
    o()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [a, d] = r.useState(null),
        [f, _] = r.useState(!1),
        h = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(t)),
        y = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(n)),
        I = r.useCallback(async (e, t, n, r) => {
            _(!0);
            let a = await (0, u.Il)(E.Xj, new Uint8Array(t), e, new Uint8Array(r), n);
            d(i.fromByteArray(a)), _(!1);
        }, []);
    return (
        r.useEffect(() => {
            null != h && null != y && I(n, y, t, h);
        }, [n, y, I, t, h]),
        r.useMemo(
            () => ({
                fingerprint: a,
                userKey: h,
                loading: f
            }),
            [a, f, h]
        )
    );
}
