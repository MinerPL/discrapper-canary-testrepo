let r;
n(47120);
var i, a, o, s, l = n(392711), u = n.n(l), c = n(442837), d = n(570140), _ = n(177523), E = n(353926), f = n(480384), h = n(653733), p = n(768419), m = n(314897), I = n(439170), T = n(433355), g = n(592125), S = n(486472), A = n(271383), N = n(430824), v = n(19780), O = n(699516), R = n(944486), C = n(914010), y = n(981631);
let D = new _.ZP(e => {
    for (let t in e)
        null == N.Z.getGuild(t) && !S.Z.isUnavailable(t) && delete e[t];
    d.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function L(e, t) {
    let n = {};
    D.forEach(i => {
        var a;
        i !== C.Z.getGuildId() && i !== v.Z.getGuildId() && i !== (null === (a = g.Z.getChannel(R.Z.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && !(0, h.h)(i).shouldPrioritizeSubscription && (null == r || r.guildId !== i) && (D.clearWithoutFlushing(i, e), t && (n[i] = D.get(i)));
    }), !u().isEmpty(n) && d.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: n
    });
}
function b(e, t) {
    return D.subscribeToGuild(e), null != t && T.ZP.getSection(t) === y.ULH.MEMBERS && M(e, t, _.KV);
}
function M(e, t, n) {
    if (t === I.oL)
        return D.subscribeChannel(e, t, n);
    let r = g.Z.getChannel(t);
    if (null == r)
        return !1;
    let i = r.getGuildId();
    return (i !== e && e === y.I_8 && D.subscribeToGuild(i), null != r && r.isThread()) ? r.type === y.d4z.ANNOUNCEMENT_THREAD ? D.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && D.subscribeThreadMemberList(i, t, R.Z.getChannelId()) : D.subscribeChannel(i, t, n);
}
function P(e) {
    let {type: t} = e;
    'CONNECTION_OPEN' === t && L(!0, !1), Object.keys(N.Z.getGuilds()).forEach(e => {
        (0, h.h)(e).shouldPrioritizeSubscription && M(e, I.oL, _.KV);
    });
    let n = C.Z.getGuildId();
    null != n && b(n, R.Z.getChannelId(n));
    let r = {};
    D.forEach(e => {
        null == N.Z.getGuild(e) ? D.clearWithoutFlushing(e, !0) : r[e] = D.get(e);
    }), !u().isEmpty(r) && d.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: r
    });
}
function U(e) {
    let {
        guildId: t,
        channelId: n
    } = e;
    return !S.Z.isUnavailable(t) && b(t, n);
}
function w() {
    return b(C.Z.getGuildId(), R.Z.getChannelId());
}
function x() {
    let e = p.Z.getSyncingWith();
    if (null == e)
        null != r && (D.unsubscribeUser(r.guildId, r.userId), r = null);
    else {
        let {userId: t} = e;
        if (null != r && r.userId === t || O.Z.isFriend(t))
            return !1;
        let n = A.ZP.memberOf(t);
        if (0 === n.length)
            return !1;
        let [i] = n;
        r = {
            guildId: i,
            userId: t
        }, D.subscribeUser(i, t);
    }
    return !1;
}
class G extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, N.Z, C.Z, R.Z, v.Z, m.default, T.ZP, E.Z, f.Z), this.syncWith([p.Z], x), this.syncWith([T.ZP], w);
    }
    getSubscribedThreadIds() {
        return D.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return D.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return D.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return D.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = D.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
s = 'GuildSubscriptionsStore', (o = 'displayName') in (a = G) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.Z = new G(d.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_RESUMED: P,
    CONNECTION_CLOSED: function () {
        L(!1, !1);
    },
    IDLE: function (e) {
        let {idle: t} = e;
        if (!t)
            return !1;
        L(!1, !0);
    },
    LOGOUT: function () {
        D.reset();
    },
    VOICE_CHANNEL_SELECT: U,
    CHANNEL_SELECT: U,
    GUILD_CREATE: function (e) {
        let {guild: t} = e;
        t.id === C.Z.getGuildId() && w();
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        D.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let {
            guildId: t,
            userIds: n
        } = e;
        return n.forEach(e => {
            e !== m.default.getId() && D.subscribeUser(t, e);
        }), !1;
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let {
            guildId: t,
            userIds: n
        } = e;
        return n.forEach(e => {
            D.unsubscribeUser(t, e);
        }), !1;
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let {guildId: t} = e;
        D.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let {guildId: t} = e;
        D.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let {
            guildId: t,
            channelId: n,
            ranges: r
        } = e;
        return M(t, n, r);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let {guildId: t} = e;
        return D.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return b(t, n);
    },
    INBOX_OPEN: function (e) {
        let {guildIds: t} = e;
        for (let e of t)
            null != e && D.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let {channel: t} = e;
        return t.isArchivedThread() ? D.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && R.Z.getChannelId() === t.id && void D.subscribeThreadMemberList(t.guild_id, t.id, R.Z.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let {channel: t} = e;
        return D.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: w
});
