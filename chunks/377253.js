"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("702976"), n("424973"), n("860677");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("408062"),
  l = n("979911"),
  u = n("605250"),
  d = n("447435"),
  c = n("10853"),
  f = n("38654"),
  _ = n("692038"),
  h = n("61400");
n("574073");
var g = n("432173"),
  m = n("915639"),
  E = n("568734"),
  p = n("271938"),
  v = n("42203"),
  S = n("162805"),
  T = n("923959"),
  I = n("26989"),
  C = n("305961"),
  A = n("957255"),
  y = n("27618"),
  N = n("18494"),
  R = n("162771"),
  O = n("697218"),
  D = n("49111");
let P = new Set,
  b = new u.default("MessageStore");

function L() {
  o.default.forEach(e => {
    o.default.commit(e.mutate({
      ready: !1,
      loadingMore: !1
    }))
  }), P.clear()
}

function M() {
  o.default.forEach(e => {
    e.forAll(e => {
      e.timestamp.locale(m.default.locale)
    })
  })
}

function U() {
  o.default.forEach(e => {
    let {
      channelId: t
    } = e;
    null == v.default.getChannel(t) && o.default.clear(t)
  })
}

function k() {
  o.default.forEach(e => {
    o.default.commit(e.reset(e.map(e => e.set("blocked", y.default.isBlocked(e.author.id)))))
  })
}

function w(e) {}

function V(e) {
  let {
    type: t,
    channelId: n,
    messageId: i,
    userId: s,
    emoji: r,
    burst: a,
    reactionType: l
  } = e, u = o.default.get(n);
  if (null == u || !(0, g.shouldApplyReaction)(e)) return !1;
  let d = p.default.getId() === s;
  u = u.update(i, n => {
    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(r, d, a, l);
    {
      let {
        colors: t
      } = e;
      return n.addReaction(r, d, t, a, l)
    }
  }), o.default.commit(u)
}

