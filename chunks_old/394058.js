"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var r = s("174727"),
  i = s("915639"),
  n = s("782340");

function l(e) {
  return e.toLocaleString(i.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
var o = function(e) {
  let {
    endDate: t
  } = e, s = (0, r.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: s.days > 0 ? n.default.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : n.default.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: l(s.hours),
      minutes: l(s.minutes),
      seconds: l(s.seconds)
    })
  })
}