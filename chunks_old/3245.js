"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("872717"),
  l = s("49111"),
  n = {
    fetchTeams() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return a.HTTP.get({
        url: l.Endpoints.TEAMS,
        query: {
          include_payout_account_status: e
        }
      })
    }
  }