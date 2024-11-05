t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(724458),
    t(47120);
var i = t(192379),
    l = t(392711),
    a = t.n(l),
    o = t(911969),
    r = t(254711),
    s = t(213459),
    c = t(10718),
    d = t(148958),
    u = t(689079);
function m(e) {
    var n;
    let { channel: t } = e,
        l = (0, s.LD)(t.guild_id, !0),
        { commandsByActiveSection: m, loading: p } = c.wi({
            channel: t,
            filters: {
                commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: u.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        h = i.useMemo(
            () =>
                m.reduce((e, n) => {
                    let { section: t, data: i } = n;
                    return i.length > 0 && e.add(t.id), e;
                }, new Set()),
            [m]
        ),
        f = i.useMemo(() => {
            var e, n;
            return Object.values(null !== (n = null === (e = l.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {})
                .map((e) => {
                    let { descriptor: n } = e;
                    return n;
                })
                .filter((e) => !(e.id in r.Tm) && h.has(e.id));
        }, [null === (n = l.result) || void 0 === n ? void 0 : n.sections, h]),
        C = (0, d.h)(f),
        v = i.useMemo(
            () =>
                a()
                    .compact(
                        C.map((e) => {
                            let { application: n } = e;
                            return n;
                        })
                    )
                    .map((e) => ({ application: e })),
            [C]
        );
    return {
        appsInThisServer: v,
        isLoading: l.fetchState.fetching || p.current
    };
}
