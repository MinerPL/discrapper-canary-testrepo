"use strict";
s.r(t), s.d(t, {
  fetchDiscoveryChecklist: function() {
    return i
  }
});
var a = s("872717"),
  l = s("913144"),
  n = s("49111");
async function i(e) {
  l.default.dispatch({
    type: "DISCOVER_CHECKLIST_FETCH_START",
    guildId: e
  });
  try {
    let t = await a.HTTP.get({
      url: n.Endpoints.GUILD_DISCOVERY_REQUIREMENTS(e),
      oldFormErrors: !0
    });
    l.default.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
      guildId: e,
      checklist: t.body
    })
  } catch (t) {
    l.default.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
      guildId: e
    })
  }
}