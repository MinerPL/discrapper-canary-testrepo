"use strict";
t.d(s, {
  Z: function() {
    return i
  }
});
var n = t(689938);

function i(e) {
  return e > 0 && e % 7 == 0 ? n.Z.Messages.DURATION_WEEKS.format({
    weeks: e / 7
  }) : n.Z.Messages.DURATION_DAYS.format({
    days: e
  })
}