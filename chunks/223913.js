"use strict";
n.r(t), n.d(t, {
  canStreamInChannel: function() {
    return m
  },
  getStreamCTAString: function() {
    return E
  },
  canWatchStream: function() {
    return p
  },
  useCanWatchStream: function() {
    return v
  },
  getStreamEligibleChannels: function() {
    return S
  }
}), n("424973"), n("222007");
var i, s, r = n("316693"),
  a = n("446674"),
  o = n("76393"),
  l = n("923959"),
  u = n("305961"),
  d = n("957255"),
  c = n("800762"),
  f = n("404008"),
  _ = n("49111"),
  h = n("782340");
let g = (e, t) => e.isPrivate() || t.can(r.default.combine(_.Permissions.CONNECT, _.Permissions.VIEW_CHANNEL), e);

function m(e, t, n) {
  var i;
  let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (e.isPrivate()) return !0;
  let r = t.getGuild(e.getGuildId()),
    a = null !== (i = null == r ? void 0 : r.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
  return (!e.isGuildStageVoice() || !(a <= 0)) && (!s || !!g(e, n)) && !!n.can(_.Permissions.STREAM, e) && null != r && r.afkChannelId !== e.id && !0
}

function E(e) {
  switch (e) {
    case 0:
      return h.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
    case 1:
      return h.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
    case 2:
      return h.default.Messages.STREAM_NO_PERMISSION_CTA;
    default:
      return h.default.Messages.WATCH_STREAM
  }
}

function p(e, t, n, i, s) {
  let r;
  if (null == e) return [!1, 2];
  let a = t.isInChannel(e.id),
    o = (0, f.isChannelFull)(e, t, n),
    l = g(e, i),
    u = null != s.getAwaitingRemoteSessionInfo() || null != s.getRemoteSessionId();
  u ? r = 0 : l || a ? o && !a && (r = 1) : r = 2;
  let d = !__OVERLAY__ && !u && (a || l && !o);
  return [d, r]
}

function v(e) {
  return (0, a.useStateFromStoresArray)([c.default, u.default, d.default, o.default], () => p(e, c.default, u.default, d.default, o.default))
}

function S(e, t, n) {
  let i = [];
  for (let {
      channel: s
    }
    of e[l.GUILD_VOCAL_CHANNELS_KEY]) m(s, t, n) && i.push(s);
  return i
}(s = i || (i = {}))[s.REMOTE_MODE = 0] = "REMOTE_MODE", s[s.CHANNEL_FULL = 1] = "CHANNEL_FULL", s[s.NO_PERMISSION = 2] = "NO_PERMISSION"