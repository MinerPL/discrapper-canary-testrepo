"use strict";
n.d(t, {
  CZ: function() {
    return T
  },
  ES: function() {
    return N
  },
  FT: function() {
    return f
  },
  In: function() {
    return d
  },
  Ju: function() {
    return S
  },
  U6: function() {
    return c
  },
  YJ: function() {
    return A
  },
  iV: function() {
    return I
  },
  jT: function() {
    return h
  },
  y5: function() {
    return E
  }
}), n(47120), n(653041);
var i = n(570140),
  r = n(601070),
  s = n(131704),
  o = n(592125),
  a = n(324067),
  l = n(594174),
  u = n(709054),
  _ = n(981631);

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0,
    s = arguments.length > 4 ? arguments[4] : void 0;
  i.Z.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: r,
    immediate: t,
    force: n,
    context: _.e3s,
    location: s
  })
}

function c(e) {
  e.isCategory() ? ! function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = o.Z.getChannel(e);
    if (null == i || null == i.guild_id) return;
    let l = a.Z.getCategories(i.guild_id);
    if (null == l[e]) return;
    let u = l[e].filter(e => {
        let {
          channel: t
        } = e;
        return (0, s.vc)(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      _ = [...u];
    for (let e of (u.forEach(e => {
        let t = r.Z.getActiveJoinedThreadsForParent(i.guild_id, e);
        for (let e in t) _.push(e)
      }), _)) d(e, t, n)
  }(e.id, !0, !0) : e.isForumLikeChannel() ? d(e.id, !0, !0, u.default.fromTimestamp(Date.now())) : d(e.id, !0, !0)
}

function E(e, t) {
  i.Z.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: _.e3s,
    onFinished: t
  })
}

function I(e) {
  i.Z.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function T(e, t) {
  i.Z.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function h(e, t) {
  i.Z.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function S(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: !1
  })
}

function f(e, t) {
  var n;
  if (null != (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) i.Z.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: !1
  })
}

function N(e) {
  i.Z.dispatch({
    type: "MESSAGE_REQUEST_ACK",
    ackedId: e
  })
}

function A() {
  i.Z.dispatch({
    type: "MESSAGE_REQUEST_CLEAR_ACK"
  })
}