n.d(t, {
  Ao: function() {
return m;
  },
  Jv: function() {
return f;
  },
  M0: function() {
return h;
  },
  Qj: function() {
return p;
  },
  VO: function() {
return T;
  },
  YO: function() {
return I;
  }
});
var r = n(592125),
  i = n(430824),
  a = n(496675),
  s = n(226951),
  o = n(981631);
let l = Array.from(n(176505).Vg).map(e => s.Z.escape(e)).join('|'),
  u = new RegExp('^/channels/(\\d+|'.concat(o.ME, ')(?:/)?(\\d+|').concat(l, ')?')),
  c = new RegExp('^/channels/(\\d+|'.concat(o.ME, ')(?:/)(\\d+|').concat(l, ')(?:/)(\\d+)')),
  d = RegExp('^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)'),
  _ = RegExp('^/guild-stages/(\\d+)(?:/)?(\\d+)?'),
  E = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
  f = new RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|'.concat(o.ME, ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?')),
  h = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)');

function p(e) {
  if (null == e)
return null;
  let t = e.match(c);
  if (null != t && t.length > 3)
return {
  guildId: t[1],
  channelId: t[2],
  messageId: t[3]
};
  let n = e.match(d);
  if (null != n && n.length > 4)
return {
  guildId: n[1],
  channelId: n[2],
  threadId: n[3],
  messageId: n[4]
};
  let r = e.match(u);
  if (null != r && r.length > 1) {
var i;
return {
  guildId: r[1],
  channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
};
  }
  let a = e.match(_);
  return null != a && a.length > 1 ? {
guildId: a[1]
  } : null;
}

function m(e) {
  if (null == e)
return null;
  let t = e.match(E);
  return null != t && t.length > 1 ? {
guildId: t[1],
guildEventId: t[2],
recurrenceId: t[3]
  } : null;
}

function I(e) {
  return !!e.isPrivate() || a.Z.can(o.Plq.VIEW_CHANNEL, e);
}

function T(e) {
  let {
guildId: t,
channelId: n
  } = e;
  if (null == i.Z.getGuild(t) && t !== o.ME)
return !1;
  if (null == n)
return !0;
  let a = r.Z.getChannel(n);
  return null != a && I(a);
}