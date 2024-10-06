n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n(442837),
    s = n(750881),
    o = n(353647),
    l = n(26033),
    u = n(180335),
    c = n(561308),
    d = n(199902),
    _ = n(314897),
    E = n(158776),
    f = n(27144),
    h = n(579264),
    p = n(981631);
let I = [],
    m = [];
function T(e) {
    let { pastActivityEnabled: t } = (0, f.z)({
            location: 'useUserProfileActivity',
            autoTrackExposure: !0
        }),
        n = (0, a.e7)([_.default], () => _.default.getId() === e),
        T = t || n,
        S = (0, a.e7)([E.Z], () => E.Z.getActivities(e)),
        g = (0, a.e7)([o.Z], () => (T ? o.Z.getUserOutbox(e) : void 0)),
        A = (0, s.aK)('use-user-profile-activity'),
        N = (0, a.e7)([d.Z], () => (A ? d.Z.getAnyDiscoverableStreamForUser(e) : d.Z.getAnyStreamForUser(e)), [A, e]),
        { live: O, recent: R } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    S.filter((e) => {
                        let { type: t } = e;
                        return t !== p.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == g ? void 0 : g.entries.filter((t) => ((0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, h.Z)(t) && !(0, c.kr)(t)));
            return {
                live: 0 === e.length ? I : e,
                recent: null == t || 0 === t.length ? m : t
            };
        }, [S, g]);
    return {
        live: O,
        recent: R,
        stream: N,
        outbox: g
    };
}
