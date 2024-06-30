n(653041), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(312677), n(390547);
var r, i, a = n(392711), o = n.n(a), s = n(772848), l = n(147913), u = n(131704), c = n(592125), d = n(271383), _ = n(699516), E = n(594174), f = n(823379), h = n(709054), p = n(51144);
function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function I(e) {
    if (null == e || _.Z.isBlocked(e.id))
        return null;
    let t = {
        id: e.id,
        username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
    };
    return null != p.ZP.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), _.Z.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = _.Z.getNickname(e.id)), t;
}
function T(e, t, n) {
    null != e && (e[t] = null != n && '' !== n ? n : null);
}
function g(e) {
    let t = [];
    if (null == e || !(0, u.hv)(e.type))
        return t;
    let {
        recipients: n = []
    } = e;
    return n.forEach(n => {
        let r = I(E.default.getUser(n));
        null != e && T(r, e.id), t.push(r);
    }), t;
}
function S(e, t) {
    let n = [];
    return e.forEach(e => {
        let r = I(e.user);
        null != r && (T(r, t, e.nick), n.push(r));
    }), n;
}
(i = r || (r = {})).UPDATE_USERS = 'UPDATE_USERS', i.USER_RESULTS = 'USER_RESULTS', i.QUERY_SET = 'QUERY_SET', i.QUERY_CLEAR = 'QUERY_CLEAR';
class A {
    setLimit(e) {
        this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null != this._worker && !this._subscribed && (this._worker.addEventListener('message', this.handleMessages, !1), this._subscribed = !0, this._setNextQuery());
    }
    unsubscribe() {
        null != this._worker && this._subscribed && (this._worker.removeEventListener('message', this.handleMessages, !1), this._subscribed = !1);
    }
    destroy() {
        this.clearQuery(), this.unsubscribe();
    }
    clearQuery() {
        this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
            uuid: this._uuid,
            type: 'QUERY_CLEAR'
        });
    }
    setQuery(e, t, n, r) {
        if (null != e)
            this._nextQuery = {
                query: e,
                filters: t,
                blacklist: n,
                boosters: null != r ? r : {},
                limit: this._limit
            }, this._setNextQuery();
    }
    _setNextQuery() {
        if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery)
            null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                uuid: this._uuid,
                type: 'QUERY_SET',
                payload: this._currentQuery
            })) : !this._subscribed && this.subscribe();
    }
    constructor(e, t, n = 10) {
        m(this, '_worker', void 0), m(this, '_uuid', void 0), m(this, '_callback', void 0), m(this, '_limit', void 0), m(this, '_currentQuery', void 0), m(this, '_nextQuery', void 0), m(this, '_subscribed', void 0), m(this, 'handleMessages', e => {
            let t = e.data;
            if (null != t && 'USER_RESULTS' === t.type && t.uuid === this._uuid)
                !1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery();
        }), this._worker = e, this._uuid = (0, s.Z)(), this._callback = t, this._limit = n, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe();
    }
}
class N extends l.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), this._worker = null);
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), this._worker = null);
        this._worker = new Worker(new URL(n.p + n.u('69731'), n.b));
    }
    updateUsers(e) {
        let {_worker: t} = this;
        if (null != t)
            e = e.filter(f.lm), t.postMessage({
                type: 'UPDATE_USERS',
                payload: e
            });
    }
    getSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.initialize();
        let {_worker: n} = this;
        if (null == n)
            throw Error('SearchContextManager: No webworker initialized');
        return new A(n, e, t);
    }
    constructor(...e) {
        super(...e), m(this, '_worker', void 0), m(this, 'actions', {
            LOGOUT: () => this._handleLogout(),
            POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
            CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
            OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
            CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
            GUILD_CREATE: e => this._handleGuildCreate(e),
            GUILD_MEMBERS_CHUNK_BATCH: e => this._handleGuildMembersChunkBatch(e),
            GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
            GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
            RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
            RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
            RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
            CHANNEL_CREATE: e => this._handleDMCreate(e),
            CHANNEL_UPDATES: e => this._handleDMUpdates(e),
            CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
            PASSIVE_UPDATE_V2: e => this._handlePassiveUpdateV2(e)
        }), m(this, '_handleLogout', () => {
            this.rebootWebworker();
        }), m(this, '_handleConnectionOpen', () => {
            setTimeout(() => {
                let e = E.default.getCurrentUser();
                if (null == e)
                    return;
                let t = I(e), n = { [t.id]: t };
                Object.values(E.default.getUsers()).forEach(e => {
                    n[e.id] = I(e);
                });
                let r = d.ZP.getMutableAllGuildsAndMembers();
                for (let e in r)
                    for (let t in r[e]) {
                        var i, a;
                        let o = n[t], s = null !== (a = null === (i = r[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== a ? a : p.ZP.getGlobalName(o);
                        null != o && (o[e] = null != s && '' !== s ? s : null);
                    }
                this.updateUsers(Object.values(n));
            }, 3000);
        }), m(this, '_handleConnectionOpenSupplemental', e => {
            let {guilds: t} = e;
            setTimeout(() => {
                let e = o().flatMap(t, e => S(e.members, e.id));
                this.updateUsers(e);
            }, 3000);
        }), m(this, '_handleOverlayInitialize', e => {
            let {
                    users: t,
                    guildMembers: n
                } = e, r = new Map();
            for (let e of t)
                r.set(e.id, I(e));
            for (let e of h.default.keys(n)) {
                let t = n[e];
                if (null != t)
                    for (let n of h.default.keys(t)) {
                        let i = r.get(n), a = t[n];
                        if (null != i && null != a && null != a.nick)
                            T(i, e, a.nick), r.set(n, i);
                    }
            }
            this.updateUsers(Array.from(r.values())), r.clear();
        }), m(this, '_handleCurrentUserUpdate', e => {
            let {user: t} = e, n = I(t);
            null != n && this.updateUsers([n]);
        }), m(this, '_handleGuildCreate', e => {
            let {guild: t} = e, {members: n} = t;
            this.updateUsers(S(n, t.id));
        }), m(this, '_handleGuildMembersChunkBatch', e => {
            let {chunks: t} = e, n = [];
            for (let e of t)
                n.push(...S(e.members, e.guildId));
            this.updateUsers(n);
        }), m(this, '_handleGuildMemberUpdate', e => {
            let {
                    guildId: t,
                    user: n,
                    nick: r
                } = e, i = I(n);
            null != i && (T(i, t, r), this.updateUsers([i]));
        }), m(this, '_handlePassiveUpdateV2', e => {
            this.updateUsers(S(e.members, e.guildId));
        }), m(this, '_handleRelationshipAdd', e => {
            let t = I(e.relationship.user);
            this.updateUsers([t]);
        }), m(this, '_handleRelationshipUpdate', e => {
            let t = I(E.default.getUser(e.relationship.id));
            this.updateUsers([t]);
        }), m(this, '_handleRelationshipRemove', e => {
            let t = I(E.default.getUser(e.relationship.id));
            this.updateUsers([t]);
        }), m(this, '_handleDMCreate', e => {
            let {
                    channel: {id: t}
                } = e, n = g(c.Z.getChannel(t));
            if (0 === n.length)
                return;
            let r = I(E.default.getCurrentUser());
            T(r, t), n.push(r), this.updateUsers(n);
        }), m(this, '_handleDMUpdates', e => {
            let {channels: t} = e;
            for (let e of t) {
                let t = g(c.Z.getChannel(e.id));
                if (0 === t.length)
                    continue;
                let n = I(E.default.getCurrentUser());
                T(n, e.id), t.push(n), this.updateUsers(t);
            }
        }), m(this, '_handleRecipientChanges', e => {
            let {
                channelId: t,
                user: n,
                isMember: r
            } = e;
            if (!r)
                return;
            let i = I(n);
            T(i, t), this.updateUsers([i]);
        });
    }
}
t.Z = new N();
