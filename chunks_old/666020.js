"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return i
  },
  unsubscribeMembers: function() {
    return r
  },
  subscribeToMemberUpdates: function() {
    return o
  },
  unsubscribeFromMemberUpdates: function() {
    return a
  },
  subscribeChannel: function() {
    return s
  },
  subscribeChannelDimensions: function() {
    return d
  }
}), n("424973");
var l = n("913144"),
  u = n("696605");

function i(e, t) {
  l.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function r(e, t) {
  l.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function o(e) {
  l.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function a(e) {
  l.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function s(e, t, n) {
  l.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function d(e) {
  let {
    guildId: t,
    channelId: n,
    y: l,
    height: i,
    rowHeight: r
  } = e;

  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
  }
  let a = [];

  function d(e) {
    let t = e + (u.MINIMUM_RANGE - 1);
    return a.push([e, t]), t + 1
  }
  let c = o(.5 * i),
    f = o(l, -c),
    E = o(l + i, c);
  for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; f <= E;) f = d(f);
  s(t, n, a)
}