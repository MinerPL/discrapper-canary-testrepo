n(789020), n(653041), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(312677), n(390547);
var r,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(772848),
    l = n(147913),
    u = n(131704),
    c = n(598077),
    d = n(592125),
    _ = n(271383),
    E = n(699516),
    f = n(594174),
    h = n(630388),
    p = n(823379),
    I = n(960048),
    m = n(709054),
    T = n(51144),
    S = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    if (null == e || E.Z.isBlocked(e.id)) return null;
    let t = {
        id: e.id,
        username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
    };
    if ((null != T.ZP.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), e instanceof c.Z)) t.isProvisional = e.isProvisional;
    else if ('flags' in e) {
        var n;
        t.isProvisional = h.yE(null !== (n = e.flags) && void 0 !== n ? n : 0, S.xW$.PROVISIONAL_ACCOUNT);
    } else t.isProvisional = !1;
    return E.Z.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = E.Z.getNickname(e.id))), t;
}
function N(e, t, n) {
    null != e && (e[t] = null != n && '' !== n ? n : null);
}
function O(e) {
    let t = [];
    if (null == e || !(0, u.hv)(e.type)) return t;
    let { recipients: n = [] } = e;
    return (
        n.forEach((n) => {
            let r = A(f.default.getUser(n));
            null != e && N(r, e.id), t.push(r);
        }),
        t
    );
}
function R(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = A(e.user);
            null != r && (N(r, t, e.nick), n.push(r));
        }),
        n
    );
}
((i = r || (r = {})).UPDATE_USERS = 'UPDATE_USERS'), (i.USER_RESULTS = 'USER_RESULTS'), (i.QUERY_SET = 'QUERY_SET'), (i.QUERY_CLEAR = 'QUERY_CLEAR');
class v {
    setLimit(e) {
        (this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null != this._worker && !this._subscribed && (this._worker.addEventListener('message', this.handleMessages, !1), (this._subscribed = !0), this._setNextQuery());
    }
    unsubscribe() {
        null != this._worker && this._subscribed && (this._worker.removeEventListener('message', this.handleMessages, !1), (this._subscribed = !1));
    }
    destroy() {
        this.clearQuery(), this.unsubscribe();
    }
    clearQuery() {
        (this._currentQuery = !1),
            (this._nextQuery = null),
            null != this._worker &&
                this._subscribed &&
                this._worker.postMessage({
                    uuid: this._uuid,
                    type: 'QUERY_CLEAR'
                });
    }
    setQuery(e, t, n, r) {
        if (null != e)
            (this._nextQuery = {
                query: e,
                filters: t,
                blacklist: n,
                boosters: null != r ? r : {},
                limit: this._limit
            }),
                this._setNextQuery();
    }
    _setNextQuery() {
        if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery)
            null != this._worker && this._subscribed
                ? ((this._currentQuery = this._nextQuery),
                  (this._nextQuery = null),
                  this._worker.postMessage({
                      uuid: this._uuid,
                      type: 'QUERY_SET',
                      payload: this._currentQuery
                  }))
                : !this._subscribed && this.subscribe();
    }
    constructor(e, t, n = 10) {
        g(this, '_worker', void 0),
            g(this, '_uuid', void 0),
            g(this, '_callback', void 0),
            g(this, '_limit', void 0),
            g(this, '_currentQuery', void 0),
            g(this, '_nextQuery', void 0),
            g(this, '_subscribed', void 0),
            g(this, 'handleMessages', (e) => {
                let t = e.data;
                if (null != t && 'USER_RESULTS' === t.type && t.uuid === this._uuid) !1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery();
            }),
            (this._worker = e),
            (this._uuid = (0, o.Z)()),
            (this._callback = t),
            (this._limit = n),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
}
class C extends l.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
        this._worker = new Worker(new URL('/assets/' + n.u('69731'), n.b));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(p.lm)))
                (null == n ? void 0 : n.id) == null &&
                    I.Z.addBreadcrumb({
                        category: 'debug',
                        message: 'User missing id',
                        data: {
                            action: t,
                            userFields: {
                                userIsNull: null == n,
                                idIsNull: (null == n ? void 0 : n.id) == null,
                                usernameIsNull: (null == n ? void 0 : n.username) == null,
                                isBot: null == n ? void 0 : n.isBot,
                                isFriend: null == n ? void 0 : n.isFriend,
                                isProvisional: null == n ? void 0 : n.isProvisional,
                                globalNameIsNull: (null == n ? void 0 : n.globalName) == null,
                                usersArrayLength: e.length
                            }
                        }
                    });
            n.postMessage({
                type: 'UPDATE_USERS',
                payload: e
            });
        }
    }
    getSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.initialize();
        let { _worker: n } = this;
        if (null == n) throw Error('SearchContextManager: No webworker initialized');
        return new v(n, e, t);
    }
    constructor(...e) {
        super(...e),
            g(this, '_worker', void 0),
            g(this, 'actions', {
                LOGOUT: () => this._handleLogout(),
                POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                CONNECTION_OPEN_SUPPLEMENTAL: (e) => this._handleConnectionOpenSupplemental(e),
                OVERLAY_INITIALIZE: (e) => this._handleOverlayInitialize(e),
                CURRENT_USER_UPDATE: (e) => this._handleCurrentUserUpdate(e),
                GUILD_CREATE: (e) => this._handleGuildCreate(e),
                GUILD_MEMBERS_CHUNK_BATCH: (e) => this._handleGuildMembersChunkBatch(e),
                GUILD_MEMBER_ADD: (e) => this._handleGuildMemberUpdate(e),
                GUILD_MEMBER_UPDATE: (e) => this._handleGuildMemberUpdate(e),
                RELATIONSHIP_ADD: (e) => this._handleRelationshipAdd(e),
                RELATIONSHIP_UPDATE: (e) => this._handleRelationshipUpdate(e),
                RELATIONSHIP_REMOVE: (e) => this._handleRelationshipRemove(e),
                CHANNEL_CREATE: (e) => this._handleDMCreate(e),
                CHANNEL_UPDATES: (e) => this._handleDMUpdates(e),
                CHANNEL_RECIPIENT_ADD: (e) => this._handleRecipientChanges(e),
                PASSIVE_UPDATE_V2: (e) => this._handlePassiveUpdateV2(e)
            }),
            g(this, '_handleLogout', () => {
                this.rebootWebworker();
            }),
            g(this, '_handleConnectionOpen', () => {
                setTimeout(() => {
                    let e = f.default.getCurrentUser();
                    if (null == e) return;
                    let t = A(e),
                        n = { [t.id]: t };
                    Object.values(f.default.getUsers()).forEach((e) => {
                        n[e.id] = A(e);
                    });
                    let r = _.ZP.getMutableAllGuildsAndMembers();
                    for (let e in r)
                        for (let t in r[e]) {
                            var i, a;
                            let s = n[t],
                                o = null !== (a = null === (i = r[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== a ? a : T.ZP.getGlobalName(s);
                            null != s && (s[e] = null != o && '' !== o ? o : null);
                        }
                    this.updateUsers(Object.values(n), 'connection_open');
                }, 3000);
            }),
            g(this, '_handleConnectionOpenSupplemental', (e) => {
                let { guilds: t } = e;
                setTimeout(() => {
                    let e = s().flatMap(t, (e) => R(e.members, e.id)),
                        n = s().flatMap(t, (e) => {
                            var t;
                            let n = [];
                            return (
                                null === (t = e.activity_instances) ||
                                    void 0 === t ||
                                    t.forEach((t) => {
                                        t.participants.forEach((t) => {
                                            let r = t.member;
                                            if (null != r) {
                                                let t = A(r.user);
                                                null != t && (N(t, e.id, r.nick), n.push(t));
                                            }
                                        });
                                    }),
                                n
                            );
                        });
                    this.updateUsers([...e, ...n], 'connection_open_supplemental');
                }, 3000);
            }),
            g(this, '_handleOverlayInitialize', (e) => {
                let { users: t, guildMembers: n } = e,
                    r = new Map();
                for (let e of t) r.set(e.id, A(e));
                for (let e of m.default.keys(n)) {
                    let t = n[e];
                    if (null != t)
                        for (let n of m.default.keys(t)) {
                            let i = r.get(n),
                                a = t[n];
                            if (null != i && null != a && null != a.nick) N(i, e, a.nick), r.set(n, i);
                        }
                }
                this.updateUsers(Array.from(r.values()), 'overlay_initialize'), r.clear();
            }),
            g(this, '_handleCurrentUserUpdate', (e) => {
                let { user: t } = e,
                    n = A(t);
                null != n && this.updateUsers([n], 'current_user_update');
            }),
            g(this, '_handleGuildCreate', (e) => {
                let { guild: t } = e,
                    { members: n } = t;
                this.updateUsers(R(n, t.id), 'guild_create');
            }),
            g(this, '_handleGuildMembersChunkBatch', (e) => {
                let { chunks: t } = e,
                    n = [];
                for (let e of t) n.push(...R(e.members, e.guildId));
                this.updateUsers(n, 'guild_members_chunk_batch');
            }),
            g(this, '_handleGuildMemberUpdate', (e) => {
                let { guildId: t, user: n, nick: r } = e,
                    i = A(n);
                null != i && (N(i, t, r), this.updateUsers([i], 'guild_member_update'));
            }),
            g(this, '_handlePassiveUpdateV2', (e) => {
                this.updateUsers(R(e.members, e.guildId), 'passive_update_v2');
            }),
            g(this, '_handleRelationshipAdd', (e) => {
                let t = A(e.relationship.user);
                this.updateUsers([t], 'relationship_add');
            }),
            g(this, '_handleRelationshipUpdate', (e) => {
                let t = A(f.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_update');
            }),
            g(this, '_handleRelationshipRemove', (e) => {
                let t = A(f.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_remove');
            }),
            g(this, '_handleDMCreate', (e) => {
                let {
                        channel: { id: t }
                    } = e,
                    n = O(d.Z.getChannel(t));
                if (0 === n.length) return;
                let r = A(f.default.getCurrentUser());
                N(r, t), n.push(r), this.updateUsers(n, 'dm_create');
            }),
            g(this, '_handleDMUpdates', (e) => {
                let { channels: t } = e;
                for (let e of t) {
                    let t = O(d.Z.getChannel(e.id));
                    if (0 === t.length) continue;
                    let n = A(f.default.getCurrentUser());
                    N(n, e.id), t.push(n), this.updateUsers(t, 'dm_updates');
                }
            }),
            g(this, '_handleRecipientChanges', (e) => {
                let { channelId: t, user: n, isMember: r } = e;
                if (!r) return;
                let i = A(n);
                N(i, t), this.updateUsers([i], 'recipient_changes');
            });
    }
}
t.Z = new C();
