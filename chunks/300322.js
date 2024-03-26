"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return C
  },
  useCanStartPublicThread: function() {
    return v
  },
  computeCanStartPublicThread: function() {
    return S
  },
  useCanStartPrivateThread: function() {
    return m
  },
  useCanStartThread: function() {
    return R
  },
  useCanViewThreadForMessage: function() {
    return A
  },
  useHasActiveThreads: function() {
    return N
  },
  useCanManageThread: function() {
    return T
  },
  useCanUnarchiveThread: function() {
    return O
  },
  canUnarchiveThread: function() {
    return P
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return y
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return x
  },
  computeIsReadOnlyThread: function() {
    return b
  },
  useIsThreadModerator: function() {
    return F
  },
  useCanJoinThreadVoice: function() {
    return w
  },
  useIsNonModInLockedThread: function() {
    return L
  }
});
var r = n("917351"),
  i = n.n(r),
  s = n("316693"),
  o = n("446674"),
  a = n("296892"),
  l = n("889014"),
  u = n("913491"),
  d = n("233069"),
  c = n("271938"),
  f = n("42203"),
  E = n("957255"),
  h = n("299039"),
  _ = n("401690"),
  p = n("49111");
let C = (0, a.default)({
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

function v(e, t) {
  let n = (0, o.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : s.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return I(n, e, t)
}

function S(e, t) {
  let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : s.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
    r = E.default.can(n, e);
  return I(r, e, t)
}

function m(e) {
  let t = (0, o.useStateFromStores)([E.default], () => E.default.can(s.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === p.ChannelTypes.GUILD_TEXT && I(t, e)
}

function R(e) {
  let t = v(e),
    n = m(e);
  return t || n
}

function I(e, t, n) {
  return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
}

function A(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, o.useStateFromStores)([E.default], () => E.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function N(e) {
  return (0, o.useStateFromStoresObject)([_.default, E.default], () => {
    let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = _.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      r = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      s = i(n).some(e => E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      o = i(t).some(e => !(e.channel.id in n) && E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      a = i(r).some(e => E.default.can(p.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: s || o || a,
      hasMoreActiveThreads: a || o
    }
  })
}

function T(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, o.useStateFromStores)([E.default], () => null != t && E.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
    r = (0, o.useStateFromStores)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
}

function g(e, t) {
  return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function M(e, t, n) {
  var r;
  return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
}

function O(e) {
  let t = (0, o.useStateFromStores)([E.default], () => g(e, E.default)),
    n = F(e);
  return M(e, t, n)
}

function P(e) {
  let t = g(e, E.default),
    n = function(e) {
      return D(e, E.default)
    }(e);
  return M(e, t, n)
}

function y(e) {
  var t;
  let n = (0, o.useStateFromStores)([E.default], () => null != e && E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function x(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function b(e) {
  let t = E.default.can(p.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function D(e, t) {
  return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
}

function F(e) {
  return (0, o.useStateFromStores)([E.default], () => D(e, E.default))
}

function w(e) {
  let t = (0, l.default)(),
    n = (0, o.useStateFromStores)([E.default], () => E.default.can(p.Permissions.CONNECT, e)),
    r = y(e),
    i = C.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && i && n && r
}

function L(e) {
  let t = F(e);
  return e.isLockedThread() && !t
}