"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  l = n("605250"),
  i = n("282109"),
  r = n("802493");
let o = new l.default("ReadStates");
var u = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await r.default.userGuildSettings(e).getMany(),
      a = performance.now();
    return o.log("asynchronously loaded in ".concat(a - t, "ms (userGuildSettings: ").concat(n.length, ")")), n
  }
  resetInMemoryState() {}
  handleConnectionOpen(e, t) {
    !e.userGuildSettings.partial && r.default.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
  }
  handleUserGuildSettingsUpdate(e, t) {
    let n = s.max(e.userGuildSettings.map(e => {
      var t;
      return null !== (t = e.version) && void 0 !== t ? t : -1
    }));
    null != n && this.write(e.userGuildSettings, n, t)
  }
  write(e, t, n) {
    let a = r.default.userGuildSettingsTransaction(n);
    for (let t of e) {
      var s;
      let e = {
        ...(0, i.getGuildDefaults)(t.guild_id),
        ...t,
        channel_overrides: (0, i.convertChannelOverridesToMap)(t.channel_overrides)
      };
      a.put(null !== (s = t.guild_id) && void 0 !== s ? s : "dm-sentinel", e)
    }
    r.default.nonGuildVersionsTransaction(n).put({
      id: "user_guild_settings_version",
      version: t
    })
  }
  constructor() {
    this.actions = {
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
    }
  }
}