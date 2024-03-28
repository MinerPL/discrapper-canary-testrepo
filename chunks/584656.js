"use strict";
n.r(t), n.d(t, {
  showSafetyToast: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("820644");

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