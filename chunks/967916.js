"use strict";
t.d(s, {
  z: function() {
    return r
  }
});
var n = t(664751),
  i = t(544891),
  l = t(570140);
t(900849), t(719879);
var a = t(981631);
async function r(e) {
  l.Z.dispatch({
    type: "DISCOVER_GUILDS_FETCH_START",
    guildIds: e
  });
  try {
    let {
      guilds: s
    } = (await i.tn.get({
      url: a.ANM.GUILD_DISCOVERY,
      query: n.stringify({
        guild_ids: e
      }),
      oldFormErrors: !0
    })).body;
    l.Z.dispatch({
      type: "DISCOVER_GUILDS_FETCH_SUCCESS",
      guilds: s
    })
  } catch (e) {
    l.Z.dispatch({
      type: "DISCOVER_GUILDS_FETCH_FAILURE"
    })
  }
}