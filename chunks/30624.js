"use strict";
t.d(s, {
  Z: function() {
    return i
  }
});
var n = t(421535);

function i(e, s) {
  var t, i, l;
  if (s.owner_user_id === e) return !0;
  return (null === (i = s, l = e, t = i.members.find(e => e.user.id === l)) || void 0 === t ? void 0 : t.role) === n.T.ADMIN
}