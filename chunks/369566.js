n.d(t, {
    Z: function () {
        return T;
    },
    _: function () {
        return m;
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
    f = n(579264),
    h = n(981631);
let p = [],
    I = [];
function m(e, t) {
    let n = (0, a.e7)([_.Z], () => _.Z.getActivities(e)),
        c = (0, a.e7)([s.Z], () => (t ? s.Z.getUserOutbox(e) : void 0));
    return (0, r.useMemo)(() => {
        let e = (0, i.uniqWith)(
                n.filter((e) => {
                    let { type: t } = e;
                    return t !== h.IIU.CUSTOM_STATUS;
                }),
                (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id
            ),
            t = null == c ? void 0 : c.entries.filter((t) => ((0, o.y0)(t) ? !e.some((e) => null != e && (0, l.RL)(t, e)) : (0, f.Z)(t) && !(0, u.kr)(t)));
        return {
            live: 0 === e.length ? p : e,
            recent: null == t || 0 === t.length ? I : t,
            outbox: c
        };
    }, [n, c]);
}
function T(e) {
    let { pastActivityEnabled: t } = (0, E.z)({ location: 'useUserProfileActivity' }),
        n = (0, a.e7)([d.default], () => d.default.getId() === e),
        r = (0, a.e7)([c.Z], () => c.Z.getAnyStreamForUser(e)),
        { live: i, recent: s, outbox: o } = m(e, t || n);
    return {
        live: i,
        recent: s,
        stream: r,
        outbox: o
    };
}
