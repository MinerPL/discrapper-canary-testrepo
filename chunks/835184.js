var i, c = t(442837), r = t(570140), l = t(314897), a = t(924301), u = t(658041), o = t(765305);
function d(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let s = {}, _ = {};
function E(e) {
    let n = { ...s };
    delete n[e], s = n;
    let t = { ..._ };
    delete t[e], _ = t;
}
class f extends (i = c.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, t;
            s = null !== (n = e.upcomingEventDismissals) && void 0 !== n ? n : {}, _ = null !== (t = e.upcomingEventSeenTimestamps) && void 0 !== t ? t : {};
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return s[e];
    }
    getAllEventDismissals() {
        return s;
    }
    getUpcomingNoticeSeenTime(e) {
        return _[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return _;
    }
    getState() {
        return {
            upcomingEventDismissals: s,
            upcomingEventSeenTimestamps: _
        };
    }
}
d(f, 'displayName', 'UpcomingEventNoticesStore'), d(f, 'persistKey', 'UpcomingEventNotices'), n.Z = new f(r.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let {eventId: n} = e, t = { ...s };
        t[n] = Date.now(), s = t;
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let {guildScheduledEvent: n} = e;
        (n.status === o.p1.CANCELED || n.status === o.p1.COMPLETED) && E(n.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let {guildScheduledEvent: n} = e;
        E(n.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let {
            userId: n,
            guildEventId: t
        } = e;
        if (n !== l.default.getId())
            return;
        let i = a.ZP.getGuildScheduledEvent(t);
        if (null == i || i.status !== o.p1.SCHEDULED || null != s[t])
            return;
        let c = _[t];
        if ((0, u.M)(i, void 0, c, !1) === o.X_.NEW_EVENT) {
            let e = { ...s };
            e[t] = Date.now(), s = e;
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let {guildEventId: n} = e, t = { ..._ };
        t[n] = Date.now(), _ = t;
    }
});
