"use strict";
n(47120);
var i = n(147913),
  r = n(57132),
  s = n(914010),
  o = n(924301),
  a = n(482241);
let l = {},
  u = new Set,
  _ = async e => {
    if (!(0 === o.ZP.getGuildScheduledEventsForGuild(e).length || u.has(e))) try {
      await a.Z.getGuildEventsForCurrentUser(e), u.add(e)
    } catch (e) {}
  };
class d extends i.Z {
  async getGuildEventUserCounts(e, t, n) {
    let i = n.filter(n => null == l["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - l["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
    if (!(Date.now() - l["".concat(e, "-").concat(t)] < 18e5) || 0 !== i.length) {
      l["".concat(e, "-").concat(t)] = Date.now(), i.forEach(n => l["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
      try {
        await a.Z.fetchGuildEventUserCounts(e, t, i)
      } catch (e) {}
    }
  }
  getGuildEventUsers(e, t, n) {
    return a.Z.fetchUsersForGuildEvent(e, t, n)
  }
  getGuildEventsForCurrentUser(e) {
    return _(e)
  }
  handleConnectionOpen() {
    u.clear(), l = {};
    let e = (0, r.cn)(),
      t = s.Z.getLastSelectedGuildId();
    e && null != t && o.ZP.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
  }
  handleGuildUnavailable(e) {
    let {
      guildId: t
    } = e;
    u.delete(t), delete l[t]
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e, n = t.id;
    u.delete(n), delete l[n]
  }
  handleInviteResolveSuccess(e) {
    var t;
    let {
      invite: n
    } = e, i = n.guild_scheduled_event, r = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    if (null != i && null != r) _(r)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null != t) o.ZP.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
      INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new d