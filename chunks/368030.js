"use strict";
n.d(t, {
  W: function() {
    return o
  }
});
var r = n(470079),
  i = n(41276);

function o(e, t) {
  var n = (0, r.useMemo)(function() {
    return new i.e(e, t)
  }, [t]);
  return (0, r.useEffect)(function() {
    n.spec = e
  }, [e]), n
}