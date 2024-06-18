"use strict";
n(47120);
var i = n(442837),
  r = n(348326),
  s = n(570140),
  o = n(314897),
  a = n(261875);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
r.Ds.KvCache, r.Ds.KvCache;
class u extends i.yh {
  initialize() {
    this.waitFor(o.default)
  }
  constructor(...e) {
    super(...e), l(this, "database", e => a.Z.database(null != e ? e : o.default.getId())), l(this, "channels", _(e => new r.Np("guild_channels", r.Ds.KvCache, e))), l(this, "channelsTemp", _(e => new r.Bx("guild_channels_temp", r.Ds.KvCache, e))), l(this, "basicChannels", _(e => new r.Nq("basic_channels", r.Ds.KvCache, e))), l(this, "syncedBasicChannels", _(e => new r.Nq("basic_channels_synced", r.Ds.KvCache, e))), l(this, "cache", _(e => new r.Nq("cache", r.Ds.KvCache, e))), l(this, "forceResyncVersion", _(e => new r.Nq("force_resync_version", r.Ds.KvCache, e))), l(this, "emojis", _(e => new r.Np("guild_emojis", r.Ds.KvCache, e))), l(this, "guilds", _(e => new r.L5("guilds", r.Ds.KvCache, e))), l(this, "guildsRequiringDeletedIdsSync", _(e => new r.L5("guilds_requiring_deleted_ids_sync", r.Ds.KvCache, e))), l(this, "messages", _(e => new r.uC("messages", r.Ds.Messages, e))), l(this, "stickers", _(e => new r.Np("guild_stickers", r.Ds.KvCache, e))), l(this, "guildVersions", _(e => new r.L5("guild_versions", r.Ds.KvCache, e))), l(this, "nonGuildVersions", _(e => new r.L5("non_guild_versions", r.Ds.KvCache, e))), l(this, "userSettings", _(e => new r.L5("user_settings", r.Ds.KvCache, e))), l(this, "readStates", _(e => new r.Nq("read_states", r.Ds.KvCache, e))), l(this, "userGuildSettings", _(e => new r.Nq("user_guild_settings", r.Ds.KvCache, e))), l(this, "userSearchItems", _(e => new r.L5("user_search_items", r.Ds.KvCache, e))), l(this, "channelsTransaction", e => this.channels(e.database).upgradeTransaction(e)), l(this, "channelsTempTransaction", e => this.channelsTemp(e.database).upgradeTransaction(e)), l(this, "basicChannelsTransaction", e => this.basicChannels(e.database).upgradeTransaction(e)), l(this, "syncedBasicChannelsTransaction", e => this.syncedBasicChannels(e.database).upgradeTransaction(e)), l(this, "cacheTransaction", e => this.cache(e.database).upgradeTransaction(e)), l(this, "forceResyncVersionTransaction", e => this.forceResyncVersion(e.database).upgradeTransaction(e)), l(this, "emojisTransaction", e => this.emojis(e.database).upgradeTransaction(e)), l(this, "guildsTransaction", e => this.guilds(e.database).upgradeTransaction(e)), l(this, "messagesTransaction", e => this.messages(e.database).upgradeTransaction(e)), l(this, "stickersTransaction", e => this.stickers(e.database).upgradeTransaction(e)), l(this, "guildVersionsTransaction", e => this.guildVersions(e.database).upgradeTransaction(e)), l(this, "nonGuildVersionsTransaction", e => this.nonGuildVersions(e.database).upgradeTransaction(e)), l(this, "userSettingsTransaction", e => this.userSettings(e.database).upgradeTransaction(e)), l(this, "readStatesTransaction", e => this.readStates(e.database).upgradeTransaction(e)), l(this, "userGuildSettingsTransaction", e => this.userGuildSettings(e.database).upgradeTransaction(e)), l(this, "guildsRequiringDeletedIdsSyncTransaction", e => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)), l(this, "userSearchItemsTransaction", e => this.userSearchItems(e.database).upgradeTransaction(e))
  }
}

function _(e) {
  return function(t) {
    let n = null != t ? t : a.Z.database(o.default.getId());
    return null == n ? null : e(n)
  }
}
t.Z = new u(s.Z, {})