"use strict";
n.d(t, {
  TV: function() {
    return _
  },
  b8: function() {
    return u
  },
  k$: function() {
    return a
  },
  kr: function() {
    return l
  },
  w5: function() {
    return o
  },
  ym: function() {
    return s
  }
}), n(653041);
var i = n(570140),
  r = n(509848);

function s(e, t) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function o(e, t) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function a(e) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function l(e) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function u(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function _(e) {
  let {
    guildId: t,
    channelId: n,
    y: i,
    height: s,
    rowHeight: o
  } = e;

  function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
  }
  let l = [];

  function _(e) {
    let t = e + (r.dj - 1);
    return l.push([e, t]), t + 1
  }
  let d = a(.5 * s),
    c = a(i, -d),
    E = a(i + s, d);
  for (c > 0 && (c = Math.max(_(0), c)), c = Math.floor(c / r.dj) * r.dj; c <= E;) c = _(c);
  u(t, n, l)
}