"use strict";
let i;
n.r(t), n("47120");
var r, s, a, l, o = n("392711"),
  u = n.n(o),
  c = n("442837"),
  d = n("570140"),
  f = n("308063");
let p = {},
  _ = {};

function E(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function I(e) {
  return null != p[e] ? p[e] : (p[e] = {}, p[e])
}

function T(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  I(t)[n.id] = n
}
class m extends(r = c.default.Store) {
  isFetching(e, t) {
    return null != _[E(e, t)]
  }
  getWebhooksForGuild(e) {
    return u().values(I(e))
  }
  getWebhooksForChannel(e, t) {
    return u()(I(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return i
  }
}
l = "WebhooksStore", (a = "displayName") in(s = m) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new m(d.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: r,
      error: s
    } = e;
    if (null == r) {
      null != s ? (i = s, delete _[E(t, n)]) : null != n && null != p[t] && (i = null, f.default.fetchForChannel(t, n));
      return
    }
    i = null;
    let a = [];
    null != n && (a = u()(I(t)).values().filter(e => e.channel_id !== n).value());
    let l = p[t] = {};
    a.concat(r).forEach(e => l[e.id] = e), delete _[E(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    _[E(t, n)] = !0
  },
  WEBHOOK_CREATE: T,
  WEBHOOK_UPDATE: T,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete I(t)[n]
  }
})