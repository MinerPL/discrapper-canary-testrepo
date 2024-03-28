"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("913527"),
  s = n.n(a),
  l = n("695346"),
  i = n("626135"),
  r = n("337953"),
  o = n("981631");

function u(e, t, n, a) {
  let u = e.trim();
  if (u.length > 0 || null != t) {
    var d;
    l.CustomStatusSetting.updateSetting({
      text: u.length > 0 ? u : "",
      expiresAtMs: null != n ? String(s()().add((0, r.default)(n), "ms").toDate().getTime()) : "0",
      emojiId: null != t && null != t.id ? t.id : "0",
      emojiName: null != t ? t.name : ""
    }), i.default.track(o.AnalyticEvents.CUSTOM_STATUS_UPDATED, {
      location: null != a ? a.location : null,
      emoji_type: null == (d = t) ? null : null != d.id ? "custom" : "unicode",
      text_len: u.length,
      clear_after: null != n ? "".concat(n) : null
    })
  } else l.CustomStatusSetting.updateSetting(void 0)
}