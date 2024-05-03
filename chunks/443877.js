"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
}), i("47120");
var n = i("442837"),
  a = i("715903"),
  s = i("71619"),
  l = i("41776"),
  o = i("665906"),
  r = i("271383"),
  u = i("607744"),
  d = i("496675"),
  c = i("432376"),
  h = i("981631");

function f(e) {
  let t = null == e ? void 0 : e.guild_id,
    i = (0, n.useStateFromStores)([u.default], () => null == t || u.default.canChatInGuild(t), [t]),
    f = (0, n.useStateFromStores)([l.default], () => null != t && l.default.isLurking(t), [t]),
    m = (0, n.useStateFromStores)([r.default], () => null != t && r.default.isCurrentUserGuest(t), [t]),
    p = (0, n.useStateFromStores)([d.default], () => i && d.default.can(h.Permissions.ADD_REACTIONS, e), [i, e]),
    g = (0, a.useCurrentUserAutomodQuaratinedProfile)(t),
    [, T] = (0, s.useCurrentUserCommunicationDisabled)(t),
    S = (0, o.useIsActiveChannelOrUnarchivableThread)(e);
  return null == e ? {
    disableReactionReads: !0,
    disableReactionCreates: !0,
    disableReactionUpdates: !0,
    isLurking: !1,
    isGuest: !1,
    isPendingMember: !1
  } : {
    ...(0, c.default)({
      channel: e,
      canChat: i,
      renderReactions: !0,
      canAddNewReactions: p,
      isLurking: f,
      isGuest: m,
      communicationDisabled: T,
      isActiveChannelOrUnarchivableThread: S,
      isAutomodQuarantined: g
    }),
    isLurking: f,
    isGuest: m,
    isPendingMember: !1
  }
}