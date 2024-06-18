"use strict";
let i;
n(47120);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  d = n(570140),
  c = n(177523),
  E = n(353926),
  I = n(480384),
  T = n(653733),
  h = n(768419),
  S = n(314897),
  f = n(439170),
  N = n(433355),
  A = n(592125),
  m = n(486472),
  O = n(271383),
  R = n(430824),
  C = n(19780),
  p = n(699516),
  g = n(944486),
  L = n(914010),
  v = n(981631);
let D = new c.ZP(e => {
  for (let t in e) null == R.Z.getGuild(t) && !m.Z.isUnavailable(t) && delete e[t];
  d.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: e
  })
});

function M(e, t) {
  let n = {};
  D.forEach(r => {
    var s;
    r !== L.Z.getGuildId() && r !== C.Z.getGuildId() && r !== (null === (s = A.Z.getChannel(g.Z.getChannelId())) || void 0 === s ? void 0 : s.getGuildId()) && !(0, T.h)(r).shouldPrioritizeSubscription && (null == i || i.guildId !== r) && (D.clearWithoutFlushing(r, e), t && (n[r] = D.get(r)))
  }), !u().isEmpty(n) && d.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: n
  })
}

function P(e, t) {
  return D.subscribeToGuild(e), null != t && N.ZP.getSection(t) === v.ULH.MEMBERS && y(e, t, c.KV)
}

function y(e, t, n) {
  if (t === f.oL) return D.subscribeChannel(e, t, n);
  let i = A.Z.getChannel(t);
  if (null == i) return !1;
  let r = i.getGuildId();
  return (r !== e && e === v.I_8 && D.subscribeToGuild(r), null != i && i.isThread()) ? i.type === v.d4z.ANNOUNCEMENT_THREAD ? D.subscribeChannel(r, i.parent_id, n) : !!i.isActiveThread() && D.subscribeThreadMemberList(r, t, g.Z.getChannelId()) : D.subscribeChannel(r, t, n)
}

function U(e) {
  let {
    type: t
  } = e;
  "CONNECTION_OPEN" === t && M(!0, !1), Object.keys(R.Z.getGuilds()).forEach(e => {
    (0, T.h)(e).shouldPrioritizeSubscription && y(e, f.oL, c.KV)
  });
  let n = L.Z.getGuildId();
  null != n && P(n, g.Z.getChannelId(n));
  let i = {};
  D.forEach(e => {
    null == R.Z.getGuild(e) ? D.clearWithoutFlushing(e, !0) : i[e] = D.get(e)
  }), !u().isEmpty(i) && d.Z.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: i
  })
}

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return !m.Z.isUnavailable(t) && P(t, n)
}

function G() {
  return P(L.Z.getGuildId(), g.Z.getChannelId())
}

function w() {
  let e = h.Z.getSyncingWith();
  if (null == e) null != i && (D.unsubscribeUser(i.guildId, i.userId), i = null);
  else {
    let {
      userId: t
    } = e;
    if (null != i && i.userId === t || p.Z.isFriend(t)) return !1;
    let n = O.ZP.memberOf(t);
    if (0 === n.length) return !1;
    let [r] = n;
    i = {
      guildId: r,
      userId: t
    }, D.subscribeUser(r, t)
  }
  return !1
}
class k extends(r = _.ZP.Store) {
  initialize() {
    this.waitFor(A.Z, R.Z, L.Z, g.Z, C.Z, S.default, N.ZP, E.Z, I.Z), this.syncWith([h.Z], w), this.syncWith([N.ZP], G)
  }
  getSubscribedThreadIds() {
    return D.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return D.isSubscribedToThreads(e)
  }
  isSubscribedToAnyMember(e) {
    return D.isSubscribedToAnyMember(e)
  }
  isSubscribedToMemberUpdates(e) {
    return D.isSubscribedToMemberUpdates(e)
  }
  isSubscribedToAnyGuildChannel(e) {
    let t = D.get(e).channels;
    return null != t && Object.keys(t).length > 0
  }
}
a = "GuildSubscriptionsStore", (o = "displayName") in(s = k) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new k(d.Z, {
  CONNECTION_OPEN: U,
  CONNECTION_RESUMED: U,
  CONNECTION_CLOSED: function() {
    M(!1, !1)
  },
  IDLE: function(e) {
    let {
      idle: t
    } = e;
    if (!t) return !1;
    M(!1, !0)
  },
  LOGOUT: function() {
    D.reset()
  },
  VOICE_CHANNEL_SELECT: b,
  CHANNEL_SELECT: b,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.id === L.Z.getGuildId() && G()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    D.clearWithoutFlushing(t.id, !0)
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
    let {
      guildId: t,
      userIds: n
    } = e;
    return n.forEach(e => {
      e !== S.default.getId() && D.subscribeUser(t, e)
    }), !1
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
    let {
      guildId: t,
      userIds: n
    } = e;
    return n.forEach(e => {
      D.unsubscribeUser(t, e)
    }), !1
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    D.subscribeToMemberUpdates(t)
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    D.unsubscribeFromMemberUpdates(t)
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      ranges: i
    } = e;
    return y(t, n, i)
  },
  GUILD_SUBSCRIPTIONS: function(e) {
    let {
      guildId: t
    } = e;
    return D.subscribeToGuild(t)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return P(t, n)
  },
  INBOX_OPEN: function(e) {
    let {
      guildIds: t
    } = e;
    for (let e of t) null != e && D.subscribeToGuild(e);
    return !1
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return t.isArchivedThread() ? D.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && g.Z.getChannelId() === t.id && void D.subscribeThreadMemberList(t.guild_id, t.id, g.Z.getChannelId())
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return D.unsubscribeThreadMemberList(t.guild_id, t.id)
  },
  THREAD_LIST_SYNC: G
})