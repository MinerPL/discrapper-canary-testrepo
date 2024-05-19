"use strict";
n.r(t), n.d(t, {
  getProgressStepAnalyticsName: function() {
    return m
  },
  trackClanAdminInviteClicked: function() {
    return C
  },
  trackClanAdminInviteViewed: function() {
    return O
  },
  trackClanAdoptIdentity: function() {
    return E
  },
  trackClanApplicationAction: function() {
    return D
  },
  trackClanApplicationNavigation: function() {
    return v
  },
  trackClanApplicationViewed: function() {
    return M
  },
  trackClanApplyToJoinViewed: function() {
    return c
  },
  trackClanApplyWaitlist: function() {
    return y
  },
  trackClanDiscoveryCardClicked: function() {
    return R
  },
  trackClanDiscoveryViewed: function() {
    return A
  },
  trackClanProfileViewed: function() {
    return _
  },
  trackClanSendInterviewMessage: function() {
    return L
  },
  trackClanUserInviteClicked: function() {
    return p
  },
  trackClanUserInviteViewed: function() {
    return N
  },
  trackConvertStepViewed: function() {
    return I
  },
  trackConvertSuccessModalConfirm: function() {
    return h
  },
  trackConvertSuccessModalViewed: function() {
    return S
  },
  trackMemberVerificationApplicationViewed: function() {
    return g
  },
  trackSettingsSaved: function() {
    return f
  },
  trackSettingsViewed: function() {
    return T
  }
});
var i = n("524437"),
  r = n("605236"),
  a = n("314897"),
  s = n("271383"),
  o = n("626135"),
  l = n("308083"),
  u = n("981631"),
  d = n("921944");

function _(e) {
  let {
    guildId: t,
    hasJoinRequest: n,
    source: i,
    messageId: r,
    tagUserId: l,
    location: d
  } = e, _ = a.default.getId(), c = s.default.getMember(t, a.default.getId()), E = (null == c ? void 0 : c.joinedAt) != null;
  o.default.track(u.AnalyticEvents.CLAN_PROFILE_VIEWED, {
    guild_id: t,
    is_member: E,
    has_join_request: n,
    source: i,
    location: d,
    viewing_user_id: _,
    tag_owner_user_id: l,
    message_id: r
  })
}

function c(e) {
  let {
    guildId: t,
    source: n,
    location: i,
    messageId: r,
    tagUserId: s
  } = e, l = a.default.getId();
  o.default.track(u.AnalyticEvents.CLAN_APPLY_TO_JOIN_VIEWED, {
    guild_id: t,
    source: n,
    location: i,
    viewing_user_id: l,
    tag_owner_user_id: s,
    message_id: r
  })
}

function E(e) {
  let {
    guildId: t,
    userId: n,
    source: i
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_ADOPT_IDENTITY, {
    guild_id: t,
    user_id: n,
    source: i
  })
}

function I(e, t) {
  o.default.track(u.AnalyticEvents.CLAN_CONVERT_STEP_VIEWED, {
    guild_id: e,
    step: t
  })
}

function T(e, t) {
  o.default.track(u.AnalyticEvents.CLAN_SETTINGS_VIEWED, {
    guild_id: e,
    page: t
  })
}

function f(e) {
  o.default.track(u.AnalyticEvents.CLAN_SETTINGS_SAVED, {
    guild_id: e
  })
}

function S(e) {
  o.default.track(u.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
    guild_id: e
  })
}

function h(e, t) {
  o.default.track(u.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
    guild_id: e,
    enable_tag: t
  })
}

function A(e, t, n) {
  o.default.track(u.AnalyticEvents.CLAN_DISCOVERY_VIEWED, {
    guild_ids: e,
    section: t,
    application_ids: n.games,
    playstyle: n.playstyle,
    traits: n.traits
  })
}

function m(e) {
  switch (e) {
    case l.ClanSetupSteps.GAMES:
      return "games";
    case l.ClanSetupSteps.PLAYSTYLE:
      return "playstyle";
    case l.ClanSetupSteps.UTILITY_TRAITS:
      return "utility_traits";
    case l.ClanSetupSteps.INTERESTS:
      return "interests";
    case l.ClanSetupSteps.DESCRIPTION:
      return "description";
    case l.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
      return "tag";
    case l.ClanSetupSteps.CUSTOMIZE_BANNER:
      return "banner";
    case l.ClanSetupSteps.MEMBER_APPLICATION:
      return "member_application";
    default:
      return e
  }
}

function N(e) {
  let {
    location: t
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_USER_INVITE_VIEWED, {
    location: t
  })
}

function p(e) {
  let {
    location: t
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_USER_INVITE_CLICKED, {
    location: t
  })
}

function O(e) {
  let {
    guildId: t,
    location: n
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_ADMIN_INVITE_VIEWED, {
    guild_id: t,
    location: n
  })
}

function C(e) {
  let {
    guildId: t,
    location: n
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_ADMIN_INVITE_CLICKED, {
    guild_id: t,
    location: n
  })
}

function R(e) {
  let {
    guildId: t,
    isMember: n,
    hasJoinRequest: i,
    affinity: r,
    index: a
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
    guild_id: t,
    is_member: n,
    has_join_request: i,
    affinity: r,
    index: a
  })
}

function g(e) {
  o.default.track(u.AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, {
    guild_id: e
  })
}

function L(e) {
  var t;
  let {
    guildId: n,
    messageId: i,
    channelId: r,
    joinRequestStatus: l,
    joinRequestUserId: d
  } = e, _ = a.default.getId(), c = (null === (t = s.default.getMember(n, _)) || void 0 === t ? void 0 : t.joinedAt) != null;
  o.default.track(u.AnalyticEvents.CLAN_SEND_INTERVIEW_MESSAGE, {
    guild_id: n,
    channel_id: r,
    message_id: i,
    message_user_id: _,
    is_member: c,
    join_request_status: l,
    join_request_user_id: d
  })
}

function v(e) {
  let {
    guildId: t,
    source: n,
    tab: i
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_APPLICATION_NAVIGATION, {
    guild_id: t,
    source: n,
    tab: i
  })
}

function D(e) {
  let {
    guildId: t,
    actionType: n,
    applicationUserId: i
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_APPLICATION_ACTION, {
    guild_id: t,
    action_type: n,
    application_user_id: i,
    viewing_user_id: a.default.getId()
  })
}

function M(e) {
  let {
    guildId: t,
    applicationUserId: n,
    applicationStatus: i
  } = e;
  o.default.track(u.AnalyticEvents.CLAN_APPLICATION_VIEWED, {
    guild_id: t,
    viewing_user_id: a.default.getId(),
    application_user_id: n,
    application_status: i
  })
}

function y(e) {
  let {
    originGuildId: t,
    tagGuildId: n,
    tagUserId: s,
    messageId: l,
    location: _
  } = e;
  !(0, r.isDismissibleContentDismissed)(i.DismissibleContent.CLAN_TAG_WAITLIST) && (o.default.track(u.AnalyticEvents.CLAN_APPLY_WAITLIST, {
    user_id: a.default.getId(),
    origin_guild_id: t,
    tag_guild_id: n,
    tag_user_id: s,
    message_id: l,
    location: _
  }), (0, r.markDismissibleContentAsDismissed)(i.DismissibleContent.CLAN_TAG_WAITLIST, {
    dismissAction: d.ContentDismissActionType.TAKE_ACTION,
    forceTrack: !0
  }))
}