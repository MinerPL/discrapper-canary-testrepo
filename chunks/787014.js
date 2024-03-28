"use strict";
n.r(t), n.d(t, {
  close: function() {
    return c
  },
  deleteChannel: function() {
    return N
  },
  init: function() {
    return d
  },
  saveChannel: function() {
    return f
  },
  setSection: function() {
    return _
  },
  updateChannel: function() {
    return E
  }
}), n("789020");
var l = n("544891"),
  a = n("570140"),
  i = n("408987");
n("57132"), n("777639");
var u = n("346479");
n("388610");
var r = n("592125"),
  o = n("37234"),
  s = n("981631");

function d(e, t, n) {
  a.default.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: e,
    location: t,
    subsection: n
  })
}

function c() {
  a.default.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function _(e) {
  a.default.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: e
  })
}

function E(e) {
  let {
    name: t,
    type: n,
    topic: l,
    bitrate: i,
    userLimit: u,
    nsfw: r,
    flags: o,
    rateLimitPerUser: s,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: _,
    defaultReactionEmoji: E,
    rtcRegion: f,
    videoQualityMode: N,
    autoArchiveDuration: S,
    locked: T,
    invitable: C,
    availableTags: h,
    defaultSortOrder: m,
    defaultForumLayout: I,
    iconEmoji: p,
    themeColor: A
  } = e;
  a.default.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: t,
    channelType: n,
    topic: l,
    bitrate: i,
    userLimit: u,
    nsfw: r,
    flags: o,
    rateLimitPerUser: s,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: _,
    defaultReactionEmoji: E,
    rtcRegion: f,
    videoQualityMode: N,
    autoArchiveDuration: S,
    locked: T,
    invitable: C,
    availableTags: h,
    defaultSortOrder: m,
    defaultForumLayout: I,
    iconEmoji: p,
    themeColor: A
  })
}
async function f(e, t) {
  let {
    name: n,
    type: o,
    position: d,
    topic: c,
    bitrate: _,
    userLimit: E,
    nsfw: f,
    flags: N,
    permissionOverwrites: S,
    rateLimitPerUser: T,
    defaultThreadRateLimitPerUser: C,
    defaultAutoArchiveDuration: h,
    template: m,
    defaultReactionEmoji: I,
    rtcRegion: p,
    videoQualityMode: A,
    autoArchiveDuration: L,
    locked: v,
    invitable: g,
    availableTags: y,
    defaultSortOrder: O,
    defaultForumLayout: G,
    iconEmoji: M,
    themeColor: H
  } = t, U = r.default.getChannel(e);
  return a.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await u.default.unarchiveThreadIfNecessary(e), l.HTTP.patch({
    url: s.Endpoints.CHANNEL(e),
    body: {
      name: n,
      type: o,
      position: d,
      topic: c,
      bitrate: _,
      user_limit: E,
      nsfw: f,
      flags: N,
      permission_overwrites: S,
      rate_limit_per_user: T,
      default_thread_rate_limit_per_user: C,
      default_auto_archive_duration: h,
      template: m,
      rtc_region: p,
      video_quality_mode: A,
      auto_archive_duration: L,
      locked: v,
      invitable: g,
      default_reaction_emoji: null != I ? {
        emoji_id: null == I ? void 0 : I.emojiId,
        emoji_name: null == I ? void 0 : I.emojiName
      } : null === I ? null : void 0,
      available_tags: null == y ? void 0 : y.map(e => ({
        id: e.id,
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: e.emojiName,
        moderated: e.moderated
      })),
      default_sort_order: O,
      default_forum_layout: G,
      icon_emoji: null != M ? {
        id: M.id,
        name: M.name
      } : null === M ? null : void 0,
      theme_color: H
    },
    oldFormErrors: !0
  }).then(t => {
    a.default.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: e
    });
    let n = null == U ? void 0 : U.getGuildId();
    return null != n && !(null == U ? void 0 : U.isThread()) && i.default.checkGuildTemplateDirty(n), t
  }, e => (a.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function N(e) {
  let t = r.default.getChannel(e);
  l.HTTP.del({
    url: s.Endpoints.CHANNEL(e),
    oldFormErrors: !0
  }).then(() => {
    let e = null == t ? void 0 : t.getGuildId();
    null != e && !(null == t ? void 0 : t.isThread()) && i.default.checkGuildTemplateDirty(e), c()
  })
}
t.default = {
  init: d,
  open: function(e, t, n) {
    d(e, t, n), (0, o.pushLayer)(s.Layers.CHANNEL_SETTINGS)
  },
  close: c,
  setSection: _,
  selectPermissionOverwrite: function(e) {
    a.default.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: e
    })
  },
  updateChannel: E,
  saveChannel: f,
  deleteChannel: N,
  updateVoiceChannelStatus: function(e, t) {
    return l.HTTP.put({
      url: s.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
      body: {
        status: t
      }
    })
  }
}