"use strict";
n.d(t, {
  A: function() {
    return a
  }
});
var i = n(913527),
  s = n.n(i),
  l = n(689938);

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z.Messages.FORM_LABEL_OFF,
    i = s().duration(e, "seconds");
  if (i.days() > 0) return (t ? l.Z.Messages.DURATION_DAYS_SHORT : l.Z.Messages.DURATION_DAYS).format({
    days: i.days()
  });
  if (i.hours() > 0) return (t ? l.Z.Messages.DURATION_HOURS_SHORT : l.Z.Messages.DURATION_HOURS).format({
    hours: i.hours()
  });
  if (i.minutes() > 0) return (t ? l.Z.Messages.DURATION_MINUTES_SHORT : l.Z.Messages.DURATION_MINUTES).format({
    minutes: i.minutes()
  });
  else if (e > 0) return (t ? l.Z.Messages.DURATION_SECONDS_SHORT : l.Z.Messages.DURATION_SECONDS).format({
    seconds: i.seconds()
  });
  else return t ? l.Z.Messages.FORM_LABEL_OFF : n
}