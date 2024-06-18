"use strict";

function r(t) {
  return "number" == typeof t && isFinite(t)
}

function i(t, {
  startTimestamp: e,
  ...n
}) {
  return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
    startTimestamp: e,
    ...n
  })
}
n.d(e, {
  H: function() {
    return i
  },
  n: function() {
    return r
  }
})