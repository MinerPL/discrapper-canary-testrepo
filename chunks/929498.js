n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n(442837),
    s = n(353647),
    o = n(26033),
    l = n(180335),
    u = n(561308),
    c = n(199902),
    d = n(314897),
    _ = n(158776),
    E = n(27144),
    f = n(622058),
    h = n(981631);
let p = [],
    m = [];
function I(e) {
    let { pastActivityEnabled: t, selfPastActivityEnabled: n } = (0, E.z)({ location: 'useUserProfileActivity' }),
        I = (0, a.e7)([d.default], () => d.default.getId() === e),
        T = t || (n && I),
        g = (0, a.e7)([_.Z], () => _.Z.getActivities(e)),
        S = (0, a.e7)([s.Z], () => (T ? s.Z.getUserOutbox(e) : void 0)),
        A = (0, a.e7)([c.Z], () => c.Z.getAnyStreamForUser(e)),
        { live: N, recent: v } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    g.filter((e) => {
                        let { type: t } = e;
                        return t !== h.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id
                ),
                t = null == S ? void 0 : S.entries.filter((t) => ((0, o.y0)(t) ? !e.some((e) => null != e && (0, l.RL)(t, e)) : (0, f.R)(t) && !(0, u.kr)(t)));
            return {
                live: 0 === e.length ? p : e,
                recent: null == t || 0 === t.length ? m : t
            };
        }, [g, null == S ? void 0 : S.entries]);
    return {
        live: N,
        recent: v,
        stream: A,
        outbox: S
    };
}
