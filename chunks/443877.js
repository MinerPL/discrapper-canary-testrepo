"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
}), i("47120");
var n = i("442837"),
  a = i("71619"),
  s = i("41776"),
  l = i("665906"),
  o = i("271383"),
  r = i("607744"),
  u = i("496675"),
  d = i("432376"),
  c = i("981631");

function h(e) {
  let t = (0, n.useStateFromStores)([r.default], () => (null == e ? void 0 : e.guild_id) == null || r.default.canChatInGuild(e.guild_id), [e]),
    i = (0, n.useStateFromStores)([s.default], () => (null == e ? void 0 : e.guild_id) != null && s.default.isLurking(e.guild_id), [e]),
    h = (0, n.useStateFromStores)([o.default], () => (null == e ? void 0 : e.guild_id) != null && o.default.isCurrentUserGuest(e.guild_id), [e]),
    f = (0, n.useStateFromStores)([u.default], () => t && u.default.can(c.Permissions.ADD_REACTIONS, e), [t, e]),
    [, m] = (0, a.useCurrentUserCommunicationDisabled)(null == e ? void 0 : e.guild_id),
    p = (0, l.useIsActiveChannelOrUnarchivableThread)(e);
  return null == e ? {
    disableReactionReads: !0,
    disableReactionCreates: !0,
    disableReactionUpdates: !0,
    isLurking: !1,
    isGuest: !1,
    isPendingMember: !1
  } : {
    ...(0, d.default)({
      channel: e,
      canChat: t,
      renderReactions: !0,
      canAddNewReactions: f,
      isLurking: i,
      isGuest: h,
      communicationDisabled: m,
      isActiveChannelOrUnarchivableThread: p
    }),
    isLurking: i,
    isGuest: h,
    isPendingMember: !1
  }
}