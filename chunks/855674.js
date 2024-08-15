let a;
t(47120);
var r, i, s, o, l = t(392711),
  c = t.n(l),
  d = t(442837),
  u = t(570140),
  m = t(308063);
let _ = {},
  f = {};

function C(e, n) {
  return null == n && (n = 'guild'), ''.concat(e, ':').concat(n);
}

function h(e) {
  return null != _[e] ? _[e] : (_[e] = {}, _[e]);
}

function x(e) {
  let {
guildId: n,
webhook: t
  } = e;
  h(n)[t.id] = t;
}
class p extends(r = d.ZP.Store) {
  isFetching(e, n) {
return null != f[C(e, n)];
  }
  getWebhooksForGuild(e) {
return c().values(h(e));
  }
  getWebhooksForChannel(e, n) {
return c()(h(e)).values().filter(e => e.channel_id === n).value();
  }
  get error() {
return a;
  }
}
o = 'WebhooksStore', (s = 'displayName') in(i = p) ? Object.defineProperty(i, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = o, n.Z = new p(u.Z, {
  WEBHOOKS_UPDATE: function(e) {
let {
  guildId: n,
  channelId: t,
  webhooks: r,
  error: i
} = e;
if (null == r) {
  null != i ? (a = i, delete f[C(n, t)]) : null != t && null != _[n] && (a = null, m.Z.fetchForChannel(n, t));
  return;
}
a = null;
let s = [];
null != t && (s = c()(h(n)).values().filter(e => e.channel_id !== t).value());
let o = _[n] = {};
s.concat(r).forEach(e => o[e.id] = e), delete f[C(n, t)];
  },
  WEBHOOKS_FETCHING: function(e) {
let {
  guildId: n,
  channelId: t
} = e;
f[C(n, t)] = !0;
  },
  WEBHOOK_CREATE: x,
  WEBHOOK_UPDATE: x,
  WEBHOOK_DELETE: function(e) {
let {
  guildId: n,
  webhookId: t
} = e;
delete h(n)[t];
  }
});