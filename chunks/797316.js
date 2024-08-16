let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(177523),
    E = n(353926),
    f = n(768419),
    h = n(314897),
    p = n(439170),
    m = n(433355),
    I = n(592125),
    T = n(486472),
    g = n(271383),
    S = n(430824),
    A = n(19780),
    N = n(699516),
    v = n(944486),
    O = n(914010),
    R = n(981631);
let C = new _.ZP((e) => {
    for (let t in e) null == S.Z.getGuild(t) && !T.Z.isUnavailable(t) && delete e[t];
    d.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function y(e, t) {
    let n = {};
    C.forEach((i) => {
        var a;
        i !== O.Z.getGuildId() && i !== A.Z.getGuildId() && i !== (null === (a = I.Z.getChannel(v.Z.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == r || r.guildId !== i) && (C.clearWithoutFlushing(i, e), t && (n[i] = C.get(i)));
    }),
        !u().isEmpty(n) &&
            d.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: n
            });
}
function D(e, t) {
    return C.subscribeToGuild(e), null != t && m.ZP.getSection(t) === R.ULH.MEMBERS && L(e, t, _.KV);
}
function L(e, t, n) {
    if (t === p.oL) return C.subscribeChannel(e, t, n);
    let r = I.Z.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === R.I_8 && C.subscribeToGuild(i), null != r && r.isThread()) ? (r.type === R.d4z.ANNOUNCEMENT_THREAD ? C.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && C.subscribeThreadMemberList(i, t, v.Z.getChannelId())) : C.subscribeChannel(i, t, n);
}
function b(e) {
    let { type: t } = e;
    'CONNECTION_OPEN' === t && y(!0, !1);
    let n = O.Z.getGuildId();
    null != n && D(n, v.Z.getChannelId(n));
    let r = {};
    C.forEach((e) => {
        null == S.Z.getGuild(e) ? C.clearWithoutFlushing(e, !0) : (r[e] = C.get(e));
    }),
        !u().isEmpty(r) &&
            d.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: r
            });
}
function M(e) {
    let { guildId: t, channelId: n } = e;
    return !T.Z.isUnavailable(t) && D(t, n);
}
function P() {
    return D(O.Z.getGuildId(), v.Z.getChannelId());
}
function U() {
    let e = f.Z.getSyncingWith();
    if (null == e) null != r && (C.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || N.Z.isFriend(t)) return !1;
        let n = g.ZP.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = {
            guildId: i,
            userId: t
        }),
            C.subscribeUser(i, t);
    }
    return !1;
}
class w extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, S.Z, O.Z, v.Z, A.Z, h.default, m.ZP, E.Z), this.syncWith([f.Z], U), this.syncWith([m.ZP], P);
    }
    getSubscribedThreadIds() {
        return C.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return C.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return C.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return C.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = C.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
(o = 'GuildSubscriptionsStore'),
    (s = 'displayName') in (a = w)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new w(d.Z, {
        CONNECTION_OPEN: b,
        CONNECTION_RESUMED: b,
        CONNECTION_CLOSED: function () {
            y(!1, !1);
        },
        IDLE: function (e) {
            let { idle: t } = e;
            if (!t) return !1;
            y(!1, !0);
        },
        LOGOUT: function () {
            C.reset();
        },
        VOICE_CHANNEL_SELECT: M,
        CHANNEL_SELECT: M,
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            t.id === O.Z.getGuildId() && P();
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            C.clearWithoutFlushing(t.id, !0);
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
            let { guildId: t, userIds: n } = e;
            return (
                n.forEach((e) => {
                    e !== h.default.getId() && C.subscribeUser(t, e);
                }),
                !1
            );
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
            let { guildId: t, userIds: n } = e;
            return (
                n.forEach((e) => {
                    C.unsubscribeUser(t, e);
                }),
                !1
            );
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
            let { guildId: t } = e;
            C.subscribeToMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
            let { guildId: t } = e;
            C.unsubscribeFromMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
            let { guildId: t, channelId: n, ranges: r } = e;
            return L(t, n, r);
        },
        GUILD_SUBSCRIPTIONS: function (e) {
            let { guildId: t } = e;
            return C.subscribeToGuild(t);
        },
        CHANNEL_PRELOAD: function (e) {
            let { guildId: t, channelId: n } = e;
            return D(t, n);
        },
        INBOX_OPEN: function (e) {
            let { guildIds: t } = e;
            for (let e of t) null != e && C.subscribeToGuild(e);
            return !1;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return t.isArchivedThread() ? C.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && v.Z.getChannelId() === t.id && void C.subscribeThreadMemberList(t.guild_id, t.id, v.Z.getChannelId());
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            return C.unsubscribeThreadMemberList(t.guild_id, t.id);
        },
        THREAD_LIST_SYNC: P
    }));
