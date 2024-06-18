"use strict";
n(47120), n(789020), n(653041), n(177593);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(89892),
  c = n(673750),
  E = n(710845),
  I = n(163268),
  T = n(723352),
  h = n(160404),
  S = n(786761),
  f = n(418476),
  N = n(739566),
  A = n(995774),
  m = n(706454),
  O = n(630388),
  R = n(709054),
  C = n(314897),
  p = n(592125),
  g = n(796974),
  L = n(984933),
  v = n(271383),
  D = n(430824),
  M = n(496675),
  P = n(699516),
  y = n(944486),
  U = n(914010),
  b = n(594174),
  G = n(981631);
let w = new Set,
  k = new E.Z("MessageStore"),
  B = !1;

function x() {
  d.Z.forEach(e => {
    d.Z.commit(e.mutate({
      ready: !1,
      loadingMore: !1
    }))
  }), w.clear()
}

function V() {
  d.Z.forEach(e => {
    let {
      channelId: t
    } = e;
    null == p.Z.getChannel(t) && d.Z.clear(t)
  })
}

function Z() {
  d.Z.forEach(e => {
    d.Z.commit(e.reset(e.map(e => e.set("blocked", P.Z.isBlocked(e.author.id)))))
  })
}

function H(e) {
  let {
    type: t,
    channelId: n,
    messageId: i,
    userId: r,
    emoji: s,
    reactionType: o
  } = e, a = d.Z.get(n);
  if (null == a || !(0, A.sm)(e)) return !1;
  let l = C.default.getId() === r;
  a = a.update(i, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, o) : n.removeReaction(s, l, o)), d.Z.commit(a)
}

