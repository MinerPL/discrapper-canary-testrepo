"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("981631");

function a(e, t) {
  var n;
  return !s.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type) && (null === (n = e.author) || void 0 === n ? void 0 : n.id) === t
}