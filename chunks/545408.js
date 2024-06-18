"use strict";
n.d(t, {
  q: function() {
    return l
  }
}), n(470079);
var i = n(100527),
  r = n(367907),
  s = n(626135),
  o = n(50493),
  a = n(981631);

function l(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Z.MEMBER_SAFETY_PAGE,
    u = {
      guild_id: e,
      target_user_id: t,
      subpanel_name: o.Y[n],
      location: l,
      ...(0, r.hH)(e)
    };
  return s.default.track(a.rMx.GUILD_MOD_VIEW_OPENED, u)
}