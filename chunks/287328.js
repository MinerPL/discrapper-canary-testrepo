n(47120);
var r = n(442837),
	i = n(348326),
	a = n(570140),
	s = n(314897),
	o = n(261875);
function l(e, t, n) {
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
i.Ds.KvCache, i.Ds.KvCache;
class u extends r.yh {
	initialize() {
		this.waitFor(s.default);
	}
	constructor(...e) {
		super(...e),
			l(this, 'database', (e) => o.Z.database(null != e ? e : s.default.getId())),
			l(
				this,
				'channels',
				c((e) => new i.Np('guild_channels', i.Ds.KvCache, e))
			),
			l(
				this,
				'channelsTemp',
				c((e) => new i.Bx('guild_channels_temp', i.Ds.KvCache, e))
			),
			l(
				this,
				'basicChannels',
				c((e) => new i.Nq('basic_channels', i.Ds.KvCache, e))
			),
			l(
				this,
				'syncedBasicChannels',
				c((e) => new i.Nq('basic_channels_synced', i.Ds.KvCache, e))
			),
			l(
				this,
				'cache',
				c((e) => new i.Nq('cache', i.Ds.KvCache, e))
			),
			l(
				this,
				'forceResyncVersion',
				c((e) => new i.Nq('force_resync_version', i.Ds.KvCache, e))
			),
			l(
				this,
				'emojis',
				c((e) => new i.Np('guild_emojis', i.Ds.KvCache, e))
			),
			l(
				this,
				'guilds',
				c((e) => new i.L5('guilds', i.Ds.KvCache, e))
			),
			l(
				this,
				'guildsRequiringDeletedIdsSync',
				c((e) => new i.L5('guilds_requiring_deleted_ids_sync', i.Ds.KvCache, e))
			),
			l(
				this,
				'messages',
				c((e) => new i.uC('messages', i.Ds.Messages, e))
			),
			l(
				this,
				'stickers',
				c((e) => new i.Np('guild_stickers', i.Ds.KvCache, e))
			),
			l(
				this,
				'guildVersions',
				c((e) => new i.L5('guild_versions', i.Ds.KvCache, e))
			),
			l(
				this,
				'nonGuildVersions',
				c((e) => new i.L5('non_guild_versions', i.Ds.KvCache, e))
			),
			l(
				this,
				'userSettings',
				c((e) => new i.L5('user_settings', i.Ds.KvCache, e))
			),
			l(
				this,
				'readStates',
				c((e) => new i.Nq('read_states', i.Ds.KvCache, e))
			),
			l(
				this,
				'userGuildSettings',
				c((e) => new i.Nq('user_guild_settings', i.Ds.KvCache, e))
			),
			l(
				this,
				'userSearchItems',
				c((e) => new i.L5('user_search_items', i.Ds.KvCache, e))
			),
			l(this, 'channelsTransaction', (e) => this.channels(e.database).upgradeTransaction(e)),
			l(this, 'channelsTempTransaction', (e) => this.channelsTemp(e.database).upgradeTransaction(e)),
			l(this, 'basicChannelsTransaction', (e) => this.basicChannels(e.database).upgradeTransaction(e)),
			l(this, 'syncedBasicChannelsTransaction', (e) => this.syncedBasicChannels(e.database).upgradeTransaction(e)),
			l(this, 'cacheTransaction', (e) => this.cache(e.database).upgradeTransaction(e)),
			l(this, 'forceResyncVersionTransaction', (e) => this.forceResyncVersion(e.database).upgradeTransaction(e)),
			l(this, 'emojisTransaction', (e) => this.emojis(e.database).upgradeTransaction(e)),
			l(this, 'guildsTransaction', (e) => this.guilds(e.database).upgradeTransaction(e)),
			l(this, 'messagesTransaction', (e) => this.messages(e.database).upgradeTransaction(e)),
			l(this, 'stickersTransaction', (e) => this.stickers(e.database).upgradeTransaction(e)),
			l(this, 'guildVersionsTransaction', (e) => this.guildVersions(e.database).upgradeTransaction(e)),
			l(this, 'nonGuildVersionsTransaction', (e) => this.nonGuildVersions(e.database).upgradeTransaction(e)),
			l(this, 'userSettingsTransaction', (e) => this.userSettings(e.database).upgradeTransaction(e)),
			l(this, 'readStatesTransaction', (e) => this.readStates(e.database).upgradeTransaction(e)),
			l(this, 'userGuildSettingsTransaction', (e) => this.userGuildSettings(e.database).upgradeTransaction(e)),
			l(this, 'guildsRequiringDeletedIdsSyncTransaction', (e) => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)),
			l(this, 'userSearchItemsTransaction', (e) => this.userSearchItems(e.database).upgradeTransaction(e));
	}
}
function c(e) {
	return function (t) {
		let n = null != t ? t : o.Z.database(s.default.getId());
		return null == n ? null : e(n);
	};
}
t.Z = new u(a.Z, {});
