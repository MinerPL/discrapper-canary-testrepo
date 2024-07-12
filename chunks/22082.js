n(47120);
var i, s, l, r, a = n(442837),
  d = n(570140),
  o = n(45114),
  h = n(897473),
  u = n(581883),
  c = n(314897),
  C = n(592125),
  g = n(984933),
  p = n(271383),
  f = n(430824),
  v = n(306680),
  I = n(9156),
  E = n(70956),
  y = n(709054),
  S = n(981631);
let _ = new Set(),
  m = {},
  w = {};

function b(e, t) {
  let n = m[e];
  if (null != n && null != t && n.has(t)) {
var i;
I.ZP.isOptInEnabled(e) && !(null === (i = C.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == v.ZP.ackMessageId(t) && d.Z.wait(() => (0, o.In)(t, !0, !0, y.default.atPreviousMillisecond(t)));
  }
}

function N(e) {
  var t;
  if (null != m[e])
return;
  let n = g.ZP.getChannels(e)[g.sH].map(e => e.channel.id),
i = null === (t = p.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i)
return;
  m[e] = new Set();
  let s = new Date(i).getTime();
  if (0 !== n.length)
m[e] = new Set(n.filter(t => {
  let n = y.default.extractTimestamp(t);
  return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > s && !I.ZP.isChannelOrParentOptedIn(e, t);
})), w[e] = Date.now();
}

function L() {
  y.default.keys(m).forEach(e => {
let t = m[e];
m[e] = new Set([...t].filter(t => !I.ZP.isChannelOrParentOptedIn(e, t)));
  });
}
class Z extends(i = a.ZP.Store) {
  initialize() {
this.waitFor(g.ZP, c.default, p.ZP, I.ZP, v.ZP, u.Z), this.syncWith([I.ZP], L);
  }
  getNewChannelIds(e) {
var t;
return null != e && null == m[e] && N(e), null != e && null !== (t = m[e]) && void 0 !== t ? t : _;
  }
  shouldIndicateNewChannel(e, t) {
var n;
if (null == e)
  return !1;
let i = f.Z.getGuild(e);
return !!(null != i && i.hasFeature(S.oNc.COMMUNITY)) && (null != e && null == m[e] && N(e), (null === (n = m[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t));
  }
}
r = 'NewChannelsStore', (l = 'displayName') in(s = Z) ? Object.defineProperty(s, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = r, t.Z = new Z(d.Z, {
  BULK_CLEAR_RECENTS: function(e) {
let {
  guildId: t,
  channelIds: n
} = e;
if (null == m[t])
  return !1;
n.forEach(e => m[t].delete(e)), 0 === m[t].size && delete m[t];
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n
} = e;
return null != t && (null == m[t] || w[t] < Date.now() - E.Z.Millis.HOUR ? (N(t), !0) : (null != n && b(t, n), !1));
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
let {
  guildId: t,
  channelId: n,
  sidebarType: i
} = e;
return null != t && i === h.tI.VIEW_CHANNEL && (b(t, n), !1);
  },
  SIDEBAR_VIEW_GUILD: function(e) {
let {
  guildId: t,
  baseChannelId: n
} = e;
return null != t && (b(t, n), !1);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete m[t.id];
  },
  CHANNEL_CREATE: function(e) {
var t;
let {
  channel: n
} = e;
!n.isVocal() && (m[n.guild_id] = null !== (t = m[n.guild_id]) && void 0 !== t ? t : new Set(), m[n.guild_id].add(n.id));
  }
});