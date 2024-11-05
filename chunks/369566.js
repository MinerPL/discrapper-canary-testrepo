n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    a = n(442837),
    s = n(750881),
    o = n(353647),
    l = n(26033),
    u = n(180335),
    c = n(561308),
    d = n(199902),
    f = n(158776),
    _ = n(699516),
    h = n(626135),
    p = n(981631);
let m = [],
    g = [];
function E(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getActivities(e)),
        n = (0, a.e7)([o.Z], () => o.Z.getUserOutbox(e)),
        { enabled: E, analyticsEligible: v } = (0, s.R4)('use-user-profile-activity'),
        { stream: I, nonExperimentStream: S } = (0, a.cj)(
            [d.Z],
            () => {
                let t = d.Z.getAnyStreamForUser(e);
                return E
                    ? {
                          stream: d.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: t
                      }
                    : {
                          stream: t,
                          nonExperimentStream: t
                      };
            },
            [E, e]
        ),
        T = (0, a.e7)([_.Z], () => _.Z.getRelationshipType(e));
    (0, r.useEffect)(() => {
        if (v && null != S) {
            var t;
            h.default.track(p.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: e,
                discoverable: null === (t = null == S ? void 0 : S.discoverable) || void 0 === t || t,
                surface: 'user-profile-activity',
                relationship_type: T,
                treatment: E && (null == S ? void 0 : S.discoverable) === !1 ? s.h9.HIDE : s.h9.SHOW
            });
        }
    }, [S, E, v, e, T]);
    let { live: b, recent: y } = (0, r.useMemo)(() => {
        let e = (0, i.uniqWith)(
                t.filter((e) => {
                    let { type: t } = e;
                    return t !== p.IIU.CUSTOM_STATUS;
                }),
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            ),
            r = null == n ? void 0 : n.entries.filter((t) => !(0, c.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.pB)(t, e)) : (0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, l.LP)(t)));
        return {
            live: 0 === e.length ? m : e,
            recent: null == r || 0 === r.length ? g : r
        };
    }, [t, null == n ? void 0 : n.entries]);
    return {
        live: b,
        recent: y,
        stream: I,
        outbox: n
    };
}
