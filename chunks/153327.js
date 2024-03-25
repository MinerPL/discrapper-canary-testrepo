"use strict";
n.r(t), n.d(t, {
  showSafetyToast: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("324045");

function i(e) {
  let {
    text: t,
    id: n
  } = e;
  (0, a.showToast)((0, a.createToast)(t, a.ToastType.CUSTOM, {
    component: (0, s.jsx)(l.SafetyToast, {
      text: t
    }, n)
  }))
}