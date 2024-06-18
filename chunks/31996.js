"use strict";
n.d(t, {
  Q: function() {
    return u
  }
}), n(47120);
var i = n(544891),
  r = n(570140),
  s = n(430824),
  o = n(356264),
  a = n(981631);
let l = new Set;
async function u(e) {
  if (null == s.Z.getGuild(e) && null == o.Z.getGuild(e)) {
    if (!l.has(e)) {
      r.Z.dispatch({
        type: "BASIC_GUILD_FETCH",
        guildId: e
      }), l.add(e);
      try {
        let t = (await i.tn.get({
          url: a.ANM.GUILD_BASIC(e),
          oldFormErrors: !0
        })).body;
        r.Z.dispatch({
          type: "BASIC_GUILD_FETCH_SUCCESS",
          guildId: e,
          guildInfo: t
        })
      } catch (t) {
        r.Z.dispatch({
          type: "BASIC_GUILD_FETCH_FAILURE",
          guildId: e
        })
      } finally {
        l.delete(e)
      }
    }
  }
}