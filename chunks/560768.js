"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
}), i("789020");
var n = i("630388"),
  a = i("620662"),
  s = i("981631");

function l(e, t, i, l) {
  let o = null == t ? void 0 : t.application_id;
  if (null == e || null == t || !(0, a.default)(t, s.ActivityFlags.JOIN) || null == o) return !1;
  let r = l.getApplication(o);
  return !(null == r || (0, n.hasFlag)(r.flags, s.ApplicationFlags.EMBEDDED)) && i.shouldShowEducation(o)
}