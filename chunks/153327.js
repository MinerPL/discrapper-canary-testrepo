"use strict";
n.r(t), n.d(t, {
  showSafetyToast: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("324045");

function i(e) {
  let {
    text: t,
    id: n
  } = e;
  (0, l.showToast)((0, l.createToast)(t, l.ToastType.CUSTOM, {
    component: (0, s.jsx)(a.SafetyToast, {
      text: t
    }, n)
  }))
}