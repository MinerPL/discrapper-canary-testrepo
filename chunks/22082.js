n(47120);
var i, s, l, r, a = n(442837),
  d = n(570140),
  h = n(45114),
  o = n(897473),
  u = n(581883),
  c = n(314897),
  C = n(592125),
  g = n(984933),
  f = n(271383),
  p = n(430824),
  v = n(306680),
  I = n(9156),
  E = n(70956),
  S = n(709054),
  y = n(981631);
let m = new Set(),
  w = {},
  _ = {};

function L(e, t) {
  let n = w[e];
  if (null != n && null != t && n.has(t)) {
var i;
I.ZP.isOptInEnabled(e) && !(null === (i = C.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == v.ZP.ackMessageId(t) && d.Z.wait(() => (0, h.In)(t, !0, !0, S.default.atPreviousMillisecond(t)));
  }
}

function N(e) {
  var t;
  if (null != w[e])
return;
  let n = g.ZP.getChannels(e)[g.sH].map(e => e.channel.id),
i = null === (t = f.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i)
return;
  w[e] = new Set();
  let s = new Date(i).getTime();
  if (0 !== n.length)
w[e] = new Set(n.filter(t => {
  let n = S.default.extractTimestamp(t);
  return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > s && !I.ZP.isChannelOrParentOptedIn(e, t);
})), _[e] = Date.now();
}

function Z() {
  S.default.keys(w).forEach(e => {
let t = w[e];
w[e] = new Set([...t].filter(t => !I.ZP.isChannelOrParentOptedIn(e, t)));
  });
}
class A extends(i = a.ZP.Store) {
  initialize() {
this.waitFor(g.ZP, c.default, f.ZP, I.ZP, v.ZP, u.Z), this.syncWith([I.ZP], Z);
  }
  getNewChannelIds(e) {
var t;
return null != e && null == w[e] && N(e), null != e && null !== (t = w[e]) && void 0 !== t ? t : m;
  }
  shouldIndicateNewChannel(e, t) {
var n;
if (null == e)
  return !1;
let i = p.Z.getGuild(e);
return !!(null != i && i.hasFeature(y.oNc.COMMUNITY)) && (null != e && null == w[e] && N(e), (null === (n = w[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t));
  }
}
r = 'NewChannelsStore', (l = 'displayName') in(s = A) ? Object.defineProperty(s, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = r, t.Z = new A(d.Z, {
  BULK_CLEAR_RECENTS: function(e) {
let {
  guildId: t,
  channelIds: n
} = e;
if (null == w[t])
  return !1;
n.forEach(e => w[t].delete(e)), 0 === w[t].size && delete w[t];
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n
} = e;
return null != t && (null == w[t] || _[t] < Date.now() - E.Z.Millis.HOUR ? (N(t), !0) : (null != n && L(t, n), !1));
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
let {
  guildId: t,
  channelId: n,
  sidebarType: i
} = e;
return null != t && i === o.tI.VIEW_CHANNEL && (L(t, n), !1);
  },
  SIDEBAR_VIEW_GUILD: function(e) {
let {
  guildId: t,
  baseChannelId: n
} = e;
return null != t && (L(t, n), !1);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete w[t.id];
  },
  CHANNEL_CREATE: function(e) {
var t;
let {
  channel: n
} = e;
!n.isVocal() && (w[n.guild_id] = null !== (t = w[n.guild_id]) && void 0 !== t ? t : new Set(), w[n.guild_id].add(n.id));
  }
});