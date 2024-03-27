"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("702976");
var a = n("292687"),
  s = n("568734"),
  l = n("420444"),
  i = n("49111");

function r(e, t) {
  var n;
  let r = (0, s.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, i.ApplicationFlags.EMBEDDED),
    o = a.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return r && o && (0, l.default)(t)
}