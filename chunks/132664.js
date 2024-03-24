"use strict";
s.r(t), s.d(t, {
  fetchDiscoverableGuilds: function() {
    return r
  }
});
var a = s("522632"),
  l = s("872717"),
  n = s("913144");
s("794818"), s("804578");
var i = s("49111");
async function r(e) {
  n.default.dispatch({
    type: "DISCOVER_GUILDS_FETCH_START",
    guildIds: e
  });
  try {
    let t = await l.HTTP.get({
        url: i.Endpoints.GUILD_DISCOVERY,
        query: a.stringify({
          guild_ids: e
        }),
        oldFormErrors: !0
      }),
      {
        guilds: s
      } = t.body;
    n.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_SUCCESS",
      guilds: s
    })
  } catch (e) {
    n.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_FAILURE"
    })
  }
}