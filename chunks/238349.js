let r;
n.d(t, {
    U: function () {
        return B;
    }
}), n(47120);
var i, a, o, s, l = n(392711), u = n.n(l), c = n(683860), d = n(442837), _ = n(570140), E = n(344185), f = n(144140), h = n(314897), p = n(592125), m = n(306680), I = n(944486), T = n(823379), g = n(709054), S = n(882252);
let A = [], N = null, v = null, O = new Set(), R = c.z.LATEST_ACTIVITY, C = 0, y = [], D = !1, L = [], b = u().chain(A), M = u().chain(A), P = new Set(), U = new Set();
function w(e) {
    var t;
    return null !== (t = m.ZP.lastMessageId(e)) && void 0 !== t ? t : e;
}
function x(e) {
    return function (t, n) {
        if ((0, S.yv)(t))
            return -1;
        if ((0, S.yv)(n))
            return 1;
        if (e === c.z.LATEST_ACTIVITY)
            return g.default.compare(w(n), w(t));
        else
            return g.default.compare(n, t);
    };
}
function G() {
    y = [], r = null, v = null, O = new Set(), R = c.z.LATEST_ACTIVITY, C = 0, L = [], b = u().chain(A), M = u().chain(A), U.clear(), P.clear();
}
function k() {
    var e;
    let t = I.Z.getChannelId();
    if (null == t || !(null === (e = p.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel()))
        return G(), !1;
    F({ refreshThreadIds: !0 });
}
function B(e) {
    let t = p.Z.getChannel(e);
    return null == t ? [] : Object.values(E.Z.getThreadsForParent(t.guild_id, t.id)).map(e => {
        let {id: t} = e;
        return t;
    }).sort(x(R));
}
function F(e) {
    var t;
    let n = p.Z.getChannel(v);
    if (null == n)
        return;
    (null == e ? void 0 : e.refreshThreadIds) && (L = Object.values(E.Z.getThreadsForParent(n.guild_id, n.id)).map(e => {
        let {id: t} = e;
        return t;
    }), C = 0, D = !0), 0 !== P.size && (L = L.filter(e => !P.has(e)), P.clear()), 0 !== U.size && (L = Array.from(new Set([
        ...L,
        ...U
    ])), U.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (M = u().chain(L).sort(x(c.z.LATEST_ACTIVITY)), b = u().chain(L).sort(x(c.z.CREATION_DATE)));
    let i = (R === c.z.LATEST_ACTIVITY ? M : b).value();
    let a = (y = 0 === O.size ? i : i.filter((t = O, function (e) {
        var n;
        let r = null === (n = p.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
        return null != r && 0 !== r.length && r.some(e => t.has(e));
    }))).find(e => function (e) {
        let t = f.Z.getCount(e);
        return null === t || 0 === t;
    }(e));
    r = null == a ? null : a;
}
class V extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, E.Z, I.Z, m.ZP);
    }
    getNewThreadCount() {
        return C;
    }
    getCanAckThreads() {
        return D;
    }
    getThreadIds(e, t, n) {
        let r = e !== v, i = !(0, T.OL)(n, O), a = t !== R;
        return v = e, O = n, R = t, r ? F({ refreshThreadIds: !0 }) : a ? F({ sortThreadIds: !0 }) : i && F(), y;
    }
    getCurrentThreadIds() {
        return y;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = N;
        return N = null, e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
s = 'ForumActivePostStore', (o = 'displayName') in (a = V) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.Z = new V(_.Z, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    GUILD_CREATE: k,
    CHANNEL_SELECT: k,
    CHANNEL_DELETE: function (e) {
        let {channel: t} = e;
        if (null == t.parent_id || t.parent_id !== v)
            return !1;
        G();
    },
    THREAD_LIST_SYNC: function (e) {
        var t;
        let {guildId: n} = e;
        if (null == v || n !== (null === (t = p.Z.getChannel(v)) || void 0 === t ? void 0 : t.guild_id))
            return !1;
        F({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let {
            channel: t,
            isNewlyCreated: n
        } = e;
        if (null == t.parent_id || t.parent_id !== v || !n)
            return !1;
        t.ownerId !== h.default.getId() ? C++ : N = t.id;
    },
    THREAD_UPDATE: function (e) {
        let {channel: t} = e;
        if (null == t.parent_id || t.parent_id !== v)
            return !1;
        let n = (0, S.yv)(t.id), r = U.has(t.id);
        if (n && !r)
            U.add(t.id), F({ sortThreadIds: !0 });
        else {
            if (n || !r)
                return !1;
            U.delete(t.id), F({ sortThreadIds: !0 });
        }
    },
    THREAD_DELETE: function (e) {
        let {channel: t} = e;
        if (null == t.parent_id || t.parent_id !== v)
            return !1;
        P.add(t.id), F({ sortThreadIds: !0 });
    },
    RESORT_THREADS: function (e) {
        let {channelId: t} = e;
        if (null == t || t !== v)
            return !1;
        F({ refreshThreadIds: !0 });
    },
    CHANNEL_ACK: function (e) {
        let {channelId: t} = e;
        if (null == t || t !== v)
            return !1;
        D = !1;
    }
});
