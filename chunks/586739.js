"use strict";
s.r(t);
var a = s("544891"),
  l = s("981631");
t.default = {
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