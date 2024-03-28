"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return E
  },
  getStageChannelMetadata: function() {
    return f
  },
  summarizeUsernamesParticipating: function() {
    return c
  }
}), n("724458"), n("47120"), n("392711");
var l = n("19780"),
  u = n("5192"),
  a = n("700785"),
  s = n("427679"),
  d = n("157925"),
  i = n("981631"),
  r = n("71080"),
  o = n("689938");

function c(e, t, n, l) {
  let a = t[0],
    s = u.default.getName(e, n, a),
    d = null != l ? l : t.length;
  return 1 === d && null != a ? s : null == a ? o.default.Messages.SPEAKING_COUNT.format({
    count: d
  }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: s,
    count: d - 1
  })
}

function E(e, t) {
  switch (e) {
    case r.RowType.OWNER:
      return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case r.RowType.ADMINISTRATOR:
      return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case r.RowType.MEMBER:
    case r.RowType.ROLE:
      return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case r.RowType.EMPTY_STATE:
  }
  return null
}

function f(e) {
  let t = s.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: l.default.getMediaSessionId(),
    request_to_speak_state: a.canEveryoneRole(i.Permissions.REQUEST_TO_SPEAK, e) ? d.RequestToSpeakPermissionStates.EVERYONE : d.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}