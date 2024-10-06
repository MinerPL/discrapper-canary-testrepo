n.d(t, {
    q: function () {
        return _;
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
    c = n(131951),
    d = n(19780),
    f = n(760373),
    E = n(65154);
function _(e) {
    let { userId: t } = e,
        n = (0, s.e7)([a.default], () => a.default.getId());
    u()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, _] = r.useState(null),
        [S, I] = r.useState(!1),
        g = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        R = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(n)),
        C = r.useCallback((e) => {
            _(l.fromByteArray(e)), I(!1);
        }, []),
        m = r.useCallback(
            async (e, t, n, r) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null === (l = d.Z.getRTCConnection()) ||
                        void 0 === l ||
                        l.getMLSPairwiseFingerprint(f.Xj, n, (e) => {
                            C(new Uint8Array(e));
                        });
                } else C(await (0, o.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(r), n));
            },
            [C]
        ),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            null != g && null != R && null == h.current && (I(!0), (h.current = setTimeout(() => m(n, R, t, g), 0)));
            let e = h.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [n, R, m, t, g]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: g,
                loading: S
            }),
            [i, S, g]
        )
    );
}
