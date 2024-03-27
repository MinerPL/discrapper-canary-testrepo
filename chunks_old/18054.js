"use strict";
n.r(t), n.d(t, {
  init: function() {
    return d
  },
  close: function() {
    return c
  },
  setSection: function() {
    return f
  },
  updateChannel: function() {
    return E
  },
  saveChannel: function() {
    return _
  },
  deleteChannel: function() {
    return S
  },
  default: function() {
    return N
  }
}), n("702976");
var a = n("872717"),
  i = n("913144"),
  l = n("81732");
n("21121"), n("693051");
var u = n("263024");
n("492114");
var s = n("42203"),
  o = n("54239"),
  r = n("49111");

function d(e, t, n) {
  i.default.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: e,
    location: t,
    subsection: n
  })
}

function c() {
  i.default.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function f(e) {
  i.default.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: e
  })
}

function E(e) {
  let {
    name: t,
    type: n,
    topic: a,
    bitrate: l,
    userLimit: u,
    nsfw: s,
    flags: o,
    rateLimitPerUser: r,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: f,
    defaultReactionEmoji: E,
    rtcRegion: _,
    videoQualityMode: S,
    autoArchiveDuration: N,
    locked: T,
    invitable: g,
    availableTags: C,
    defaultSortOrder: A,
    defaultForumLayout: M,
    iconEmoji: I,
    themeColor: h
  } = e;
  i.default.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: t,
    channelType: n,
    topic: a,
    bitrate: l,
    userLimit: u,
    nsfw: s,
    flags: o,
    rateLimitPerUser: r,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: f,
    defaultReactionEmoji: E,
    rtcRegion: _,
    videoQualityMode: S,
    autoArchiveDuration: N,
    locked: T,
    invitable: g,
    availableTags: C,
    defaultSortOrder: A,
    defaultForumLayout: M,
    iconEmoji: I,
    themeColor: h
  })
}
async function _(e, t) {
  let {
    name: n,
    type: o,
    position: d,
    topic: c,
    bitrate: f,
    userLimit: E,
    nsfw: _,
    flags: S,
    permissionOverwrites: N,
    rateLimitPerUser: T,
    defaultThreadRateLimitPerUser: g,
    defaultAutoArchiveDuration: C,
    template: A,
    defaultReactionEmoji: M,
    rtcRegion: I,
    videoQualityMode: h,
    autoArchiveDuration: L,
    locked: p,
    invitable: m,
    availableTags: v,
    defaultSortOrder: O,
    defaultForumLayout: U,
    iconEmoji: R,
    themeColor: y
  } = t, G = s.default.getChannel(e);
  return i.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await u.default.unarchiveThreadIfNecessary(e), a.HTTP.patch({
    url: r.Endpoints.CHANNEL(e),
    body: {
      name: n,
      type: o,
      position: d,
      topic: c,
      bitrate: f,
      user_limit: E,
      nsfw: _,
      flags: S,
      permission_overwrites: N,
      rate_limit_per_user: T,
      default_thread_rate_limit_per_user: g,
      default_auto_archive_duration: C,
      template: A,
      rtc_region: I,
      video_quality_mode: h,
      auto_archive_duration: L,
      locked: p,
      invitable: m,
      default_reaction_emoji: null != M ? {
        emoji_id: null == M ? void 0 : M.emojiId,
        emoji_name: null == M ? void 0 : M.emojiName
      } : null === M ? null : void 0,
      available_tags: null == v ? void 0 : v.map(e => ({
        id: e.id,
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: e.emojiName,
        moderated: e.moderated
      })),
      default_sort_order: O,
      default_forum_layout: U,
      icon_emoji: null != R ? {
        id: R.id,
        name: R.name
      } : null === R ? null : void 0,
      theme_color: y
    },
    oldFormErrors: !0
  }).then(t => {
    i.default.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: e
    });
    let n = null == G ? void 0 : G.getGuildId();
    return null != n && !(null == G ? void 0 : G.isThread()) && l.default.checkGuildTemplateDirty(n), t
  }, e => (i.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function S(e) {
  let t = s.default.getChannel(e);
  a.HTTP.del({
    url: r.Endpoints.CHANNEL(e),
    oldFormErrors: !0
  }).then(() => {
    let e = null == t ? void 0 : t.getGuildId();
    null != e && !(null == t ? void 0 : t.isThread()) && l.default.checkGuildTemplateDirty(e), c()
  })
}
var N = {
  init: d,
  open: function(e, t, n) {
    d(e, t, n), (0, o.pushLayer)(r.Layers.CHANNEL_SETTINGS)
  },
  close: c,
  setSection: f,
  selectPermissionOverwrite: function(e) {
    i.default.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: e
    })
  },
  updateChannel: E,
  saveChannel: _,
  deleteChannel: S,
  updateVoiceChannelStatus: function(e, t) {
    return a.HTTP.put({
      url: r.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
      body: {
        status: t
      }
    })
  }
}