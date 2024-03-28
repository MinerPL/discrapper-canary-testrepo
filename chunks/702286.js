"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var s = a("703656"),
  l = a("981631");

function n() {
  let e = (0, s.getHistory)();
  e.length > 0 ? e.goBack() : (0, s.transitionTo)(l.Routes.ME)
}