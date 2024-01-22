"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  a = n("446674"),
  l = n("913144"),
  o = n("611183");
let u = {},
  c = {};

function d(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function f(e) {
  return null != u[e] ? u[e] : (u[e] = {}, u[e])
}

function p(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  f(t)[n.id] = n
}
class _ extends a.default.Store {
  isFetching(e, t) {
    return null != c[d(e, t)]
  }
  getWebhooksForGuild(e) {
    return s.values(f(e))
  }
  getWebhooksForChannel(e, t) {
    return s(f(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return r
  }
}
_.displayName = "WebhooksStore";
var m = new _(l.default, {
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: i,
      error: a
    } = e;
    if (null == i) {
      null != a ? (r = a, delete c[d(t, n)]) : null != n && null != u[t] && (r = null, o.default.fetchForChannel(t, n));
      return
    }
    r = null;
    let l = [];
    null != n && (l = s(f(t)).values().filter(e => e.channel_id !== n).value());
    let p = u[t] = {};
    l.concat(i).forEach(e => p[e.id] = e), delete c[d(t, n)]
  },
  WEBHOOKS_FETCHING: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    c[d(t, n)] = !0
  },
  WEBHOOK_CREATE: p,
  WEBHOOK_UPDATE: p,
  WEBHOOK_DELETE: function(e) {
    let {
      guildId: t,
      webhookId: n
    } = e;
    delete f(t)[n]
  }
})