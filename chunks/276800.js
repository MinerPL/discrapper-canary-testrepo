"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("774078"),
  r = s("706454"),
  n = s("689938");

function l(e) {
  return e.toLocaleString(r.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
t.default = function(e) {
  let {
    endDate: t
  } = e, s = (0, i.default)(t, 1e3);
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