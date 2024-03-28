"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("470079"),
  a = s("442837"),
  u = s("706454"),
  l = s("356659"),
  i = s("689938");

function o() {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.locale);
  return n.useMemo(() => [{
    value: l.ClipsLengthSettings.SECONDS_30,
    label: i.default.Messages.CLIPS_LENGTH_SECONDS.format({
      count: 30
    })
  }, {
    value: l.ClipsLengthSettings.MINUTES_1,
    label: i.default.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 1
    })
  }, {
    value: l.ClipsLengthSettings.MINUTES_2,
    label: i.default.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 2
    })
  }], [e])
}