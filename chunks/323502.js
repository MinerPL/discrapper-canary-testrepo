"use strict";
s.r(t), s.d(t, {
  fetchTopReadChannels: function() {
    return i
  }
});
var a = s("544891"),
  l = s("570140"),
  n = s("981631");

function i(e) {
  return a.HTTP.get({
    url: n.Endpoints.GUILD_TOP_READ_CHANNELS(e),
    oldFormErrors: !0
  }).then(t => {
    let {
      body: s
    } = t;
    l.default.dispatch({
      type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
      guildId: e,
      topChannelIds: s
    })
  })
}