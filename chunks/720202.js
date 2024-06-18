"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(601635),
  c = n(592125),
  E = n(271383);
let I = new d.Z(E.ZP.isMember, (e, t) => {
  _.Z.dispatch({
    type: "GUILD_MEMBERS_REQUEST",
    guildIds: [e],
    userIds: t
  })
});

function T() {
  I.reset()
}

function h(e, t) {
  return I.request(e, t), !1
}

function S(e, t) {
  return t.forEach(t => {
    let {
      author: n,
      mentions: i
    } = t;
    null != n && h(e, n.id), null == i || i.forEach(t => h(e, t.id))
  }), !1
}

function f(e) {
  let {
    channelId: t,
    messages: n
  } = e, i = c.Z.getChannel(t);
  return null != i && null != i.guild_id && S(i.guild_id, n)
}

function N(e) {
  let {
    guildId: t,
    messages: n
  } = e;
  return null != t && S(t, l().flatten(n))
}
class A extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, E.ZP)
  }
  requestMember(e, t) {
    h(e, t)
  }
}
o = "GuildMemberRequesterStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new A(_.Z, {
  CONNECTION_CLOSED: T,
  CONNECTION_OPEN: T,
  CONNECTION_RESUMED: function() {
    return I.requestUnacknowledged(), !1
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e;
    for (let e of t) e.members.forEach(t => {
      I.acknowledge(e.guildId, t.user.id)
    }), null != e.notFound && e.notFound.forEach(t => I.acknowledge(e.guildId, t));
    return !1
  },
  SEARCH_FINISH: N,
  MOD_VIEW_SEARCH_FINISH: N,
  LOCAL_MESSAGES_LOADED: f,
  LOAD_MESSAGES_SUCCESS: f,
  LOAD_MESSAGES_AROUND_SUCCESS: f,
  LOAD_PINNED_MESSAGES_SUCCESS: f,
  LOAD_RECENT_MENTIONS_SUCCESS: f
})