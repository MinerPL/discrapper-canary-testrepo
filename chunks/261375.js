"use strict";
n.r(t), n("47120"), n("653041");
var a = n("768433"),
  s = n("710845"),
  l = n("38618"),
  i = n("131704"),
  r = n("314897"),
  o = n("592125"),
  u = n("430824"),
  d = n("496675"),
  c = n("386438"),
  f = n("287328"),
  E = n("458772");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new s.default("GuildBasicChannels");

function C(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.default.computeBasicPermissions(e) !== d.default.computeBasicPermissions(t)
}
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [n, a] = await Promise.all([f.default.basicChannels(e).getKvEntries(), f.default.syncedBasicChannels(e).getKvEntries()]),
      s = performance.now() - t,
      [l, i] = function(e) {
        let t = [],
          n = [];
        for (let [a, s] of e)(s ? t : n).push(a);
        return [t, n]
      }(a),
      r = new Set(l);
    return this.synced = r, _.verbose("loaded in ".concat(s, "ms (guilds: ").concat(n.length, ", synced: ").concat(r.size, " unsynced: ").concat(i.length, ")")), {
      all: n,
      stale: i,
      channels: n.filter(e => {
        let [t, n] = e;
        return r.has(t)
      })
    }
  }
  handleChannelCreate(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelDelete(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelUpdates(e, t) {
    for (let n of e.channels.filter(e => null != e.guild_id)) C(o.default.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let l of e.guilds) switch (l.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var n, a, s;
        let e = e => (0, i.createChannelRecordFromServer)(e, l.id);
        this.onGuildUpdate(l.id, null !== (a = null === (n = l.partial_updates.channels) || void 0 === n ? void 0 : n.map(e)) && void 0 !== a ? a : [], null !== (s = l.partial_updates.deleted_channel_ids) && void 0 !== s ? s : [], t);
        break;
      default:
        this.onGuildSync(l.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  async handlePostConnectionOpen() {
    let e = l.default.lastTimeConnectedChanged(),
      t = f.default.database();
    if (null == this.synced || null == t || !(0, a.isCacheEnabled)()) return;
    let n = u.default.getGuildIds(),
      s = n.filter(e => !this.synced.has(e));
    for (let a of (_.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(s.length, ")")), n)) {
      if (null == this.synced || t !== f.default.database() || e !== l.default.lastTimeConnectedChanged()) break;
      if (!this.synced.has(a)) {
        _.verbose("optimstically writing basic_channels (guild: ".concat(a, ")"));
        try {
          await o.ChannelLoader.loadGuildIds([a]), await t.transaction(e => this.syncOne(a, e), "handlePostConnectionOpen")
        } catch (e) {
          _.warn("couldn't optimstically write basic_channel:", e);
          return
        }
        await new Promise(e => setTimeout(e, 1e3))
      }
    }
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleOneGuildCreate(e, t) {
    null != e.channelUpdates ? this.onGuildUpdate(e.id, e.channelUpdates.writes, e.channelUpdates.deletes, t) : this.onGuildSync(e.id, t)
  }
  handleGuildUpdate(e, t) {
    this.unsync(e.guild.id, t)
  }
  handleGuildDelete(e, t) {
    !0 !== e.guild.unavailable && this.delete(e.guild.id, t)
  }
  handleGuildRoleUpdate(e, t) {
    let n = e.role,
      a = u.default.getRole(e.guildId, n.id);
    (null == a || n.permissions !== a.permissions) && this.unsync(e.guildId, t)
  }
  handleGuildMemberUpdate(e, t) {
    e.user.id === r.default.getId() && this.unsync(e.guildId, t)
  }
  handleWriteCaches(e, t) {
    this.sync(t)
  }
  resetInMemoryState() {
    this.synced = null
  }
  onGuildUpdate(e, t, n, a) {
    (n.length > 0 || t.some(e => C(o.default.getBasicChannel(e.id), e))) && this.unsync(e, a)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var n;
    null === (n = this.synced) || void 0 === n || n.delete(e), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).put(e, !1), E.default.invalidate(e)
  }
  sync(e) {
    _.verbose("Starting to write all basic channels");
    let t = performance.now(),
      n = {
        written: 0,
        skipped: 0
      };
    for (let t of u.default.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
    let a = performance.now() - t;
    _.verbose("".concat(n.written, " basic_channel guilds submitted (took: ").concat(a, "ms, skipped: ").concat(n.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var n, a;
    return !(null == u.default.getGuild(e) || (null === (n = this.synced) || void 0 === n ? void 0 : n.has(e))) && (null === (a = this.synced) || void 0 === a || a.add(e), f.default.basicChannelsTransaction(t).put(e, function(e) {
      return Object.values(o.default.getMutableGuildChannelsForGuild(e)).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: c.default.asBasicFlag(d.default.computePermissions(e))
      }))
    }(e)), f.default.syncedBasicChannelsTransaction(t).put(e, !0), !0)
  }
  constructor() {
    h(this, "synced", null), h(this, "actions", {
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
    })
  }
}