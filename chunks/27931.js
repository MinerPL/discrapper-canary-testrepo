n.d(t, {
    Dx: function () {
        return m;
    },
    aP: function () {
        return _;
    }
}), n(653041), n(47120);
var i, a, l = n(470079), s = n(392711), r = n(442837), o = n(638730), c = n(358221), u = n(136015), d = n(565799), h = n(431328), p = n(501655);
function m(e) {
    let t = (0, h.Rk)(e, p.pV.AUDIENCE), [n, i] = l.useState(!1);
    return l.useEffect(() => {
        t > 100 ? i(!0) : t < 75 && i(!1);
    }, [t]), n ? 5000 : 0;
}
function _(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = function (e, t, n) {
            let i = (0, r.e7)([d.Z], () => [
                    e,
                    d.Z.getParticipantsVersion(e)
                ], [e], u.Q), a = (0, r.e7)([c.Z], () => c.Z.getSelectedParticipantId(e), [e]);
            return l.useMemo(() => {
                let l = [], r = [], o = -1, c = [];
                if (n)
                    for (let t of d.Z.getMutableParticipants(e, p.pV.SPEAKER))
                        if (t.type === p.Ui.STREAM)
                            t.id !== a && c.push(t), o++;
                        else
                            break;
                let u = (e, t, n) => {
                        let i = n ? e.filter((e, t) => e.id !== a && t > o) : e, c = (0, s.chunk)(i, t);
                        r.push(c), l.push(c.length);
                    }, h = null != a ? d.Z.getParticipant(e, a) : null;
                return (null == h ? void 0 : h.speaker) ? u([h], 1, !1) : u([], 1, !1), [
                    p.pV.SPEAKER,
                    p.pV.AUDIENCE
                ].forEach(e => {
                    u(d.Z.getMutableParticipants(i[0], e), t[e], e === p.pV.SPEAKER);
                }), u(c, 1, !1), [
                    l,
                    r
                ];
            }, [
                i,
                t,
                a,
                n,
                e
            ]);
        }(e, t, i), [h, m] = a, [_, f] = (0, o.T)(a, n, [t[p.pV.AUDIENCE]]), E = [
            h[i ? 3 : 0],
            h[1],
            _[2]
        ];
    return [
        E,
        [
            m[i ? 3 : 0],
            m[1],
            f[2]
        ]
    ];
}
(a = i || (i = {}))[a.SELECTED = 0] = 'SELECTED', a[a.SPEAKER = 1] = 'SPEAKER', a[a.AUDIENCE = 2] = 'AUDIENCE', a[a.MEDIA = 3] = 'MEDIA';
