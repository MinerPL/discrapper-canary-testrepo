"use strict";
s.r(t), s.d(t, {
  setSoundpack: function() {
    return r
  }
});
var a = s("570140"),
  n = s("626135"),
  l = s("474873"),
  i = s("981631");

function r(e) {
  n.default.track(i.AnalyticEvents.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: l.default.getSoundpack()
  }), a.default.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e
  })
}