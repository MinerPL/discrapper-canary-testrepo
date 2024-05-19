"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("282421");

function s(e) {
  let {
    enabled: t
  } = a.QuestHomeExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t
}