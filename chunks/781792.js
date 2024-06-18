"use strict";
n.d(t, {
  e: function() {
    return l
  }
}), n(789020);
var i = n(544891),
  r = n(570140),
  s = n(962086),
  o = n(160404),
  a = n(981631);

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (o.Z.isFullServerPreview(e)) {
    (0, s.aq)(e, {
      memberOptions: t
    });
    return
  }
  return r.Z.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: t.roles,
    flags: t.flags
  }), i.tn.patch({
    url: a.ANM.SET_GUILD_MEMBER(e),
    body: t,
    oldFormErrors: !!n || void 0
  })
}