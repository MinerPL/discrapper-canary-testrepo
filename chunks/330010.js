"use strict";
n.d(t, {
  i: function() {
    return l
  }
});
var i = n(544891),
  r = n(570140),
  s = n(973616),
  o = n(598077),
  a = n(981631);

function l(e) {
  i.tn.get({
    url: a.ANM.GUILD_INTEGRATIONS(e),
    query: {
      include_applications: !0,
      include_role_connections_metadata: !0
    },
    oldFormErrors: !0
  }).then(t => {
    let n = t.body.map(e => (null != e.user && (e.user = new o.Z(e.user)), null != e.application && (e.application = s.Z.createFromServer(e.application)), e));
    r.Z.dispatch({
      type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
      guildId: e,
      integrations: n
    })
  }).catch(() => {})
}