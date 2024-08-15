n(47120), n(653041);
var s = n(768433),
	a = n(710845),
	r = n(38618),
	i = n(131704),
	l = n(314897),
	o = n(592125),
	c = n(430824),
	d = n(496675),
	_ = n(386438),
	u = n(287328),
	E = n(458772);
function T(e, t, n) {
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
let I = new a.Z('GuildBasicChannels');
function R(e, t) {
	return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.Z.computeBasicPermissions(e) !== d.Z.computeBasicPermissions(t);
}
t.Z = new (class e {
	async getAsync(e) {
		let t = performance.now(),
			[n, s] = await Promise.all([u.Z.basicChannels(e).getKvEntries(), u.Z.syncedBasicChannels(e).getKvEntries()]),
			a = performance.now() - t,
			[r, i] = (function (e) {
				let t = [],
					n = [];
				for (let [s, a] of e) (a ? t : n).push(s);
				return [t, n];
			})(s),
			l = new Set(r);
		return (
			(this.synced = l),
			I.verbose('loaded in '.concat(a, 'ms (guilds: ').concat(n.length, ', synced: ').concat(l.size, ' unsynced: ').concat(i.length, ')')),
			{
				all: n,
				stale: i,
				channels: n.filter((e) => {
					let [t, n] = e;
					return l.has(t);
				})
			}
		);
	}
	handleChannelCreate(e, t) {
		null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
	}
	handleChannelDelete(e, t) {
		null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
	}
	handleChannelUpdates(e, t) {
		for (let n of e.channels.filter((e) => null != e.guild_id)) R(o.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
	}
	handleBackgroundSync(e, t) {
		for (let r of e.guilds)
			switch (r.data_mode) {
				case 'unavailable':
					break;
				case 'partial':
					var n, s, a;
					let e = (e) => (0, i.q_)(e, r.id);
					this.onGuildUpdate(r.id, null !== (s = null === (n = r.partial_updates.channels) || void 0 === n ? void 0 : n.map(e)) && void 0 !== s ? s : [], null !== (a = r.partial_updates.deleted_channel_ids) && void 0 !== a ? a : [], t);
					break;
				default:
					this.onGuildSync(r.id, t);
			}
	}
	handleConnectionOpen(e, t) {
		for (let n of e.guilds) this.handleOneGuildCreate(n, t);
	}
	async handlePostConnectionOpen() {
		let e = r.Z.lastTimeConnectedChanged(),
			t = u.Z.database();
		if (null == this.synced || null == t || !(0, s.O)()) return;
		let n = c.Z.getGuildIds(),
			a = n.filter((e) => !this.synced.has(e));
		for (let s of (I.verbose('scheduling basic_channel optimstic writes (guilds: '.concat(a.length, ')')), n)) {
			if (null == this.synced || t !== u.Z.database() || e !== r.Z.lastTimeConnectedChanged()) break;
			if (!this.synced.has(s)) {
				I.verbose('optimstically writing basic_channels (guild: '.concat(s, ')'));
				try {
					await o.o.loadGuildIds([s]), await t.transaction((e) => this.syncOne(s, e), 'handlePostConnectionOpen');
				} catch (e) {
					I.warn("couldn't optimstically write basic_channel:", e);
					return;
				}
				await new Promise((e) => setTimeout(e, 1000));
			}
		}
	}
	handleGuildCreate(e, t) {
		this.handleOneGuildCreate(e.guild, t);
	}
	handleOneGuildCreate(e, t) {
		null != e.channelUpdates ? this.onGuildUpdate(e.id, e.channelUpdates.writes, e.channelUpdates.deletes, t) : this.onGuildSync(e.id, t);
	}
	handleGuildUpdate(e, t) {
		this.unsync(e.guild.id, t);
	}
	handleGuildDelete(e, t) {
		!0 !== e.guild.unavailable && this.delete(e.guild.id, t);
	}
	handleGuildRoleUpdate(e, t) {
		let n = e.role,
			s = c.Z.getRole(e.guildId, n.id);
		(null == s || n.permissions !== s.permissions) && this.unsync(e.guildId, t);
	}
	handleGuildMemberUpdate(e, t) {
		e.user.id === l.default.getId() && this.unsync(e.guildId, t);
	}
	handleWriteCaches(e, t) {
		this.sync(t);
	}
	resetInMemoryState() {
		this.synced = null;
	}
	onGuildUpdate(e, t, n, s) {
		(n.length > 0 || t.some((e) => R(o.Z.getBasicChannel(e.id), e))) && this.unsync(e, s);
	}
	onGuildSync(e, t) {
		this.unsync(e, t);
	}
	delete(e, t) {
		this.unsync(e, t), u.Z.basicChannelsTransaction(t).delete(e), u.Z.syncedBasicChannelsTransaction(t).delete(e);
	}
	unsync(e, t) {
		var n;
		null === (n = this.synced) || void 0 === n || n.delete(e), u.Z.basicChannelsTransaction(t).delete(e), u.Z.syncedBasicChannelsTransaction(t).put(e, !1), E.Z.invalidate(e);
	}
	sync(e) {
		I.verbose('Starting to write all basic channels');
		let t = performance.now(),
			n = {
				written: 0,
				skipped: 0
			};
		for (let t of c.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
		let s = performance.now() - t;
		I.verbose(''.concat(n.written, ' basic_channel guilds submitted (took: ').concat(s, 'ms, skipped: ').concat(n.skipped, ' guilds)'));
	}
	syncOne(e, t) {
		var n, s;
		return (
			!(null == c.Z.getGuild(e) || (null === (n = this.synced) || void 0 === n ? void 0 : n.has(e))) &&
			(null === (s = this.synced) || void 0 === s || s.add(e),
			u.Z.basicChannelsTransaction(t).put(
				e,
				(function (e) {
					return Object.values(o.Z.getMutableGuildChannelsForGuild(e)).map((e) => ({
						id: e.id,
						type: e.type,
						guild_id: e.guild_id,
						parent_id: e.parent_id,
						basicPermissions: _.Z.asBasicFlag(d.Z.computePermissions(e))
					}));
				})(e)
			),
			u.Z.syncedBasicChannelsTransaction(t).put(e, !0),
			!0)
		);
	}
	constructor() {
		T(this, 'synced', null),
			T(this, 'actions', {
				BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
				CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
				CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
				CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
				CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
				GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
				GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
				GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
				GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
				GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
				POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
				WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t)
			});
	}
})();
