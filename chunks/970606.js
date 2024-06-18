"use strict";
n.d(t, {
  Af: function() {
    return h
  },
  B3: function() {
    return f
  },
  EK: function() {
    return p
  },
  GO: function() {
    return T
  },
  GS: function() {
    return O
  },
  Lp: function() {
    return I
  },
  Oe: function() {
    return N
  },
  Pq: function() {
    return g
  },
  Q2: function() {
    return v
  },
  Qh: function() {
    return A
  },
  TE: function() {
    return R
  },
  Vr: function() {
    return c
  },
  _9: function() {
    return C
  },
  aC: function() {
    return L
  },
  bH: function() {
    return M
  },
  dx: function() {
    return S
  },
  hx: function() {
    return E
  },
  pl: function() {
    return P
  },
  r2: function() {
    return D
  },
  tv: function() {
    return m
  },
  u0: function() {
    return d
  }
});
var i = n(704215),
  r = n(605236),
  s = n(314897),
  o = n(271383),
  a = n(626135),
  l = n(308083),
  u = n(981631),
  _ = n(921944);

function d(e) {
  let {
    guildId: t,
    hasJoinRequest: n,
    source: i,
    messageId: r,
    tagUserId: l,
    location: _
  } = e, d = s.default.getId(), c = o.ZP.getMember(t, s.default.getId()), E = (null == c ? void 0 : c.joinedAt) != null;
  a.default.track(u.rMx.CLAN_PROFILE_VIEWED, {
    guild_id: t,
    is_member: E,
    has_join_request: n,
    source: i,
    location: _,
    viewing_user_id: d,
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
    tagUserId: o
  } = e, l = s.default.getId();
  a.default.track(u.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
    guild_id: t,
    source: n,
    location: i,
    viewing_user_id: l,
    tag_owner_user_id: o,
    message_id: r
  })
}

function E(e) {
  let {
    guildId: t,
    userId: n,
    source: i
  } = e;
  a.default.track(u.rMx.CLAN_ADOPT_IDENTITY, {
    guild_id: t,
    user_id: n,
    source: i
  })
}

function I(e, t) {
  a.default.track(u.rMx.CLAN_CONVERT_STEP_VIEWED, {
    guild_id: e,
    step: t
  })
}

function T(e, t) {
  a.default.track(u.rMx.CLAN_SETTINGS_VIEWED, {
    guild_id: e,
    page: t
  })
}

function h(e) {
  a.default.track(u.rMx.CLAN_SETTINGS_SAVED, {
    guild_id: e
  })
}

function S(e) {
  a.default.track(u.rMx.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
    guild_id: e
  })
}

function f(e, t) {
  a.default.track(u.rMx.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
    guild_id: e,
    enable_tag: t
  })
}

function N(e, t, n) {
  a.default.track(u.rMx.CLAN_DISCOVERY_VIEWED, {
    guild_ids: e,
    section: t,
    application_ids: n.games,
    playstyle: n.playstyle,
    traits: n.traits
  })
}

function A(e) {
  switch (e) {
    case l.Wy.GAMES:
      return "games";
    case l.Wy.PLAYSTYLE:
      return "playstyle";
    case l.Wy.UTILITY_TRAITS:
      return "utility_traits";
    case l.Wy.INTERESTS:
      return "interests";
    case l.Wy.DESCRIPTION:
      return "description";
    case l.Wy.CUSTOMIZE_TAG_BADGE:
      return "tag";
    case l.Wy.CUSTOMIZE_BANNER:
      return "banner";
    case l.Wy.MEMBER_APPLICATION:
      return "member_application";
    default:
      return e
  }
}

function m(e) {
  let {
    location: t
  } = e;
  a.default.track(u.rMx.CLAN_USER_INVITE_VIEWED, {
    location: t
  })
}

function O(e) {
  let {
    location: t
  } = e;
  a.default.track(u.rMx.CLAN_USER_INVITE_CLICKED, {
    location: t
  })
}

function R(e) {
  let {
    guildId: t,
    location: n
  } = e;
  a.default.track(u.rMx.CLAN_ADMIN_INVITE_VIEWED, {
    guild_id: t,
    location: n
  })
}

function C(e) {
  let {
    guildId: t,
    location: n
  } = e;
  a.default.track(u.rMx.CLAN_ADMIN_INVITE_CLICKED, {
    guild_id: t,
    location: n
  })
}

function p(e) {
  let {
    guildId: t,
    isMember: n,
    hasJoinRequest: i,
    affinity: r,
    index: s
  } = e;
  a.default.track(u.rMx.CLAN_DISCOVERY_CARD_CLICKED, {
    guild_id: t,
    is_member: n,
    has_join_request: i,
    affinity: r,
    index: s
  })
}

function g(e) {
  a.default.track(u.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, {
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
    joinRequestUserId: _
  } = e, d = s.default.getId(), c = (null === (t = o.ZP.getMember(n, d)) || void 0 === t ? void 0 : t.joinedAt) != null;
  a.default.track(u.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
    guild_id: n,
    channel_id: r,
    message_id: i,
    message_user_id: d,
    is_member: c,
    join_request_status: l,
    join_request_user_id: _
  })
}

function v(e) {
  let {
    guildId: t,
    source: n,
    tab: i
  } = e;
  a.default.track(u.rMx.CLAN_APPLICATION_NAVIGATION, {
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
  a.default.track(u.rMx.CLAN_APPLICATION_ACTION, {
    guild_id: t,
    action_type: n,
    application_user_id: i,
    viewing_user_id: s.default.getId()
  })
}

function M(e) {
  let {
    guildId: t,
    applicationUserId: n,
    applicationStatus: i
  } = e;
  a.default.track(u.rMx.CLAN_APPLICATION_VIEWED, {
    guild_id: t,
    viewing_user_id: s.default.getId(),
    application_user_id: n,
    application_status: i
  })
}

function P(e) {
  let {
    originGuildId: t,
    tagGuildId: n,
    tagUserId: o,
    messageId: l,
    location: d
  } = e;
  if (!(0, r.un)(i.z.CLAN_TAG_WAITLIST)) a.default.track(u.rMx.CLAN_APPLY_WAITLIST, {
    user_id: s.default.getId(),
    origin_guild_id: t,
    tag_guild_id: n,
    tag_user_id: o,
    message_id: l,
    location: d
  }), (0, r.EW)(i.z.CLAN_TAG_WAITLIST, {
    dismissAction: _.L.TAKE_ACTION,
    forceTrack: !0
  })
}