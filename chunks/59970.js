"use strict";
t.d(s, {
  k: function() {
    return a
  }
});
var n = t(544891),
  i = t(570140),
  l = t(981631);
async function a(e) {
  i.Z.dispatch({
    type: "DISCOVER_CHECKLIST_FETCH_START",
    guildId: e
  });
  try {
    let s = await n.tn.get({
      url: l.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
      oldFormErrors: !0
    });
    i.Z.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
      guildId: e,
      checklist: s.body
    })
  } catch (s) {
    i.Z.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
      guildId: e
    })
  }
}