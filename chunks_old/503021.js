"use strict";
n.r(t), n.d(t, {
  fetchGuildForPopout: function() {
    return i
  }
});
var l = n("872717"),
  a = n("913144"),
  s = n("49111");
async function i(e) {
  a.default.dispatch({
    type: "GUILD_POPOUT_FETCH_START",
    guildId: e
  });
  try {
    let t = await l.HTTP.get({
      url: s.Endpoints.GUILD_PREVIEW(e),
      oldFormErrors: !0
    });
    a.default.dispatch({
      type: "GUILD_POPOUT_FETCH_SUCCESS",
      guildId: e,
      guild: t.body
    })
  } catch (t) {
    a.default.dispatch({
      type: "GUILD_POPOUT_FETCH_FAILURE",
      guildId: e
    })
  }
}