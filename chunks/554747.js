t.d(n, {
    Vm: function () {
        return h;
    },
    ZP: function () {
        return A;
    },
    eF: function () {
        return L;
    },
    gM: function () {
        return O;
    },
    k5: function () {
        return v;
    },
    qY: function () {
        return C;
    },
    sz: function () {
        return m;
    },
    u1: function () {
        return M;
    }
}),
    t(47120),
    t(724458);
var l = t(470079),
    i = t(442837),
    u = t(241155),
    r = t(592125),
    a = t(984933),
    o = t(430824),
    s = t(496675),
    d = t(70956),
    c = t(823379),
    E = t(924301),
    _ = t(658041),
    N = t(835184),
    f = t(79874),
    S = t(854698),
    T = t(765305),
    Z = t(981631);
let I = [],
    g = 15 * d.Z.Millis.MINUTE;
function A(e, n) {
    return (0, i.Wu)(
        [o.Z, u.Z, E.ZP, s.Z, r.Z, a.ZP],
        () => {
            let t = o.Z.getGuild(e);
            if (null == t) return I;
            if (t.hasFeature(Z.oNc.HUB)) {
                var l, i;
                let e = null === (l = a.ZP.getDefaultChannel(t.id)) || void 0 === l ? void 0 : l.id;
                return (null !== (i = u.Z.getEventDirectoryEntries(e)) && void 0 !== i ? i : [])
                    .map((e) => {
                        let n = e.scheduledEventId,
                            t = E.ZP.getGuildScheduledEvent(n);
                        return null != t ? t : u.Z.getCachedGuildScheduledEventById(n);
                    })
                    .filter(c.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(null != n ? n : E.bN.GUILD_EVENT_UPCOMING(t.id)).filter((e) => {
                let n = e.channel_id;
                if (null == n) return !0;
                let t = r.Z.getChannel(n);
                return s.Z.can(Z.Plq.VIEW_CHANNEL, t);
            });
        },
        [n, e]
    );
}
function C(e) {
    return (0, i.e7)(
        [E.ZP, r.Z, s.Z],
        () => {
            let n = r.Z.getChannel(e);
            if (!s.Z.can(Z.Plq.VIEW_CHANNEL, n) || null == (null == n ? void 0 : n.guild_id)) return null;
            let t = E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_ACTIVE(e));
            return t.length > 0 ? t[0] : null;
        },
        [e]
    );
}
function O(e) {
    let n = (0, i.Wu)([E.ZP], () => E.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return l.useMemo(() => {
        let e = new Map();
        return (
            n.forEach((n) => {
                let t = n.channel_id;
                null != t && e.set(t, n);
            }),
            e
        );
    }, [n]);
}
function h(e) {
    var n, t;
    let l =
            ((n = e),
            (0, i.Wu)(
                [E.ZP, r.Z, s.Z],
                () =>
                    E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_UPCOMING(n)).filter((e) => {
                        if (e.entity_type === T.WX.NONE || e.status !== T.p1.SCHEDULED) return !1;
                        if (null == e.channel_id) return !0;
                        let n = r.Z.getChannel(e.channel_id);
                        return s.Z.can(Z.Plq.VIEW_CHANNEL, n);
                    }),
                [n]
            )),
        u = (0, i.cj)([N.Z], () => N.Z.getAllEventDismissals()),
        a = (0, i.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
        d = (0, i.cj)(
            [E.ZP],
            () =>
                null == l
                    ? {}
                    : l.reduce((e, n) => {
                          let t = (0, S.DK)(n);
                          return {
                              ...e,
                              [n.id]: E.ZP.isInterestedInEventRecurrence(n.id, t)
                          };
                      }, {}),
            [l]
        ),
        c = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
        f = null != c && !c.hasFeature(Z.oNc.COMMUNITY) && c.hasFeature(Z.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != l && null != d && f)
        for (let e = 0; e < l.length; e++) {
            let n = l[e],
                i = u[n.id],
                r = a[n.id],
                o = null !== (t = d[n.id]) && void 0 !== t && t,
                s = (0, _.M)(n, i, r, o);
            if (null != s)
                return {
                    upcomingEvent: n,
                    noticeType: s
                };
        }
}
function v(e) {
    return (0, i.e7)(
        [E.ZP, r.Z, s.Z],
        () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === T.WX.NONE || !(0, E.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let n = r.Z.getChannel(e.channel_id);
                return s.Z.can(Z.Plq.VIEW_CHANNEL, n);
            }),
        [e]
    );
}
function M(e) {
    return (0, i.e7)([E.ZP], () => E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function L(e) {
    return (0, i.e7)(
        [r.Z, E.ZP],
        () => {
            let n = E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(e)).find((e) => null != r.Z.getChannel(e.channel_id));
            return r.Z.getChannel(null == n ? void 0 : n.channel_id);
        },
        [e]
    );
}
function m(e) {
    let [n, t] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            t(Date.now());
        }, g);
        return () => clearInterval(e);
    }, []);
    let u = (0, i.e7)([E.ZP], () => (null == e ? [] : E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e))), [e, n]);
    return l.useMemo(
        () =>
            u.filter((e) => {
                let { startTime: n, endTime: t } = (0, f.Kq)(e),
                    { withinStartWindow: l, diffMinutes: i } = (0, S.ub)(n.toISOString(), null == t ? void 0 : t.toISOString());
                return e.status !== T.p1.ACTIVE && l && i < 15;
            }),
        [u]
    );
}
