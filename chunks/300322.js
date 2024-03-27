"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return m
  },
  useCanStartPublicThread: function() {
    return p
  },
  computeCanStartPublicThread: function() {
    return v
  },
  useCanStartPrivateThread: function() {
    return A
  },
  useCanStartThread: function() {
    return C
  },
  useCanViewThreadForMessage: function() {
    return g
  },
  useHasActiveThreads: function() {
    return I
  },
  useCanManageThread: function() {
    return N
  },
  useCanUnarchiveThread: function() {
    return b
  },
  canUnarchiveThread: function() {
    return L
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return R
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return M
  },
  computeIsReadOnlyThread: function() {
    return P
  },
  useIsThreadModerator: function() {
    return H
  },
  useCanJoinThreadVoice: function() {
    return U
  },
  useIsNonModInLockedThread: function() {
    return D
  }
});
var i = n("917351"),
  a = n.n(i),
  l = n("316693"),
  s = n("446674"),
  r = n("296892"),
  o = n("889014"),
  u = n("913491"),
  c = n("233069"),
  d = n("271938"),
  f = n("42203"),
  E = n("957255"),
  _ = n("299039"),
  h = n("401690"),
  S = n("49111");
let m = (0, r.default)({
  id: "2022-07_voice_in_threads",
  label: "Voice in Threads",
  kind: "guild",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: !0
    }
  }]
});

function p(e, t) {
  let n = (0, s.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : l.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return T(n, e, t)
}

function v(e, t) {
  let n = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : l.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY),
    i = E.default.can(n, e);
  return T(i, e, t)
}

function A(e) {
  let t = (0, s.useStateFromStores)([E.default], () => E.default.can(l.combine(S.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === S.ChannelTypes.GUILD_TEXT && T(t, e)
}

function C(e) {
  let t = p(e),
    n = A(e);
  return t || n
}

function T(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
}

function g(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(_.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, s.useStateFromStores)([E.default], () => E.default.can(S.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function I(e) {
  return (0, s.useStateFromStoresObject)([h.default, E.default], () => {
    let t = h.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = h.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = h.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      l = a(n).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      s = a(t).some(e => !(e.channel.id in n) && E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      r = a(i).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: l || s || r,
      hasMoreActiveThreads: r || s
    }
  })
}

function N(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, s.useStateFromStores)([E.default], () => null != t && E.default.can(S.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function x(e, t) {
  return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function y(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function b(e) {
  let t = (0, s.useStateFromStores)([E.default], () => x(e, E.default)),
    n = H(e);
  return y(e, t, n)
}

function L(e) {
  let t = x(e, E.default),
    n = function(e) {
      return F(e, E.default)
    }(e);
  return y(e, t, n)
}

function R(e) {
  var t;
  let n = (0, s.useStateFromStores)([E.default], () => null != e && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function M(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function P(e) {
  let t = E.default.can(S.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function F(e, t) {
  return null != e && t.can(S.Permissions.MANAGE_THREADS, e)
}

function H(e) {
  return (0, s.useStateFromStores)([E.default], () => F(e, E.default))
}

function U(e) {
  let t = (0, o.default)(),
    n = (0, s.useStateFromStores)([E.default], () => E.default.can(S.Permissions.CONNECT, e)),
    i = R(e),
    a = m.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && a && n && i
}

function D(e) {
  let t = H(e);
  return e.isLockedThread() && !t
}