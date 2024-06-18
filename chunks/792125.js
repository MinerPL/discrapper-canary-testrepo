"use strict";
n.d(t, {
  Q: function() {
    return r
  }
});
var i = n(981631);

function r(e) {
  if (null == e) return;
  let t = i.AlD.get(e);
  return null != t ? "theme-".concat(t, " theme-").concat(e) : "theme-".concat(e)
}