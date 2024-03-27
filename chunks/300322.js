"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return C
  },
  useCanStartPublicThread: function() {
    return g
  },
  computeCanStartPublicThread: function() {
    return p
  },
  useCanStartPrivateThread: function() {
    return S
  },
  useCanStartThread: function() {
    return _
  },
  useCanViewThreadForMessage: function() {
    return P
  },
  useHasActiveThreads: function() {
    return A
  },
  useCanManageThread: function() {
    return T
  },
  useCanUnarchiveThread: function() {
    return M
  },
  canUnarchiveThread: function() {
    return R
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return b
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return y
  },
  computeIsReadOnlyThread: function() {
    return L
  },
  useIsThreadModerator: function() {
    return j
  },
  useCanJoinThreadVoice: function() {
    return O
  },
  useIsNonModInLockedThread: function() {
    return F
  }
});
var i = n("917351"),
  r = n.n(i),
  l = n("316693"),
  s = n("446674"),
  o = n("296892"),
  u = n("889014"),
  a = n("913491"),
  c = n("233069"),
  d = n("271938"),
  f = n("42203"),
  h = n("957255"),
  v = n("299039"),
  m = n("401690"),
  E = n("49111");
let C = (0, o.default)({
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

function g(e, t) {
  let n = (0, s.useStateFromStores)([h.default], () => {
    let t = e.isForumLikeChannel() ? E.Permissions.SEND_MESSAGES : l.combine(E.Permissions.CREATE_PUBLIC_THREADS, E.Permissions.READ_MESSAGE_HISTORY);
    return h.default.can(t, e)
  }, [e]);
  return I(n, e, t)
}

function p(e, t) {
  let n = e.isForumLikeChannel() ? E.Permissions.SEND_MESSAGES : l.combine(E.Permissions.CREATE_PUBLIC_THREADS, E.Permissions.READ_MESSAGE_HISTORY),
    i = h.default.can(n, e);
  return I(i, e, t)
}

function S(e) {
  let t = (0, s.useStateFromStores)([h.default], () => h.default.can(l.combine(E.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === E.ChannelTypes.GUILD_TEXT && I(t, e)
}

function _(e) {
  let t = g(e),
    n = S(e);
  return t || n
}

function I(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(E.MessageFlags.HAS_THREAD) || (0, a.default)(n))) && !0
}

function P(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(v.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, s.useStateFromStores)([h.default], () => h.default.can(E.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(E.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function A(e) {
  return (0, s.useStateFromStoresObject)([m.default, h.default], () => {
    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      l = r(n).some(e => h.default.can(E.Permissions.VIEW_CHANNEL, e.channel)),
      s = r(t).some(e => !(e.channel.id in n) && h.default.can(E.Permissions.VIEW_CHANNEL, e.channel)),
      o = r(i).some(e => h.default.can(E.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: l || s || o,
      hasMoreActiveThreads: o || s
    }
  })
}

function T(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, s.useStateFromStores)([h.default], () => null != t && h.default.can(E.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function N(e, t) {
  return null != e && t.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function x(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function M(e) {
  let t = (0, s.useStateFromStores)([h.default], () => N(e, h.default)),
    n = j(e);
  return x(e, t, n)
}

function R(e) {
  let t = N(e, h.default),
    n = function(e) {
      return w(e, h.default)
    }(e);
  return x(e, t, n)
}

function b(e) {
  var t;
  let n = (0, s.useStateFromStores)([h.default], () => null != e && h.default.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function y(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function L(e) {
  let t = h.default.can(E.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function w(e, t) {
  return null != e && t.can(E.Permissions.MANAGE_THREADS, e)
}

function j(e) {
  return (0, s.useStateFromStores)([h.default], () => w(e, h.default))
}

function O(e) {
  let t = (0, u.default)(),
    n = (0, s.useStateFromStores)([h.default], () => h.default.can(E.Permissions.CONNECT, e)),
    i = b(e),
    r = C.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function F(e) {
  let t = j(e);
  return e.isLockedThread() && !t
}