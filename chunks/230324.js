"use strict";
n.r(t), n.d(t, {
  summarizeUsernamesParticipating: function() {
    return c
  },
  getRemoveModeratorTooltipHint: function() {
    return f
  },
  getStageChannelMetadata: function() {
    return E
  }
}), n("808653"), n("222007"), n("917351");
var a = n("945956"),
  i = n("387111"),
  l = n("991170"),
  u = n("834052"),
  s = n("837979"),
  o = n("49111"),
  r = n("606762"),
  d = n("782340");

function c(e, t, n, a) {
  let l = t[0],
    u = i.default.getName(e, n, l),
    s = null != a ? a : t.length;
  return 1 === s && null != l ? u : null == l ? d.default.Messages.SPEAKING_COUNT.format({
    count: s
  }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: u,
    count: s - 1
  })
}

function f(e, t) {
  switch (e) {
    case r.RowType.OWNER:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case r.RowType.ADMINISTRATOR:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case r.RowType.MEMBER:
    case r.RowType.ROLE:
      return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case r.RowType.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = u.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: a.default.getMediaSessionId(),
    request_to_speak_state: l.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, e) ? s.RequestToSpeakPermissionStates.EVERYONE : s.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}