function F(e) {
  let {
    type: t,
    messageData: n
  } = e, {
    message: i
  } = n, r = (0, c.hc)(n), s = i.channelId, o = d.Z.getOrCreate(s);
  if (!o.has(r)) return !1;
  o = o.update(r, e => {
    var n;
    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(T.K).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, O.pj)(e.flags, G.iLy.EPHEMERAL))), e
  }), d.Z.commit(o)
}
class Y extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(b.default, p.Z, g.Z, v.ZP, m.default, y.Z, U.Z, D.Z, P.Z, L.ZP), this.syncWith([h.Z], () => {})
  }
  getMessages(e) {
    if (h.Z.hasViewingRoles()) {
      let t = p.Z.getChannel(e),
        n = null == t ? void 0 : t.getGuildId();
      if (h.Z.isViewingRoles(n) && !M.Z.can(G.Plq.VIEW_CHANNEL, t)) return new d.Z(e)
    }
    return d.Z.getOrCreate(e)
  }
  getMessage(e, t) {
    return d.Z.getOrCreate(e).get(t)
  }
  getLastEditableMessage(e) {
    let t = b.default.getCurrentUser();
    return l()(this.getMessages(e).toArray()).reverse().find(e => (0, f.Z)(e, null == t ? void 0 : t.id))
  }
  getLastCommandMessage(e) {
    let t = b.default.getCurrentUser();
    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
  }
  getLastMessage(e) {
    return l()(this.getMessages(e).toArray()).reverse().get(0)
  }
  getLastNonCurrentUserMessage(e) {
    let t = b.default.getCurrentUser();
    return l()(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? void 0 : t.id))
  }
  jumpedMessageId(e) {
    let t = d.Z.get(e);
    return null == t ? void 0 : t.jumpTargetId
  }
  focusedMessageId(e) {
    let t = d.Z.get(e);
    return null == t ? void 0 : t.focusTargetId
  }
  hasPresent(e) {
    let t = d.Z.get(e);
    return null != t && t.ready && t.hasPresent()
  }
  isReady(e) {
    return d.Z.getOrCreate(e).ready
  }
  whenReady(e, t) {
    this.addConditionalChangeListener(() => {
      if (this.isReady(e)) return setImmediate(t), !1
    })
  }
  isLoadingMessages(e) {
    return d.Z.getOrCreate(e).loadingMore
  }
  hasCurrentUserSentMessage(e) {
    let t = b.default.getCurrentUser();
    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
  }
  hasCurrentUserSentMessageSinceAppStart() {
    return B
  }
}
o = "MessageStore", (s = "displayName") in(r = Y) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new Y(_.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      let n = d.Z.get(e);
      if (null != n) {
        n.cached;
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
      }
    }
  },
  CONNECTION_OPEN: x,
  OVERLAY_INITIALIZE: x,
  CACHE_LOADED: function(e) {
    for (let [t, n] of R.default.entries(e.messages)) {
      let e = d.Z.getOrCreate(t).addCachedMessages(n, !0);
      d.Z.commit(e)
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
      jump: r,
      hasMoreBefore: s,
      hasMoreAfter: o,
      messages: a,
      isStale: l,
      truncate: u
    } = e, _ = d.Z.getOrCreate(t);
    _ = _.loadComplete({
      newMessages: a,
      isBefore: n,
      isAfter: i,
      jump: r,
      hasMoreBefore: s,
      hasMoreAfter: o,
      cached: l,
      hasFetched: !0
    }), null != u && (n || i) && (!n || !i) && (_ = _.truncate(n, i)), d.Z.commit(_)
  },
  LOAD_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e, n = d.Z.getOrCreate(t);
    d.Z.commit(n.mutate({
      loadingMore: !1,
      error: !0
    }))
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
    let {
      channelId: t,
      jump: n,
      focus: i,
      before: r,
      after: s,
      limit: o,
      truncate: a
    } = e, l = d.Z.getOrCreate(t);
    (null == n ? void 0 : n.present) ? l = l.jumpToPresent(o): (null == i ? void 0 : i.messageId) != null ? l = l.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != r || null != s) && (l = l.loadFromCache(null != r, o)), null != a && (null != r || null != s) && (null == r || null == s) && (l = l.truncate(null != r, null != s)), d.Z.commit(l)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let t = d.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && d.Z.commit(t.addCachedMessages(e.messages, e.stale))
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
    let t = e.messageId,
      n = e.channelId,
      i = d.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => t.set("interactionData", e.interactionData)), d.Z.commit(i)
  },
  TRUNCATE_MESSAGES: function(e) {
    let {
      channelId: t,
      truncateBottom: n,
      truncateTop: i
    } = e;
    k.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
    let r = d.Z.getOrCreate(t);
    r = r.truncate(n, i), d.Z.commit(r)
  },
  CLEAR_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    k.log("Clearing messages for ".concat(t)), d.Z.clear(t), w.clear()
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n,
      isPushNotification: i
    } = e, r = d.Z.getOrCreate(t);
    if (i) {
      k.log("Inserting message tapped on from a push notification", n.id, n.channel_id), d.Z.commit(r.receivePushNotification(n));
      return
    }
    if (!r.ready) return !1;
    null != n.nonce && n.state !== G.yb.SENDING && w.has(n.nonce) && (r = r.remove(n.nonce), w.delete(n.nonce)), r = r.receiveMessage(n, g.Z.isAtBottom(t)), d.Z.commit(r)
  },
  MESSAGE_SEND_FAILED: function(e) {
    let {
      channelId: t,
      messageId: n,
      reason: i
    } = e, r = d.Z.getOrCreate(t);
    if (null == r || !r.has(n)) return !1;
    let s = r.get(n, !0);
    r = (null == s ? void 0 : s.isPoll()) === !0 ? r.remove(n) : r.update(n, e => ((e = e.set("state", G.yb.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, O.pj)(e.flags, G.iLy.EPHEMERAL)) : null != i && (e = e.set("interactionError", null != i ? i : "")), e)), d.Z.commit(r)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: F,
  MESSAGE_EDIT_FAILED_AUTOMOD: F,
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      n = e.message.channel_id,
      i = d.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => (0, S.wi)(t, e.message)), d.Z.commit(i)
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = d.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, I.Cm), d.Z.commit(i)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = d.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    if (i.revealedMessageId === t) {
      let e = i.getAfter(t);
      i = null != e && e.blocked ? i.mutate({
        revealedMessageId: e.id
      }) : i.mutate({
        revealedMessageId: null
      })
    }
    i = i.remove(t), d.Z.commit(i), w.delete(t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = d.Z.getOrCreate(n);
    if (null == i) return !1;
    let r = i.removeMany(t);
    if (i === r) return !1;
    if (null != r.revealedMessageId && l().some(t, e => r.revealedMessageId === e)) {
      let e = r.getAfter(r.revealedMessageId);
      r = null != e && e.blocked ? r.mutate({
        revealedMessageId: e.id
      }) : r.mutate({
        revealedMessageId: null
      })
    }
    d.Z.commit(r), t.forEach(e => {
      w.delete(e)
    })
  },
  MESSAGE_REVEAL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = d.Z.getOrCreate(t);
    d.Z.commit(i.mutate({
      revealedMessageId: n
    }))
  },
  THREAD_CREATE_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = d.Z.getOrCreate(t);
    n = n.loadComplete({
      newMessages: [],
      hasMoreAfter: !1,
      hasMoreBefore: !1
    }), d.Z.commit(n)
  },
  CHANNEL_DELETE: V,
  THREAD_DELETE: V,
  GUILD_DELETE: V,
  RELATIONSHIP_ADD: Z,
  RELATIONSHIP_REMOVE: Z,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {},
  THREAD_MEMBER_LIST_UPDATE: function(e) {},
  MESSAGE_REACTION_ADD: H,
  MESSAGE_REACTION_ADD_MANY: function(e) {
    let {
      channelId: t,
      messageId: n,
      reactions: i
    } = e, r = d.Z.get(t);
    if (null == r) return !1;
    r = r.update(n, e => {
      var t;
      return e.addReactionBatch(i, null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    }), d.Z.commit(r)
  },
  MESSAGE_REACTION_REMOVE: H,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = d.Z.get(t);
    if (null == i) return !1;
    i = i.update(n, e => e.set("reactions", [])), d.Z.commit(i)
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
    let {
      channelId: t,
      messageId: n,
      emoji: i
    } = e, r = d.Z.get(t);
    if (null == r) return !1;
    r = r.update(n, e => e.removeReactionsForEmoji(i)), d.Z.commit(r)
  },
  LOGOUT: function() {
    d.Z.forEach(e => {
      d.Z.clear(e.channelId)
    }), w.clear()
  },
  UPLOAD_START: function(e) {
    let {
      message: t
    } = e;
    null != t.nonce && w.add(t.nonce)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      messageRecord: n
    } = e, i = null == n ? void 0 : n.nonce;
    if (null != i && w.has(i)) {
      let e = d.Z.getOrCreate(t),
        n = e.get(i);
      if (null == n) return;
      e = (e = e.remove(i)).merge([n]), w.delete(i), d.Z.commit(e)
    }
  },
  LOCAL_MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e, n = b.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (B = !0)
  }
})