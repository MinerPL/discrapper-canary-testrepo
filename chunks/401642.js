"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return a
  },
  closeUserProfileModal: function() {
    return d
  }
});
var l = n("913144"),
  i = n("327037"),
  u = n("697218"),
  r = n("506885"),
  o = n("49111");

function a(e) {
  let {
    userId: t,
    section: n,
    guildId: a = o.ME,
    channelId: d,
    messageId: s,
    roleId: c,
    friendToken: f,
    autoFocusNote: E,
    analyticsLocation: _,
    sourceAnalyticsLocations: m
  } = e, h = u.default.getUser(t), M = a !== o.ME ? a : void 0;
  if (null == h) return (0, i.fetchProfile)(t, {
    friendToken: f,
    guildId: M
  }).then(() => {
    l.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: a,
      channelId: d,
      messageId: s,
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
    channelId: d,
    messageId: s,
    roleId: c,
    friendToken: f,
    autoFocusNote: E,
    analyticsLocation: _,
    sourceAnalyticsLocations: m
  })
}

function d() {
  l.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}