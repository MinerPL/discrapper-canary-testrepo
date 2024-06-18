"use strict";
t.d(s, {
  S: function() {
    return a
  }
});
var n = t(544891),
  i = t(570140),
  l = t(981631);

function a(e) {
  return n.tn.get({
    url: l.ANM.GUILD_TOP_READ_CHANNELS(e),
    oldFormErrors: !0
  }).then(s => {
    let {
      body: t
    } = s;
    i.Z.dispatch({
      type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
      guildId: e,
      topChannelIds: t
    })
  })
}