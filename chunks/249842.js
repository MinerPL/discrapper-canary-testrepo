"use strict";
a.r(l), a.d(l, {
  fetchGuildForPopout: function() {
    return n
  }
});
var s = a("544891"),
  t = a("570140"),
  i = a("981631");
async function n(e) {
  t.default.dispatch({
    type: "GUILD_POPOUT_FETCH_START",
    guildId: e
  });
  try {
    let l = await s.HTTP.get({
      url: i.Endpoints.GUILD_PREVIEW(e),
      oldFormErrors: !0
    });
    t.default.dispatch({
      type: "GUILD_POPOUT_FETCH_SUCCESS",
      guildId: e,
      guild: l.body
    })
  } catch (l) {
    t.default.dispatch({
      type: "GUILD_POPOUT_FETCH_FAILURE",
      guildId: e
    })
  }
}