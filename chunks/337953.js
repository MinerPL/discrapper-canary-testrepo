"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("512722"),
  s = n.n(a),
  l = n("875425");

function i(e) {
  if (e !== l.ClearAfterValues.TODAY) return s()("number" == typeof e, "Invalid custom status clear timeout"), e;
  {
    let e = new Date;
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime()
  }
}