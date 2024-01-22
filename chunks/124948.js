"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("49978"),
  l = n("560208"),
  u = n("42203"),
  d = n("26989");
let c = new o.default(d.default.isMember, (e, t) => {
  a.default.dispatch({
    type: "GUILD_MEMBERS_REQUEST",
    guildIds: [e],
    userIds: t
  })
});

function f() {
  c.reset()
}

function _(e, t) {
  return c.request(e, t), !1
}

function h(e, t) {
  return t.forEach(t => {
    let {
      author: n,
      mentions: i
    } = t;
    null != n && _(e, n.id), null == i || i.forEach(t => _(e, t.id))
  }), !1
}

function g(e) {
  let {
    channelId: t,
    messages: n
  } = e, i = u.default.getChannel(t);
  return null != i && null != i.guild_id && h(i.guild_id, n)
}
class m extends r.default.Store {
  initialize() {
    this.waitFor(u.default, d.default)
  }
  requestMember(e, t) {
    _(e, t)
  }
}
m.displayName = "GuildMemberRequesterStore";
var E = new m(a.default, {
  CONNECTION_CLOSED: f,
  CONNECTION_OPEN: f,
  CONNECTION_RESUMED: function() {
    return c.requestUnacknowledged(), !1
  },
  GUILD_MEMBERS_CHUNK: function(e) {
    let {
      guildId: t,
      members: n,
      notFound: i
    } = e;
    return n.forEach(e => {
      c.acknowledge(t, e.user.id)
    }), null != i && i.forEach(e => c.acknowledge(t, e)), !1
  },
  SEARCH_FINISH: function(e) {
    let {
      guildId: t,
      messages: n
    } = e;
    return null != t && h(t, s.flatten(n))
  },
  LOCAL_MESSAGES_LOADED: g,
  LOAD_MESSAGES_SUCCESS: g,
  LOAD_MESSAGES_AROUND_SUCCESS: g,
  LOAD_PINNED_MESSAGES_SUCCESS: g,
  LOAD_RECENT_MENTIONS_SUCCESS: g,
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      data: n
    } = e, i = (0, l.getMessagesFromGuildFeedFetch)(n);
    return h(t, i)
  }
})