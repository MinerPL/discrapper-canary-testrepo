"use strict";
n.d(t, {
  d: function() {
    return s
  }
});
var i = n(789978),
  r = n(607070);
n(790381);
let s = {
  init() {
    r.Z.addChangeListener(() => {
      r.Z.keyboardModeEnabled ? (i.dx.setRingsEnabled(!0), i.dx.enableAnimationTracking()) : (i.dx.setRingsEnabled(!1), i.dx.disableAnimationTracking())
    })
  }
}