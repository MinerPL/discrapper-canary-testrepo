"use strict";
n.r(t), n.d(t, {
  fetchGuildAffinities: function() {
    return i
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("49111");
let i = () => a.HTTP.get({
  url: l.Endpoints.GUILD_AFFINITIES,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  s.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  s.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})