"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("689938");

function l(e) {
  return e > 0 && e % 7 == 0 ? a.default.Messages.DURATION_WEEKS.format({
    weeks: e / 7
  }) : a.default.Messages.DURATION_DAYS.format({
    days: e
  })
}