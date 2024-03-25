"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return a
  },
  closeUserProfileModal: function() {
    return s
  }
});
var l = n("913144"),
  u = n("327037"),
  i = n("697218"),
  r = n("506885"),
  o = n("49111");

function a(e) {
  let {
    userId: t,
    section: n,
    guildId: a = o.ME,
    channelId: s,
    messageId: d,
    roleId: c,
    friendToken: f,
    autoFocusNote: E,
    analyticsLocation: _,
    sourceAnalyticsLocations: m
  } = e, h = i.default.getUser(t), M = a !== o.ME ? a : void 0;
  if (null == h) return (0, u.fetchProfile)(t, {
    friendToken: f,
    guildId: M
  }).then(() => {
    l.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: a,
      channelId: s,
      messageId: d,
      roleId: c,
      friendToken: f,
      autoFocusNote: E,
      analyticsLocation: _,
      sourceAnalyticsLocations: m
    })
  });
  (0, r.default)(t, h.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: f,
    guildId: M
  }), l.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: a,
    channelId: s,
    messageId: d,
    roleId: c,
    friendToken: f,
    autoFocusNote: E,
    analyticsLocation: _,
    sourceAnalyticsLocations: m
  })
}

function s() {
  l.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}