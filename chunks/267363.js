"use strict";
n.r(t), n.d(t, {
  ack: function() {
    return _
  },
  ackChannel: function() {
    return f
  },
  bulkAck: function() {
    return c
  },
  localAck: function() {
    return g
  },
  enableAutomaticAck: function() {
    return h
  },
  disableAutomaticAck: function() {
    return p
  },
  ackGuildFeature: function() {
    return E
  },
  ackUserFeature: function() {
    return m
  }
}), n("222007"), n("424973");
var i = n("249654"),
  l = n("913144"),
  u = n("401690"),
  s = n("233069"),
  o = n("42203"),
  d = n("245997"),
  a = n("697218"),
  r = n("49111");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0,
    u = arguments.length > 4 ? arguments[4] : void 0;
  l.default.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: i,
    immediate: t,
    force: n,
    context: r.CURRENT_APP_CONTEXT,
    location: u
  })
}

function f(e) {
  e.isCategory() ? ! function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = o.default.getChannel(e);
    if (null == i || null == i.guild_id) return;
    let l = d.default.getCategories(i.guild_id);
    if (null == l[e]) return;
    let a = l[e].filter(e => {
        let {
          channel: t
        } = e;
        return (0, s.isGuildReadableType)(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      r = [...a];
    for (let e of (a.forEach(e => {
        let t = u.default.getActiveJoinedThreadsForParent(i.guild_id, e);
        for (let e in t) r.push(e)
      }), r)) _(e, t, n)
  }(e.id, !0, !0) : e.isForumLikeChannel() ? _(e.id, !0, !0, i.default.fromTimestamp(Date.now())) : _(e.id, !0, !0)
}

function c(e, t) {
  l.default.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: r.CURRENT_APP_CONTEXT,
    onFinished: t
  })
}

function g(e) {
  l.default.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function h(e, t) {
  l.default.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function p(e, t) {
  l.default.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function E(e, t, n) {
  l.default.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: !1
  })
}

function m(e, t) {
  var n;
  let i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  null != i && l.default.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: !1
  })
}