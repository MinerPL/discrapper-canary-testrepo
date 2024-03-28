"use strict";
n.r(t), n("47120");
var i, s, l, a, r = n("442837"),
  d = n("570140"),
  o = n("45114"),
  h = n("897473"),
  u = n("581883"),
  c = n("314897"),
  C = n("592125"),
  f = n("984933"),
  g = n("271383"),
  p = n("430824"),
  v = n("306680"),
  I = n("9156"),
  E = n("70956"),
  _ = n("709054"),
  y = n("981631");
let m = new Set,
  S = {},
  w = {};

function N(e, t) {
  let n = S[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    I.default.isOptInEnabled(e) && !(null === (i = C.default.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == v.default.ackMessageId(t) && d.default.wait(() => (0, o.ack)(t, !0, !0, _.default.atPreviousMillisecond(t)))
  }
}

function T(e) {
  var t;
  if (null != S[e]) return;
  let n = f.default.getChannels(e)[0, f.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
    i = null === (t = g.default.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i) return;
  S[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (S[e] = new Set(n.filter(t => {
    let n = _.default.extractTimestamp(t);
    return null == v.default.getTrackedAckMessageId(t) && n > Date.now() - E.default.Millis.WEEK && n > u.default.getGuildRecentsDismissedAt(e) && n > s && !I.default.isChannelOrParentOptedIn(e, t)
  })), w[e] = Date.now())
}

function L() {
  _.default.keys(S).forEach(e => {
    let t = S[e];
    S[e] = new Set([...t].filter(t => !I.default.isChannelOrParentOptedIn(e, t)))
  })
}
class b extends(i = r.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default, g.default, I.default, v.default, u.default), this.syncWith([I.default], L)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == S[e] && T(e), null != e && null !== (t = S[e]) && void 0 !== t ? t : m
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = p.default.getGuild(e);
    return !!(null != i && i.hasFeature(y.GuildFeatures.COMMUNITY)) && (null != e && null == S[e] && T(e), (null === (n = S[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.default.getTrackedAckMessageId(t))
  }
}
a = "NewChannelsStore", (l = "displayName") in(s = b) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new b(d.default, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == S[t]) return !1;
    n.forEach(e => S[t].delete(e)), 0 === S[t].size && delete S[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == S[t] || w[t] < Date.now() - E.default.Millis.HOUR ? (T(t), !0) : (null != n && N(t, n), !1))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === h.SidebarType.VIEW_CHANNEL && (N(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (N(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete S[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    !n.isVocal() && (S[n.guild_id] = null !== (t = S[n.guild_id]) && void 0 !== t ? t : new Set, S[n.guild_id].add(n.id))
  }
})