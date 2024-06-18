"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = {},
  _ = {},
  d = new Set;
class c extends(i = a.ZP.Store) {
  getCompletedActions(e) {
    return null == e ? null : _[e]
  }
  hasCompletedActionForChannel(e, t) {
    let n = this.getCompletedActions(e);
    return null != n && null != n[t]
  }
  getState(e) {
    return null == e ? {} : {
      completedActions: _[e],
      loading: d.has(e)
    }
  }
}
o = "GuildOnboardingMemberActionStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new c(l.Z, {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    d.add(t)
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
    let {
      memberActions: t,
      guildId: n
    } = e;
    if (null == t) {
      _[n] = u;
      return
    }
    _[n] = t, d.delete(n)
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
    let {
      guildId: t
    } = e;
    d.delete(t)
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    if (null == _[t]) return !1;
    delete _[t]
  },
  COMPLETE_NEW_MEMBER_ACTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    _ = {
      ..._,
      [t]: {
        ..._[t],
        [n]: !0
      }
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (null == _[t.id]) return !1;
    delete _[t.id]
  }
})