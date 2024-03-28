"use strict";
s.r(t), s.d(t, {
  fetchDiscoverableGuilds: function() {
    return r
  }
});
var a = s("664751"),
  l = s("544891"),
  n = s("570140");
s("900849"), s("719879");
var i = s("981631");
async function r(e) {
  n.default.dispatch({
    type: "DISCOVER_GUILDS_FETCH_START",
    guildIds: e
  });
  try {
    let {
      guilds: t
    } = (await l.HTTP.get({
      url: i.Endpoints.GUILD_DISCOVERY,
      query: a.stringify({
        guild_ids: e
      }),
      oldFormErrors: !0
    })).body;
    n.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_SUCCESS",
      guilds: t
    })
  } catch (e) {
    n.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_FAILURE"
    })
  }
}