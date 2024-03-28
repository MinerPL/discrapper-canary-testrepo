"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  d = s("481060"),
  r = s("626135"),
  u = s("358085"),
  o = s("981631"),
  c = s("689938");

function f(e) {
  let t = n.useCallback(() => {
    i()(null != e, "text cannot be null"), r.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
  }, [e]);
  return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, a.jsx)(d.MenuItem, {
    id: "search-google",
    label: c.default.Messages.SEARCH_WITH_GOOGLE,
    action: t
  }, "search-google")] : null
}