function G(e) {
  let {
    type: t,
    messageData: n
  } = e, {
    message: i
  } = n, s = (0, l.getFailedMessageId)(n), r = i.channelId, a = o.default.getOrCreate(r);
  if (!a.has(s)) return !1;
  a = a.update(s, e => {
    var n;
    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(c.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, E.addFlag)(e.flags, D.MessageFlags.EPHEMERAL))), e
  }), o.default.commit(a)
}
class F extends r.default.Store {
  initialize() {
    this.waitFor(O.default, v.default, S.default, I.default, m.default, N.default, R.default, C.default, y.default, T.default), this.syncWith([f.default], () => {})
  }
  getMessages(e) {
    if (f.default.hasViewingRoles()) {
      let t = v.default.getChannel(e),
        n = null == t ? void 0 : t.getGuildId();
      if (f.default.isViewingRoles(n) && !A.default.can(D.Permissions.VIEW_CHANNEL, t)) return new o.default(e)
    }
    return o.default.getOrCreate(e)
  }
  getMessage(e, t) {
    return o.default.getOrCreate(e).get(t)
  }
  getLastEditableMessage(e) {
    let t = O.default.getCurrentUser();
    return s(this.getMessages(e).toArray()).reverse().find(e => (0, h.default)(e, null == t ? void 0 : t.id))
  }
  getLastCommandMessage(e) {
    let t = O.default.getCurrentUser();
    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
  }
  jumpedMessageId(e) {
    let t = o.default.get(e);
    return null == t ? void 0 : t.jumpTargetId
  }
  focusedMessageId(e) {
    let t = o.default.get(e);
    return null == t ? void 0 : t.focusTargetId
  }
  hasPresent(e) {
    let t = o.default.get(e);
    return null != t && t.ready && t.hasPresent()
  }
  isReady(e) {
    return o.default.getOrCreate(e).ready
  }
  whenReady(e, t) {
    this.addConditionalChangeListener(() => {
      if (this.isReady(e)) return setImmediate(t), !1
    })
  }
  isLoadingMessages(e) {
    let t = o.default.getOrCreate(e);
    return t.loadingMore
  }
  hasCurrentUserSentMessage(e) {
    let t = O.default.getCurrentUser();
    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
  }
}
F.displayName = "MessageStore";
var x = new F(a.default, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      let n = o.default.get(e);
      if (null == n) continue;
      let i = n.cached || true;
      if (!i) {
        b.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(!1));
        continue
      }
      n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
    }
  },
  CONNECTION_OPEN: L,
  OVERLAY_INITIALIZE: L,
  CACHE_LOADED: function(e) {
    for (let [t, n] of Object.entries(e.messages)) {
      let e = o.default.getOrCreate(t).addCachedMessages(n, !0);
      o.default.commit(e)
    }
  },
  LOAD_MESSAGES: function() {
    return !0
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isBefore: n,
      isAfter: i,
      jump: s,
      hasMoreBefore: r,
      hasMoreAfter: a,
      messages: l,
      isStale: u,
      truncate: d
    } = e, c = o.default.getOrCreate(t);
    c = c.loadComplete({
      newMessages: l,
      isBefore: n,
      isAfter: i,
      jump: s,
      hasMoreBefore: r,
      hasMoreAfter: a,
      cached: u,
      hasFetched: !0
    }), null != d && (n || i) && (!n || !i) && (c = c.truncate(n, i)), o.default.commit(c)
  },
  LOAD_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getOrCreate(t);
    o.default.commit(n.mutate({
      loadingMore: !1,
      error: !0
    }))
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
    let {
      channelId: t,
      jump: n,
      focus: i,
      before: s,
      after: r,
      limit: a,
      truncate: l
    } = e, u = o.default.getOrCreate(t);
    (null == n ? void 0 : n.present) ? u = u.jumpToPresent(a): (null == i ? void 0 : i.messageId) != null ? u = u.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? u = u.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != s || null != r) && (u = u.loadFromCache(null != s, a)), null != l && (null != s || null != r) && (null == s || null == r) && (u = u.truncate(null != s, null != r)), o.default.commit(u)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let t = o.default.getOrCreate(e.channelId);
    (t.cached || !t.ready) && o.default.commit(t.addCachedMessages(e.messages, e.stale))
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
    let t = e.messageId,
      n = e.channelId,
      i = o.default.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => t.set("interactionData", e.interactionData)), o.default.commit(i)
  },
  TRUNCATE_MESSAGES: function(e) {
    let {
      channelId: t,
      truncateBottom: n,
      truncateTop: i
    } = e;
    b.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
    let s = o.default.getOrCreate(t);
    s = s.truncate(n, i), o.default.commit(s)
  },
  CLEAR_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    b.log("Clearing messages for ".concat(t)), o.default.clear(t), P.clear()
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n,
      isPushNotification: i
    } = e, s = o.default.getOrCreate(t);
    if (i) {
      b.log("Inserting message tapped on from a push notification", n.id, n.channel_id), o.default.commit(s.receivePushNotification(n));
      return
    }
    if (!s.ready) return !1;
    null != n.nonce && n.state !== D.MessageStates.SENDING && P.has(n.nonce) && (s = s.remove(n.nonce), P.delete(n.nonce)), s = s.receiveMessage(n, S.default.isAtBottom(t)), o.default.commit(s)
  },
  MESSAGE_SEND_FAILED: function(e) {
    let {
      channelId: t,
      messageId: n,
      reason: i
    } = e, s = o.default.getOrCreate(t);
    if (null == s || !s.has(n)) return !1;
    let r = s.get(n, !0);
    s = (null == r ? void 0 : r.isPoll()) === !0 ? s.remove(n) : s.update(n, e => ((e = e.set("state", D.MessageStates.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, E.addFlag)(e.flags, D.MessageFlags.EPHEMERAL))), e)), o.default.commit(s)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: G,
  MESSAGE_EDIT_FAILED_AUTOMOD: G,
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      n = e.message.channel_id,
      i = o.default.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => (0, _.updateMessageRecord)(t, e.message)), o.default.commit(i)
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = o.default.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, d.handleExplicitMediaScanTimeoutForMessage), o.default.commit(i)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = o.default.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    if (i.revealedMessageId === t) {
      let e = i.getAfter(t);
      i = null != e && e.blocked ? i.mutate({
        revealedMessageId: e.id
      }) : i.mutate({
        revealedMessageId: null
      })
    }
    i = i.remove(t), o.default.commit(i), P.delete(t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = o.default.getOrCreate(n);
    if (null == i) return !1;
    let r = i.removeMany(t);
    if (i === r) return !1;
    if (null != r.revealedMessageId && s.some(t, e => r.revealedMessageId === e)) {
      let e = r.getAfter(r.revealedMessageId);
      r = null != e && e.blocked ? r.mutate({
        revealedMessageId: e.id
      }) : r.mutate({
        revealedMessageId: null
      })
    }
    o.default.commit(r), t.forEach(e => {
      P.delete(e)
    })
  },
  MESSAGE_REVEAL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = o.default.getOrCreate(t);
    o.default.commit(i.mutate({
      revealedMessageId: n
    }))
  },
  USER_SETTINGS_PROTO_UPDATE: M,
  I18N_LOAD_SUCCESS: M,
  THREAD_CREATE_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getOrCreate(t);
    n = n.loadComplete({
      newMessages: [],
      hasMoreAfter: !1,
      hasMoreBefore: !1
    }), o.default.commit(n)
  },
  CHANNEL_DELETE: U,
  THREAD_DELETE: U,
  GUILD_DELETE: U,
  RELATIONSHIP_ADD: k,
  RELATIONSHIP_REMOVE: k,
  GUILD_MEMBERS_CHUNK: w,
  THREAD_MEMBER_LIST_UPDATE: w,
  MESSAGE_REACTION_ADD: V,
  MESSAGE_REACTION_ADD_MANY: function(e) {
    let {
      channelId: t,
      messageId: n,
      reactions: i
    } = e, s = o.default.get(t);
    if (null == s) return !1;
    s = s.update(n, e => {
      var t;
      return e.addReactionBatch(i, null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    }), o.default.commit(s)
  },
  MESSAGE_REACTION_REMOVE: V,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = o.default.get(t);
    if (null == i) return !1;
    i = i.update(n, e => e.set("reactions", [])), o.default.commit(i)
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
    let {
      channelId: t,
      messageId: n,
      emoji: i
    } = e, s = o.default.get(t);
    if (null == s) return !1;
    s = s.update(n, e => e.removeReactionsForEmoji(i)), o.default.commit(s)
  },
  LOGOUT: function() {
    o.default.forEach(e => {
      o.default.clear(e.channelId)
    }), P.clear()
  },
  UPLOAD_START: function(e) {
    let {
      message: t
    } = e;
    null != t.nonce && P.add(t.nonce)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      messageRecord: n
    } = e, i = null == n ? void 0 : n.nonce;
    if (null != i && P.has(i)) {
      let e = o.default.getOrCreate(t),
        n = e.get(i);
      if (null == n) return;
      e = (e = e.remove(i)).merge([n]), P.delete(i), o.default.commit(e)
    }
  }
})