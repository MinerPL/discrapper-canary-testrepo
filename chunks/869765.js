n.d(t, {
    Y: function () {
        return r;
    }
}), n(47120), n(653041);
var r, i, a, o = n(31775), s = n.n(o), l = n(442837), u = n(570140), c = n(163268), d = n(786761), _ = n(592125), E = n(375954), f = n(981631);
function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(a = r || (r = {}))[a.LOADED = 0] = 'LOADED', a[a.NOT_LOADED = 1] = 'NOT_LOADED', a[a.DELETED = 2] = 'DELETED';
let p = Object.freeze({ state: 1 }), m = new Set();
class I {
    handleCacheDisposed(e, t) {
        this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e));
    }
    set(e, t) {
        this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e));
    }
    has(e) {
        return this._cachedMessageIds.has(e);
    }
    get(e) {
        return this._cachedMessages.get(e);
    }
    getCachedMessageIds() {
        return this._cachedMessageIds;
    }
    constructor() {
        h(this, '_cachedMessages', new (s())({
            max: 100,
            dispose: (e, t) => this.handleCacheDisposed(e, t)
        })), h(this, '_cachedMessageIds', new Set());
    }
}
let T = new class e {
    has(e, t) {
        var n, r;
        return null !== (r = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== r && r;
    }
    get(e, t) {
        var n;
        return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
    set(e, t, n) {
        let r = this._channelCaches.get(e);
        null == r && (r = new I(), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return !!(null != t && t.has(e.id)) && (t.set(e.id, {
            state: 0,
            message: (0, d.e5)(e)
        }), !0);
    }
    deleteChannelCache(e) {
        return this._channelCaches.delete(e);
    }
    retainWhere(e) {
        let t = [];
        for (let [n] of this._channelCaches)
            !e(n) && t.push(n);
        for (let e of t)
            this.deleteChannelCache(e);
        return t.length;
    }
    getCachedMessageIdsForChannel(e) {
        let t = this._channelCaches.get(e);
        return null == t ? null : t.getCachedMessageIds();
    }
    clear() {
        this._channelCaches.clear();
    }
    constructor() {
        h(this, '_channelCaches', new Map());
    }
}();
function g(e) {
    let t = !1;
    if (T.updateExistingMessageIfCached(e) && (t = !0), f.OBS.has(e.type)) {
        let n = e.message_reference;
        if (null == n)
            return t;
        let r = n.message_id;
        if (null == r)
            return t;
        if ('referenced_message' in e) {
            let t = e.referenced_message;
            null != t ? (T.set(t.channel_id, t.id, {
                state: 0,
                message: (0, d.e5)(t)
            }), e.type === f.uaV.THREAD_STARTER_MESSAGE && g(t)) : T.set(e.channel_id, r, { state: 2 });
        } else {
            let e = E.Z.getMessage(n.channel_id, r);
            null != e ? T.set(n.channel_id, r, {
                state: 0,
                message: e
            }) : T.set(n.channel_id, r, p);
        }
        t = !0;
    }
    return t;
}
function S(e, t) {
    let n = !1;
    for (let r of e)
        n = !1 !== t(r) || n;
    return n;
}
function A(e) {
    let {messages: t} = e;
    return S(t, e => g(e));
}
function N(e) {
    let {messages: t} = e;
    return S(t, e => S(e, e => g(e)));
}
function v(e) {
    return T.deleteChannelCache(e.channel.id);
}
function O(e, t) {
    if (!T.has(e, t))
        return !1;
    T.set(e, t, { state: 2 });
}
function R() {
    T.clear();
}
function C(e) {
    let {firstMessages: t} = e;
    return null != t && S(t, e => g(e));
}
class y extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, _.Z);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = T.get(e.channel_id, e.message_id)), null != t ? t : p;
    }
    getMessage(e, t) {
        var n;
        return null !== (n = T.get(e, t)) && void 0 !== n ? n : p;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = T.getCachedMessageIdsForChannel(e)), null != t ? t : m;
    }
}
h(y, 'displayName', 'ReferencedMessageStore'), t.Z = new y(u.Z, {
    CACHE_LOADED: function (e) {
        let {messages: t} = e;
        return S(Object.values(t), e => S(Object.values(e), e => g(e)));
    },
    LOCAL_MESSAGES_LOADED: A,
    LOAD_MESSAGES_SUCCESS: A,
    LOAD_MESSAGES_AROUND_SUCCESS: A,
    SEARCH_FINISH: N,
    MOD_VIEW_SEARCH_FINISH: N,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        if (!T.has(n, t))
            return !1;
        let r = T.get(n, t);
        if (null == r || 0 !== r.state)
            return !1;
        T.set(n, t, {
            state: 0,
            message: (0, c.Cm)(r.message)
        });
    },
    LOAD_FORUM_POSTS: function (e) {
        let {threads: t} = e;
        return S(Object.values(t), e => {
            let {first_message: t} = e;
            return null != t && g(t);
        });
    },
    MESSAGE_CREATE: function (e) {
        let {message: t} = e;
        return !!E.Z.getMessages(t.channel_id).ready && g(t);
    },
    MESSAGE_UPDATE: function (e) {
        let {message: t} = e, n = t.id, r = t.channel_id;
        if (!T.has(r, n))
            return !1;
        let i = T.get(r, n);
        if (null == i || 0 !== i.state)
            return !1;
        T.set(r, n, {
            state: 0,
            message: (0, d.wi)(i.message, t)
        });
    },
    MESSAGE_DELETE: function (e) {
        let {
            id: t,
            channelId: n
        } = e;
        return O(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let {
            ids: t,
            channelId: n
        } = e;
        return S(t, e => O(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let {message: t} = e;
        T.set(t.channel_id, t.id, {
            state: 0,
            message: t
        });
    },
    CHANNEL_DELETE: v,
    THREAD_DELETE: v,
    GUILD_DELETE: function () {
        if (0 === T.retainWhere(e => null != _.Z.getChannel(e)))
            return !1;
    },
    CONNECTION_OPEN: R,
    LOGOUT: R
});
