"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144"),
  l = n("697218"),
  i = n("49111");
let r = null;
class o extends a.default.Store {
  getHouseMembership() {
    return r
  }
}
o.displayName = "HypeSquadStore";
var u = new o(s.default, {
  CONNECTION_OPEN: function() {
    let e = l.default.getCurrentUser();
    null != e && (e.hasFlag(i.UserFlags.HYPESQUAD_ONLINE_HOUSE_1) ? r = i.HypeSquadHouses.HOUSE_1 : e.hasFlag(i.UserFlags.HYPESQUAD_ONLINE_HOUSE_2) ? r = i.HypeSquadHouses.HOUSE_2 : e.hasFlag(i.UserFlags.HYPESQUAD_ONLINE_HOUSE_3) && (r = i.HypeSquadHouses.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    r = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    r = e.houseID
  }
})