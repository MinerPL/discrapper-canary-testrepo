"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var s = n("876927"),
  a = n("271560");

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, l] = (0, s.default)(),
    i = (null == e ? void 0 : e.application_id) != null && null != l ? (0, a.getAssetURL)(e.application_id, e, l, t ? void 0 : "webp") : void 0;
  return [n, i]
}