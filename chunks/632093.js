"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("710845"),
  i = n("9156"),
  r = n("287328");
let o = new l.default("ReadStates");
t.default = new class e {
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
    let n = s().max(e.userGuildSettings.map(e => {
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
    var e, t, n;
    e = this, t = "actions", n = {
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
    }, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}