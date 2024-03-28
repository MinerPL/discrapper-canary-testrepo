"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var s = n("838085"),
  a = n("73346");

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, l] = (0, s.default)();
  return [n, (null == e ? void 0 : e.application_id) != null && null != l ? (0, a.getAssetURL)(e.application_id, e, l, t ? void 0 : "webp") : void 0]
}