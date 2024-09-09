n.d(t, {
    YO: function () {
        return m;
    },
    lG: function () {
        return I;
    },
    mq: function () {
        return T;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(570140),
    s = n(594174),
    o = n(78839),
    l = n(295226),
    u = n(74538),
    c = n(775412),
    d = n(163684),
    _ = n(518638),
    E = n(748770),
    f = n(1844),
    h = n(474936);
function p(e, t, n, a) {
    let s = (0, i.Wu)([f.Z], () => f.Z.outboundPromotions),
        o = (0, i.e7)([f.Z], () => f.Z.consumedInboundPromotionId);
    return r.useMemo(() => s.filter((r) => r.id !== o && !!(0, _.ZC)(r) && !n && ((!e && !t) || (0, _.Qf)(r, a))), [s, o, n, e, t, a]);
}
function I() {
    let e = (0, i.e7)([f.Z], () => f.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, c._O)(),
        I = (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        m = (0, i.e7)([o.ZP], () => o.ZP.inReverseTrial()),
        [T, S] = r.useState(!1),
        [g, A] = r.useState([]);
    r.useEffect(() => {
        null != e && a.Z.wait(() => E.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let N = r.useCallback((e) => {
            A((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        O = u.ZP.isPremiumExactly(t, h.p9.TIER_2),
        R =
            d.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !O,
                    disable: O
                }
            ).enabled || O;
    r.useEffect(() => {
        a.Z.wait(() => {
            R && null == e && E.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, R]),
        r.useEffect(() => {
            a.Z.wait(() => {
                (0, _.t8)()
                    .then((e) => {
                        A(e), S(!0);
                    })
                    .catch(() => {
                        A([]), S(!0);
                    });
            });
        }, []);
    let v = {};
    for (let { code: e, promotion: t } of g) v[t.id] = e;
    let C = p(n, I, m, v),
        y = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            })
        ),
        L = g.filter((e) => {
            let { promotion: t } = e;
            return !y.has(t.id);
        });
    return {
        promotionsLoaded: T && (!R || null != e),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: L.filter((e) => (0, _.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: v,
        addClaimedOutboundPromotionCode: N
    };
}
function m() {
    let e = (0, i.e7)([f.Z], () => f.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        a = p(
            t,
            n,
            (0, i.e7)([o.ZP], () => o.ZP.inReverseTrial()),
            {}
        );
    return r
        .useMemo(
            () =>
                null == e
                    ? a
                    : a.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [a, e]
        )
        .filter((e) => (0, _.ZC)(e));
}
function T() {
    return { promotion: (0, i.e7)([f.Z], () => f.Z.bogoPromotion) };
}
