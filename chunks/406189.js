"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var n = l("913144"),
  s = {
    updateChannelDimensions(e, t, l, s, u) {
      n.default.wait(() => {
        n.default.dispatch({
          type: "UPDATE_CHANNEL_DIMENSIONS",
          channelId: e,
          scrollTop: t,
          scrollHeight: l,
          offsetHeight: s
        }), null != u && u()
      })
    },
    updateChannelListScroll(e, t) {
      let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      n.default.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTop: t,
        channelIds: l
      })
    },
    channelListScrollTo(e, t) {
      n.default.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTo: t,
        channelIds: []
      })
    },
    clearChannelListScrollTo(e) {
      n.default.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTo: null,
        channelIds: []
      })
    },
    clearChannelDimensions(e, t) {
      this.updateChannelDimensions(e, null, null, null, t)
    },
    updateGuildListScrollTo(e) {
      n.default.dispatch({
        type: "UPDATE_GUILD_LIST_DIMENSIONS",
        scrollTop: e
      })
    }
  }