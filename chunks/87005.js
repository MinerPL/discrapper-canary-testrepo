t.d(n, {
    f: function () {
        return f;
    }
}),
    t(47120);
var i = t(470079),
    a = t(243814),
    l = t(442837),
    o = t(384275),
    r = t(911969),
    s = t(10718),
    c = t(812236),
    d = t(148958),
    u = t(881998);
t(445392);
var m = t(783097),
    p = t(689079);
let _ = {
        commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT]
    },
    C = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function f(e, n) {
    let { sectionDescriptors: t, loading: r } = s.wi(e, _, C);
    return {
        loading: r,
        frecentApps: (function (e, n, t) {
            i.useEffect(() => {
                o.Z.fetch();
            }, []);
            let r = (0, l.Wu)([u.Z], () => {
                    var e, n;
                    return null !== (n = null === (e = u.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(a.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : [];
                }),
                s = e.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                _ = (0, d.h)(s, r);
            return i.useMemo(() => (t ? _.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : _), [_, n, t]);
        })(t, e, n)
    };
}
