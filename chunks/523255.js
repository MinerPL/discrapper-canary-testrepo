"use strict";
n.r(t), n.d(t, {
  isEligibleForNotice: function() {
    return u
  },
  markNoticeDismissed: function() {
    return c
  }
});
var s = n("913527"),
  a = n.n(s),
  l = n("835913"),
  i = n("675478"),
  r = n("581883"),
  o = n("905567");
let u = e => {
    var t;
    if (!d(e)) return !1;
    let n = null === (t = r.default.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
      s = null != n ? l.Timestamp.toDate(n) : void 0,
      i = null != s ? a()().diff(s, "days") : null,
      u = null != n;
    if (u && !(null != i && i > 30)) return !1;
    let {
      isEligible: c
    } = o.SafetyUserSentimentExperiment.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: !0
    });
    return c
  },
  d = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  c = () => {
    let e = l.Timestamp.now();
    i.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
  }