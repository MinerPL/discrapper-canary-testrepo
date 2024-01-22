"use strict";
n.r(t), n.d(t, {
  useMeter: function() {
    return i
  }
});
var r = n("890830");

function i(e) {
  let {
    progressBarProps: t,
    labelProps: n
  } = (0, r.useProgressBar)(e);
  return {
    meterProps: {
      ...t,
      role: "meter progressbar"
    },
    labelProps: n
  }
}