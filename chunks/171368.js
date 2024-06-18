"use strict";
n.r(t), n.d(t, {
  closeUserProfileModal: function() {
    return c
  },
  openUserProfileModal: function() {
    return d
  }
});
var i = n(570140),
  r = n(232567),
  s = n(594174),
  o = n(342656),
  a = n(447452),
  l = n(877485),
  u = n(484459),
  _ = n(981631);

function d(e) {
  let {
    userId: t,
    guildId: n = _.ME,
    channelId: d,
    messageId: c,
    roleId: E,
    section: I,
    subsection: T,
    friendToken: h,
    showGuildProfile: S,
    analyticsLocation: f,
    sourceAnalyticsLocations: N
  } = e, A = s.default.getUser(t), m = null != n && n !== _.ME ? n : void 0, O = (0, l.c)({
    location: "openUserProfileModal",
    autoTrackExposure: !1
  }), R = (0, o.oU)().enabled || (0, a.T)({
    location: "openUserProfileModal",
    autoTrackExposure: !1
  }).basicsEnabled || O.originalFriendingEnabled || O.improvedFriendingEnabled;
  if (null == A) return (0, r.In)(t, {
    guildId: S ? m : void 0,
    withMutualGuilds: !0,
    withMutualFriends: R,
    friendToken: h
  }).then(() => {
    i.Z.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      guildId: null != n ? n : void 0,
      channelId: null != d ? d : void 0,
      messageId: null != c ? c : void 0,
      roleId: null != E ? E : void 0,
      section: I,
      subsection: T,
      friendToken: h,
      showGuildProfile: S,
      analyticsLocation: f,
      sourceAnalyticsLocations: N
    })
  });
  (0, u.W)(A, {
    guildId: S ? m : void 0,
    withMutualGuilds: !0,
    withMutualFriends: R,
    friendToken: h
  }), i.Z.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    guildId: null != n ? n : void 0,
    channelId: null != d ? d : void 0,
    messageId: null != c ? c : void 0,
    roleId: null != E ? E : void 0,
    section: I,
    subsection: T,
    friendToken: h,
    showGuildProfile: S,
    analyticsLocation: f,
    sourceAnalyticsLocations: N
  })
}

function c() {
  i.Z.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}