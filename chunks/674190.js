"use strict";
n.r(t), n.d(t, {
  recordBannerRender: function() {
    return s
  },
  recordChannelVisit: function() {
    return l
  }
});
var a = n("570140");

function l(e, t) {
  a.default.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_CHANNEL_VISIT"
  })
}

function s(e, t) {
  a.default.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_RENDERED"
  })
}