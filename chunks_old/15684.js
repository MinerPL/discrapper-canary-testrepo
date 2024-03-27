"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var i = n("446674"),
  s = n("913144"),
  l = n("267363"),
  a = n("582713"),
  r = n("374363"),
  d = n("271938"),
  h = n("42203"),
  o = n("923959"),
  u = n("26989"),
  c = n("305961"),
  C = n("660478"),
  g = n("282109"),
  f = n("718517"),
  p = n("299039"),
  I = n("49111");
let v = new Set,
  _ = {},
  S = {};

function E(e, t) {
  let n = _[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    g.default.isOptInEnabled(e) && !(null === (i = h.default.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == C.default.ackMessageId(t) && s.default.wait(() => (0, l.ack)(t, !0, !0, p.default.atPreviousMillisecond(t)))
  }
}

function y(e) {
  var t;
  if (null != _[e]) return;
  let n = o.default.getChannels(e),
    i = n[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
    s = null === (t = u.default.getMember(e, d.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == s) return;
  _[e] = new Set;
  let l = new Date(s).getTime();
  0 !== i.length && (_[e] = new Set(i.filter(t => {
    let n = p.default.extractTimestamp(t);
    return null == C.default.getTrackedAckMessageId(t) && n > Date.now() - f.default.Millis.WEEK && n > r.default.getGuildRecentsDismissedAt(e) && n > l && !g.default.isChannelOrParentOptedIn(e, t)
  })), S[e] = Date.now())
}

function m() {
  p.default.keys(_).forEach(e => {
    let t = _[e];
    _[e] = new Set([...t].filter(t => !g.default.isChannelOrParentOptedIn(e, t)))
  })
}
class w extends i.default.Store {
  initialize() {
    this.waitFor(o.default, d.default, u.default, g.default, C.default, r.default), this.syncWith([g.default], m)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == _[e] && y(e), null != e && null !== (t = _[e]) && void 0 !== t ? t : v
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = c.default.getGuild(e);
    return !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) && (null != e && null == _[e] && y(e), (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) && null == C.default.getTrackedAckMessageId(t))
  }
}
w.displayName = "NewChannelsStore";
var N = new w(s.default, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == _[t]) return !1;
    n.forEach(e => _[t].delete(e)), 0 === _[t].size && delete _[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t) return !1;
    let i = _[t];
    return null == i || S[t] < Date.now() - f.default.Millis.HOUR ? (y(t), !0) : (null != n && E(t, n), !1)
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === a.SidebarType.VIEW_CHANNEL && (E(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (E(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete _[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    !n.isVocal() && (_[n.guild_id] = null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set, _[n.guild_id].add(n.id))
  }
})