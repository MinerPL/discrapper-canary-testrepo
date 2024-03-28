"use strict";
s.r(t), s.d(t, {
  isUserTeamAdministrator: function() {
    return l
  }
});
var a = s("421535");

function l(e, t) {
  var s, l, n;
  if (t.owner_user_id === e) return !0;
  return (null === (l = t, n = e, s = l.members.find(e => e.user.id === n)) || void 0 === s ? void 0 : s.role) === a.TeamMemberRoles.ADMIN
}