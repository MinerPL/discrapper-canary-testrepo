n(47120), n(653041);
var i, s = n(442837),
  a = n(570140),
  r = n(314897),
  l = n(592125),
  o = n(430824),
  c = n(709054),
  d = n(231873);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = {};

function h(e, t) {
  let n = _[e];
  return !(null == n || n.has(t)) && (_[e] = new Set(n.add(t)), !0);
}
class E extends(i = s.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(r.default, o.Z), _ = {}, null != e && c.default.keys(e).forEach(t => {
  let n = e[t];
  null != n && 'function' == typeof n[Symbol.iterator] && (_[t] = new Set(n));
});
  }
  getProgress(e) {
return _[e];
  }
  hasProgress(e) {
let t = _[e];
return null != t && !t.has(d.Rg.DISMISSED);
  }
  getState() {
return _;
  }
}
u(E, 'displayName', 'GuildProgressStore'), u(E, 'persistKey', 'GuildProgressStore'), new E(a.Z, {
  CONNECTION_OPEN: function() {
let e = [];
c.default.keys(_).forEach(t => {
  _[t].has(d.Rg.COMPLETED) && e.push(t);
}), e.forEach(e => h(e, d.Rg.DISMISSED));
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
let {
  guildId: t
} = e;
null == _[t] && (_[t] = new Set()), !_[t].has(d.Rg.COMPLETED) && _[t].delete(d.Rg.DISMISSED);
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
let {
  guildId: t
} = e;
if (null == _[t])
  return !1;
_[t] = new Set(_[t].add(d.Rg.COMPLETED));
  },
  GUILD_PROGRESS_DISMISS: function(e) {
let {
  guildId: t
} = e;
return h(t, d.Rg.DISMISSED);
  },
  GUILD_CREATE: function(e) {
let {
  guild: {
    id: t,
    member_count: n
  }
} = e, i = o.Z.getGuild(t);
if (null == i)
  return !1;
i.ownerId === r.default.getId() && null != _[i.id] && (null != i.icon && _[i.id].add(d.Rg.AVATAR), n > 1 && _[i.id].add(d.Rg.INVITE));
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
return null != t && null != t.guild_id && null != _[t.guild_id] && h(t.guild_id, d.Rg.CHANNEL);
  },
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e, n = !1;
for (let e of t)
  null != e && null != e.guild_id && null != _[e.guild_id] && !1 !== h(e.guild_id, d.Rg.CHANNEL) && (n = !0);
return n;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
let {
  guild: t
} = e;
return null != t && null != t.id && null != _[t.id] && null != t.icon && h(t.id, d.Rg.AVATAR);
  },
  MESSAGE_CREATE: function(e) {
var t;
let {
  channelId: n,
  message: i
} = e, s = l.Z.getChannel(n);
return (null === (t = i.author) || void 0 === t ? void 0 : t.id) === r.default.getId() && null != s && null != _[s.guild_id] && h(s.guild_id, d.Rg.MESSAGE);
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
let {
  guildId: t,
  memberCount: n
} = e;
return null != _[t] && !!(n > 1) && h(t, d.Rg.INVITE);
  }
});