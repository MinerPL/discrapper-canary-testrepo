"use strict";
n.r(e), n.d(e, {
  ack: function() {
    return c
  },
  ackChannel: function() {
    return E
  },
  bulkAck: function() {
    return _
  },
  localAck: function() {
    return A
  },
  enableAutomaticAck: function() {
    return C
  },
  disableAutomaticAck: function() {
    return s
  },
  ackGuildFeature: function() {
    return h
  },
  ackUserFeature: function() {
    return L
  }
}), n("222007"), n("424973");
var l = n("913144"),
  u = n("401690"),
  i = n("233069"),
  r = n("42203"),
  d = n("245997"),
  a = n("697218"),
  o = n("299039"),
  f = n("49111");

function c(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 ? arguments[3] : void 0,
    i = arguments.length > 4 ? arguments[4] : void 0;
  l.default.dispatch({
    type: "CHANNEL_ACK",
    channelId: t,
    messageId: u,
    immediate: e,
    force: n,
    context: f.CURRENT_APP_CONTEXT,
    location: i
  })
}

function E(t) {
  t.isCategory() ? ! function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      l = r.default.getChannel(t);
    if (null == l || null == l.guild_id) return;
    let a = d.default.getCategories(l.guild_id);
    if (null == a[t]) return;
    let o = a[t].filter(t => {
        let {
          channel: e
        } = t;
        return (0, i.isGuildReadableType)(e.type)
      }).map(t => {
        let {
          channel: e
        } = t;
        return e.id
      }),
      f = [...o];
    for (let t of (o.forEach(t => {
        let e = u.default.getActiveJoinedThreadsForParent(l.guild_id, t);
        for (let t in e) f.push(t)
      }), f)) c(t, e, n)
  }(t.id, !0, !0) : t.isForumLikeChannel() ? c(t.id, !0, !0, o.default.fromTimestamp(Date.now())) : c(t.id, !0, !0)
}

function _(t, e) {
  l.default.dispatch({
    type: "BULK_ACK",
    channels: t,
    context: f.CURRENT_APP_CONTEXT,
    onFinished: e
  })
}

function A(t) {
  l.default.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: t
  })
}

function C(t, e) {
  l.default.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: t,
    windowId: e
  })
}

function s(t, e) {
  l.default.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: t,
    windowId: e
  })
}

function h(t, e, n) {
  l.default.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: t,
    ackType: e,
    ackedId: n,
    local: !1
  })
}

function L(t, e) {
  var n;
  let u = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  null != u && l.default.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: t,
    ackedId: e,
    local: !1
  })
}