n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140);
let u = {},
  c = {},
  d = new Set();
class _ extends(r = o.ZP.Store) {
  getCompletedActions(e) {
return null == e ? null : c[e];
  }
  hasCompletedActionForChannel(e, t) {
let n = this.getCompletedActions(e);
return null != n && null != n[t];
  }
  getState(e) {
return null == e ? {} : {
  completedActions: c[e],
  loading: d.has(e)
};
  }
}
s = 'GuildOnboardingMemberActionStore', (a = 'displayName') in(i = _) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new _(l.Z, {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
let {
  guildId: t
} = e;
d.add(t);
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
let {
  memberActions: t,
  guildId: n
} = e;
if (null == t) {
  c[n] = u;
  return;
}
c[n] = t, d.delete(n);
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
let {
  guildId: t
} = e;
d.delete(t);
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
let {
  guildId: t
} = e;
if (null == c[t])
  return !1;
delete c[t];
  },
  COMPLETE_NEW_MEMBER_ACTION: function(e) {
let {
  guildId: t,
  channelId: n
} = e;
c = {
  ...c,
  [t]: {
    ...c[t],
    [n]: !0
  }
};
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
if (null == c[t.id])
  return !1;
delete c[t.id];
  }
});