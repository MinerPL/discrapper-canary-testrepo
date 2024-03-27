"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("627445"),
  s = n.n(a),
  l = n("413524");

function i(e) {
  if (e !== l.ClearAfterValues.TODAY) return s("number" == typeof e, "Invalid custom status clear timeout"), e;
  {
    let e = new Date,
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1);
    return t.getTime() - e.getTime()
  }
}