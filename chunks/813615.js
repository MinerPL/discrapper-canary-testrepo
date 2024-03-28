"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("789020");
var a = n("928518"),
  s = n("630388"),
  l = n("917107"),
  i = n("981631");

function r(e, t) {
  var n;
  let r = (0, s.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, i.ApplicationFlags.EMBEDDED),
    o = a.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return r && o && (0, l.default)(t)
}