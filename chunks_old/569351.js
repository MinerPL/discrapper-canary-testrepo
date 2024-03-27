"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = r("687544"),
  a = r("110729"),
  o = r("557916"),
  i = r("299911"),
  u = r("322247"),
  l = r("679008"),
  s = function(e, t, r) {
    t = (0, n.default)(t, e);
    for (var s = -1, f = t.length, c = !1; ++s < f;) {
      var d = (0, l.default)(t[s]);
      if (!(c = null != e && r(e, d))) break;
      e = e[d]
    }
    return c || ++s != f ? c : !!(f = null == e ? 0 : e.length) && (0, u.default)(f) && (0, i.default)(d, f) && ((0, o.default)(e) || (0, a.default)(e))
  }