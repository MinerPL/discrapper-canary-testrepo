t.d(n, {
    Vm: function () {
        return Z;
    },
    ZP: function () {
        return h;
    },
    eF: function () {
        return D;
    },
    gM: function () {
        return b;
    },
    k5: function () {
        return S;
    },
    qY: function () {
        return g;
    },
    sz: function () {
        return P;
    },
    u1: function () {
        return m;
    }
}), t(47120), t(724458);
var i = t(470079), c = t(442837), r = t(241155), l = t(592125), a = t(984933), u = t(430824), o = t(496675), d = t(70956), s = t(823379), _ = t(924301), E = t(658041), f = t(835184), N = t(79874), p = t(854698), v = t(765305), C = t(981631);
let I = [], T = 15 * d.Z.Millis.MINUTE;
function h(e, n) {
    return (0, c.Wu)([
        u.Z,
        r.Z,
        _.ZP,
        o.Z,
        l.Z,
        a.ZP
    ], () => {
        let t = u.Z.getGuild(e);
        if (null == t)
            return I;
        if (t.hasFeature(C.oNc.HUB)) {
            var i, c;
            let e = null === (i = a.ZP.getDefaultChannel(t.id)) || void 0 === i ? void 0 : i.id;
            return (null !== (c = r.Z.getEventDirectoryEntries(e)) && void 0 !== c ? c : []).map(e => {
                let n = e.scheduledEventId, t = _.ZP.getGuildScheduledEvent(n);
                return null != t ? t : r.Z.getCachedGuildScheduledEventById(n);
            }).filter(s.lm);
        }
        return _.ZP.getGuildScheduledEventsByIndex(null != n ? n : _.bN.GUILD_EVENT_UPCOMING(t.id)).filter(e => {
            let n = e.channel_id;
            if (null == n)
                return !0;
            let t = l.Z.getChannel(n);
            return o.Z.can(C.Plq.VIEW_CHANNEL, t);
        });
    }, [
        n,
        e
    ]);
}
function g(e) {
    return (0, c.e7)([
        _.ZP,
        l.Z,
        o.Z
    ], () => {
        let n = l.Z.getChannel(e);
        if (!o.Z.can(C.Plq.VIEW_CHANNEL, n) || null == (null == n ? void 0 : n.guild_id))
            return null;
        let t = _.ZP.getGuildScheduledEventsByIndex(_.bN.CHANNEL_EVENT_ACTIVE(e));
        return t.length > 0 ? t[0] : null;
    }, [e]);
}
function b(e) {
    let n = (0, c.Wu)([_.ZP], () => _.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return i.useMemo(() => {
        let e = new Map();
        return n.forEach(n => {
            let t = n.channel_id;
            null != t && e.set(t, n);
        }), e;
    }, [n]);
}
function Z(e) {
    var n, t;
    let i = (n = e, (0, c.Wu)([
            _.ZP,
            l.Z,
            o.Z
        ], () => _.ZP.getGuildScheduledEventsByIndex(_.bN.GUILD_EVENT_UPCOMING(n)).filter(e => {
            if (e.entity_type === v.WX.NONE || e.status !== v.p1.SCHEDULED)
                return !1;
            if (null == e.channel_id)
                return !0;
            let n = l.Z.getChannel(e.channel_id);
            return o.Z.can(C.Plq.VIEW_CHANNEL, n);
        }), [n])), r = (0, c.cj)([f.Z], () => f.Z.getAllEventDismissals()), a = (0, c.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()), d = (0, c.cj)([_.ZP], () => null == i ? {} : i.reduce((e, n) => {
            let t = (0, p.DK)(n);
            return {
                ...e,
                [n.id]: _.ZP.isInterestedInEventRecurrence(n.id, t)
            };
        }, {}), [i]), s = (0, c.e7)([u.Z], () => u.Z.getGuild(e)), N = null != s && !s.hasFeature(C.oNc.COMMUNITY) && s.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != i && null != d && N)
        for (let e = 0; e < i.length; e++) {
            ;
            let n = i[e], c = r[n.id], l = a[n.id], u = null !== (t = d[n.id]) && void 0 !== t && t, o = (0, E.M)(n, c, l, u);
            if (null != o)
                return {
                    upcomingEvent: n,
                    noticeType: o
                };
        }
}
function S(e) {
    return (0, c.e7)([
        _.ZP,
        l.Z,
        o.Z
    ], () => _.ZP.getGuildScheduledEventsByIndex(_.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
        if (e.entity_type === v.WX.NONE || !(0, _.xt)(e))
            return !1;
        if (null == e.channel_id)
            return !0;
        let n = l.Z.getChannel(e.channel_id);
        return o.Z.can(C.Plq.VIEW_CHANNEL, n);
    }), [e]);
}
function m(e) {
    return (0, c.e7)([_.ZP], () => _.ZP.getGuildScheduledEventsByIndex(_.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function D(e) {
    return (0, c.e7)([
        l.Z,
        _.ZP
    ], () => {
        let n = _.ZP.getGuildScheduledEventsByIndex(_.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != l.Z.getChannel(e.channel_id));
        return l.Z.getChannel(null == n ? void 0 : n.channel_id);
    }, [e]);
}
function P(e) {
    let [n, t] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            t(Date.now());
        }, T);
        return () => clearInterval(e);
    }, []);
    let r = (0, c.e7)([_.ZP], () => null == e ? [] : _.ZP.getGuildScheduledEventsByIndex(_.bN.CHANNEL_EVENT_UPCOMING(e)), [
        e,
        n
    ]);
    return i.useMemo(() => r.filter(e => {
        let {
                startTime: n,
                endTime: t
            } = (0, N.Kq)(e), {
                withinStartWindow: i,
                diffMinutes: c
            } = (0, p.ub)(n.toISOString(), null == t ? void 0 : t.toISOString());
        return e.status !== v.p1.ACTIVE && i && c < 15;
    }), [r]);
}
