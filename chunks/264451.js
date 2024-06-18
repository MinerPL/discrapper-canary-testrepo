"use strict";
t.d(s, {
  Zo: function() {
    return a
  },
  m5: function() {
    return l
  }
});
var n = t(913527),
  i = t.n(n);

function l(e, s) {
  let t = "",
    n = e >= 0;
  return n && (t += "+"), s ? t += "".concat(Math.floor(100 * e), "%") : t += e, {
    formattedValue: t,
    isPositive: n
  }
}

function a(e, s) {
  return null != e ? i()(e).format(s) : "-"
}