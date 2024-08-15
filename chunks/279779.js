n(653041), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(312677), n(390547);
var r,
	i,
	a = n(392711),
	s = n.n(a),
	o = n(772848),
	l = n(147913),
	u = n(131704),
	c = n(592125),
	d = n(271383),
	_ = n(699516),
	E = n(594174),
	f = n(823379),
	h = n(960048),
	p = n(709054),
	I = n(51144);
function m(e, t, n) {
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
function T(e) {
	if (null == e || _.Z.isBlocked(e.id)) return null;
	let t = {
		id: e.id,
		username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
	};
	return (
		null != I.ZP.getGlobalName(e) && (t.globalName = e.globalName),
		e.bot && (t.isBot = !0),
		_.Z.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = _.Z.getNickname(e.id))),
		t
	);
}
function g(e, t, n) {
	null != e && (e[t] = null != n && '' !== n ? n : null);
}
function S(e) {
	let t = [];
	if (null == e || !(0, u.hv)(e.type)) return t;
	let { recipients: n = [] } = e;
	return (
		n.forEach((n) => {
			let r = T(E.default.getUser(n));
			null != e && g(r, e.id), t.push(r);
		}),
		t
	);
}
function A(e, t) {
	let n = [];
	return (
		e.forEach((e) => {
			let r = T(e.user);
			null != r && (g(r, t, e.nick), n.push(r));
		}),
		n
	);
}
((i = r || (r = {})).UPDATE_USERS = 'UPDATE_USERS'),
	(i.USER_RESULTS = 'USER_RESULTS'),
	(i.QUERY_SET = 'QUERY_SET'),
	(i.QUERY_CLEAR = 'QUERY_CLEAR');
class N {
	setLimit(e) {
		(this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
	}
	subscribe() {
		null != this._worker &&
			!this._subscribed &&
			(this._worker.addEventListener('message', this.handleMessages, !1),
			(this._subscribed = !0),
			this._setNextQuery());
	}
	unsubscribe() {
		null != this._worker &&
			this._subscribed &&
			(this._worker.removeEventListener('message', this.handleMessages, !1), (this._subscribed = !1));
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
		m(this, '_worker', void 0),
			m(this, '_uuid', void 0),
			m(this, '_callback', void 0),
			m(this, '_limit', void 0),
			m(this, '_currentQuery', void 0),
			m(this, '_nextQuery', void 0),
			m(this, '_subscribed', void 0),
			m(this, 'handleMessages', (e) => {
				let t = e.data;
				if (null != t && 'USER_RESULTS' === t.type && t.uuid === this._uuid)
					!1 !== this._currentQuery && this._callback(t.payload),
						null != this._currentQuery && (this._currentQuery = null),
						this._setNextQuery();
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
class v extends l.Z {
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
			for (let n of (e = e.filter(f.lm)))
				(null == n ? void 0 : n.id) == null &&
					h.Z.addBreadcrumb({
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
		return new N(n, e, t);
	}
	constructor(...e) {
		super(...e),
			m(this, '_worker', void 0),
			m(this, 'actions', {
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
			m(this, '_handleLogout', () => {
				this.rebootWebworker();
			}),
			m(this, '_handleConnectionOpen', () => {
				setTimeout(() => {
					let e = E.default.getCurrentUser();
					if (null == e) return;
					let t = T(e),
						n = { [t.id]: t };
					Object.values(E.default.getUsers()).forEach((e) => {
						n[e.id] = T(e);
					});
					let r = d.ZP.getMutableAllGuildsAndMembers();
					for (let e in r)
						for (let t in r[e]) {
							var i, a;
							let s = n[t],
								o =
									null !== (a = null === (i = r[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== a
										? a
										: I.ZP.getGlobalName(s);
							null != s && (s[e] = null != o && '' !== o ? o : null);
						}
					this.updateUsers(Object.values(n), 'connection_open');
				}, 3000);
			}),
			m(this, '_handleConnectionOpenSupplemental', (e) => {
				let { guilds: t } = e;
				setTimeout(() => {
					let e = s().flatMap(t, (e) => A(e.members, e.id)),
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
												let t = T(r.user);
												null != t && (g(t, e.id, r.nick), n.push(t));
											}
										});
									}),
								n
							);
						});
					this.updateUsers([...e, ...n], 'connection_open_supplemental');
				}, 3000);
			}),
			m(this, '_handleOverlayInitialize', (e) => {
				let { users: t, guildMembers: n } = e,
					r = new Map();
				for (let e of t) r.set(e.id, T(e));
				for (let e of p.default.keys(n)) {
					let t = n[e];
					if (null != t)
						for (let n of p.default.keys(t)) {
							let i = r.get(n),
								a = t[n];
							if (null != i && null != a && null != a.nick) g(i, e, a.nick), r.set(n, i);
						}
				}
				this.updateUsers(Array.from(r.values()), 'overlay_initialize'), r.clear();
			}),
			m(this, '_handleCurrentUserUpdate', (e) => {
				let { user: t } = e,
					n = T(t);
				null != n && this.updateUsers([n], 'current_user_update');
			}),
			m(this, '_handleGuildCreate', (e) => {
				let { guild: t } = e,
					{ members: n } = t;
				this.updateUsers(A(n, t.id), 'guild_create');
			}),
			m(this, '_handleGuildMembersChunkBatch', (e) => {
				let { chunks: t } = e,
					n = [];
				for (let e of t) n.push(...A(e.members, e.guildId));
				this.updateUsers(n, 'guild_members_chunk_batch');
			}),
			m(this, '_handleGuildMemberUpdate', (e) => {
				let { guildId: t, user: n, nick: r } = e,
					i = T(n);
				null != i && (g(i, t, r), this.updateUsers([i], 'guild_member_update'));
			}),
			m(this, '_handlePassiveUpdateV2', (e) => {
				this.updateUsers(A(e.members, e.guildId), 'passive_update_v2');
			}),
			m(this, '_handleRelationshipAdd', (e) => {
				let t = T(e.relationship.user);
				this.updateUsers([t], 'relationship_add');
			}),
			m(this, '_handleRelationshipUpdate', (e) => {
				let t = T(E.default.getUser(e.relationship.id));
				this.updateUsers([t], 'relationship_update');
			}),
			m(this, '_handleRelationshipRemove', (e) => {
				let t = T(E.default.getUser(e.relationship.id));
				this.updateUsers([t], 'relationship_remove');
			}),
			m(this, '_handleDMCreate', (e) => {
				let {
						channel: { id: t }
					} = e,
					n = S(c.Z.getChannel(t));
				if (0 === n.length) return;
				let r = T(E.default.getCurrentUser());
				g(r, t), n.push(r), this.updateUsers(n, 'dm_create');
			}),
			m(this, '_handleDMUpdates', (e) => {
				let { channels: t } = e;
				for (let e of t) {
					let t = S(c.Z.getChannel(e.id));
					if (0 === t.length) continue;
					let n = T(E.default.getCurrentUser());
					g(n, e.id), t.push(n), this.updateUsers(t, 'dm_updates');
				}
			}),
			m(this, '_handleRecipientChanges', (e) => {
				let { channelId: t, user: n, isMember: r } = e;
				if (!r) return;
				let i = T(n);
				g(i, t), this.updateUsers([i], 'recipient_changes');
			});
	}
}
t.Z = new v();
