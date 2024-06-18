"use strict";
n.d(t, {
  V: function() {
    return o
  }
});
var i = n(544891),
  r = n(570140),
  s = n(981631);
async function o() {
  r.Z.dispatch({
    type: "USER_TENURE_REWARD_SYNC_START"
  });
  try {
    let e = await i.tn.post({
      url: s.ANM.TENURE_REWARD_SYNC
    });
    r.Z.dispatch({
      type: "USER_TENURE_REWARD_SYNC_SUCCESS",
      userTenureRewardStatus: e.body.tenure_reward_status
    })
  } catch (e) {
    r.Z.dispatch({
      type: "USER_TENURE_REWARD_SYNC_SUCCESS"
    })
  }
}