"use strict";
var n = t(544891),
  i = t(981631);
s.Z = {
  fetchTeams() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return n.tn.get({
      url: i.ANM.TEAMS,
      query: {
        include_payout_account_status: e
      }
    })
  }
}