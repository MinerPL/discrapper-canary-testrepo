n.d(t, {
    BQ: function () {
        return w;
    },
    CQ: function () {
        return I;
    },
    Ld: function () {
        return U;
    },
    Z2: function () {
        return x;
    },
    bN: function () {
        return p;
    },
    xt: function () {
        return P;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(759174),
    d = n(570140),
    _ = n(314897),
    E = n(271383),
    f = n(709054),
    h = n(765305);
let p = {
    EVENT: 'event',
    EVENT_ACTIVE: 'active',
    EVENT_UPCOMING: 'event-upcoming',
    GUILD_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    GUILD_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING)
};
function I(e) {
    let { id: t, scheduled_start_time: n } = e,
        r = P(e) ? '\0' : '\x01';
    return ''.concat(r, '-').concat(new Date(n).getTime(), '-').concat(t);
}
let m = new c.h((e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return null != n && i.push(n), i.push(p.GUILD_EVENT(t)), null != r && i.push(p.CHANNEL_EVENT(r)), P(e) && (i.push(p.EVENT_ACTIVE), i.push(p.GUILD_EVENT_ACTIVE(t)), null != r && i.push(p.CHANNEL_EVENT_ACTIVE(r))), U(e) && (i.push(p.EVENT_UPCOMING), i.push(p.GUILD_EVENT_UPCOMING(t)), null != r && i.push(p.CHANNEL_EVENT_UPCOMING(r))), i;
    }, I),
    T = 0,
    S = [],
    g = 'SERIES',
    A = {},
    N = {};
function O(e) {
    m.set(e.id, e), (T += 1);
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    m.delete(e), delete A[e], t && delete N[e], (T += 1);
}
function v(e) {
    return null != e ? e : g;
}
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == A[r] && (A[r] = {});
    let i = v(e.guild_scheduled_event_exception_id);
    null == A[r][i] && (A[r][i] = {}),
        (A[r][i][e.user_id] = e),
        t &&
            (function (e) {
                var t, n;
                let r = v(e.guild_scheduled_event_exception_id),
                    i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                    a = (null != e.guild_scheduled_event_exception_id && e.response === h.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === h.gv.INTERESTED) ? 1 : -1;
                L(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + a);
            })(e),
        n && (T += 1);
}
function y(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = v(e.guild_scheduled_event_exception_id),
        o = (null === (n = A[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t[e.user_id]) != null,
        l = e.user_id === _.default.getId();
    (o || !l) &&
        (null === (i = A[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[s]) || void 0 === r || delete r[e.user_id],
        (function (e) {
            var t, n;
            let r = v(e.guild_scheduled_event_exception_id),
                i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                a = (null != e.guild_scheduled_event_exception_id && e.response === h.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === h.gv.INTERESTED) ? -1 : 1;
            L(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + a);
        })(e),
        a && (T += 1));
}
function L(e, t, n) {
    let r = v(t);
    null == N[e] && (N[e] = {}), (N[e][r] = n);
}
function D(e, t) {
    m.values(p.GUILD_EVENT(e)).forEach((e) => R(e.id, t));
}
function b(e) {
    let { guildScheduledEvent: t } = e;
    return O(t), !0;
}
function M(e) {
    let { eventException: t } = e,
        n = m.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return (
        r < 0 ? i.push(t) : (i[r] = t),
        O({
            ...n,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function P(e) {
    return null != e && (null == e ? void 0 : e.status) === h.p1.ACTIVE;
}
function U(e) {
    return !h.$I.has(e.status);
}
function w(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1000 * t;
}
function x(e) {
    return null != e && h.$I.has(e.status);
}
class G extends (r = u.ZP.Store) {
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null !== (t = m.get(e)) && void 0 !== t ? t : null;
    }
    getGuildEventCountByIndex(e) {
        return m.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : m.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return m.values(e);
    }
    getRsvpVersion() {
        return T;
    }
    getRsvp(e, t, n) {
        var r, i;
        if (null == e) return null;
        let a = v(t);
        return null === (i = A[e]) || void 0 === i ? void 0 : null === (r = i[a]) || void 0 === r ? void 0 : r[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = _.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            a = (null == r ? void 0 : r.response) === h.gv.INTERESTED,
            s = (null == i ? void 0 : i.response) === h.gv.INTERESTED,
            o = (null == i ? void 0 : i.response) === h.gv.UNINTERESTED;
        return (a && !o) || s;
    }
    getUserCount(e, t) {
        var n, r, i, a;
        if (null == e) return 0;
        let s = null !== (i = null === (n = N[e]) || void 0 === n ? void 0 : n[g]) && void 0 !== i ? i : 0;
        return null == t ? s : s - (null !== (a = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : 0);
    }
    hasUserCount(e, t) {
        var n;
        let r = v(t);
        return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null;
    }
    isActive(e) {
        return null != e && P(m.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(p.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, r;
        if (null == e) return {};
        let i = v(t);
        return null !== (r = null === (n = A[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {};
    }
}
(s = 'GuildScheduledEventStore'),
    (a = 'displayName') in (i = G)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new G(d.Z, {
        CONNECTION_OPEN: function (e) {
            let { guilds: t } = e;
            return m.clear(), (T = 0), (A = {}), (N = {}), S.forEach(O), t.forEach((e) => e.guild_scheduled_events.forEach((e) => O(e))), !0;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return D(t.id, !1), t.guild_scheduled_events.forEach((e) => O(e)), !0;
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return D(t.id, !0), !0;
        },
        FETCH_GUILD_EVENT: function (e) {
            let { guildScheduledEvent: t } = e;
            O(t);
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: t, guildScheduledEvents: n } = e,
                r = m.values(p.GUILD_EVENT(t), !0).map((e) => e.id),
                i = n.map((e) => e.id);
            for (let e of (l()
                .difference(r, i)
                .forEach((e) => {
                    R(e);
                }),
            n))
                O(e);
            return !0;
        },
        GUILD_SCHEDULED_EVENT_CREATE: b,
        GUILD_SCHEDULED_EVENT_UPDATE: b,
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e;
            return R(t.id), !0;
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            var t, n;
            let { userId: r, guildEventId: i, guildId: a, guildEventExceptionId: s, response: o } = e,
                l = v(s),
                u = null === (n = A[i]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[r];
            null != u && y(u, !1);
            let c = E.ZP.getMember(a, r);
            return (
                C({
                    user_id: r,
                    guild_scheduled_event_id: i,
                    member: null != c ? c : void 0,
                    guild_scheduled_event_exception_id: s,
                    response: o
                }),
                !0
            );
        },
        GUILD_SCHEDULED_EVENT_USER_REMOVE: function (e) {
            let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
            y({
                user_id: t,
                guild_scheduled_event_id: n,
                guild_scheduled_event_exception_id: r,
                response: i
            });
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function (e) {
            let { guildScheduledEventUsers: t } = e;
            return t.forEach((e) => C(e, !1, !1)), (T += 1), !0;
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
            let { guildScheduledEventUsers: t } = e;
            return t.forEach((e) => C(e, !1, !1)), (T += 1), !0;
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function (e) {
            let { eventId: t, counts: n } = e;
            L(t, null, n.eventCount),
                f.default.forEachKey(n.recurrenceCounts, (e) => {
                    L(t, e, n.eventCount - n.recurrenceCounts[e]);
                });
        },
        INVITE_RESOLVE_SUCCESS: function (e) {
            let { invite: t } = e,
                n = t.guild_scheduled_event;
            return null != n && (O(n), !0);
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: M,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: M,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
            let { eventException: t } = e,
                n = m.get(t.event_id);
            if (null == n) return !1;
            let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
            return (
                O({
                    ...n,
                    guild_scheduled_event_exceptions: r
                }),
                !0
            );
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
            let { eventId: t } = e,
                n = m.get(t);
            return (
                null != n &&
                (O({
                    ...n,
                    guild_scheduled_event_exceptions: []
                }),
                !0)
            );
        },
        LOGOUT: function () {
            return m.clear(), !0;
        }
    }));
