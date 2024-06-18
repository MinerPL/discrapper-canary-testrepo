"use strict";
n.d(t, {
  Ao: function() {
    return S
  },
  Jv: function() {
    return I
  },
  M0: function() {
    return T
  },
  Qj: function() {
    return h
  },
  VO: function() {
    return N
  },
  YO: function() {
    return f
  }
});
var i = n(592125),
  r = n(430824),
  s = n(496675),
  o = n(226951),
  a = n(981631);
let l = Array.from(n(176505).Vg).map(e => o.Z.escape(e)).join("|"),
  u = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
  _ = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
  d = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
  c = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
  E = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  I = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
  T = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

function h(e) {
  if (null == e) return null;
  let t = e.match(_);
  if (null != t && t.length > 3) return {
    guildId: t[1],
    channelId: t[2],
    messageId: t[3]
  };
  let n = e.match(d);
  if (null != n && n.length > 4) return {
    guildId: n[1],
    channelId: n[2],
    threadId: n[3],
    messageId: n[4]
  };
  let i = e.match(u);
  if (null != i && i.length > 1) {
    var r;
    return {
      guildId: i[1],
      channelId: null !== (r = i[2]) && void 0 !== r ? r : void 0
    }
  }
  let s = e.match(c);
  return null != s && s.length > 1 ? {
    guildId: s[1]
  } : null
}

function S(e) {
  if (null == e) return null;
  let t = e.match(E);
  return null != t && t.length > 1 ? {
    guildId: t[1],
    guildEventId: t[2],
    recurrenceId: t[3]
  } : null
}

function f(e) {
  return !!e.isPrivate() || s.Z.can(a.Plq.VIEW_CHANNEL, e)
}

function N(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null == r.Z.getGuild(t) && t !== a.ME) return !1;
  if (null == n) return !0;
  let s = i.Z.getChannel(n);
  return null != s && f(s)
}