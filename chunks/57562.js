"use strict";
n.r(t), n.d(t, {
  showAchievementToast: function() {
    return d
  },
  unlockAchievement: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("955204"),
  r = n("510273"),
  o = n("689938");

function u(e) {
  l.default.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, i.getPoggermodeAchievementData)(e);
  null != n && (0, s.showToast)((0, s.createToast)(o.default.Messages.POGGERMODE_ACHIEVEMENTS, s.ToastType.CUSTOM, {
    position: s.ToastPosition.BOTTOM,
    component: (0, a.jsx)(r.default, {
      achievement: n,
      unlocked: t
    }),
    duration: 6e3
  }))
}