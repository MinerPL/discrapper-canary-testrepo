"use strict";
n.d(t, {
  s: function() {
    return u
  }
});
var r = n(470079),
  i = n(820282),
  a = n.n(i),
  o = n(234366),
  s = n(705942);

function u(e) {
  var t = e.children,
    n = e.innerRef,
    i = r.useContext(o.mq),
    u = r.useCallback(function(e) {
      (0, s.k$)(n, e), (0, s.DL)(i, e)
    }, [n, i]);
  return r.useEffect(function() {
    return function() {
      return (0, s.k$)(n, null)
    }
  }, []), r.useEffect(function() {
    a()(!!i, "`Reference` should not be used outside of a `Manager` component.")
  }, [i]), (0, s.$p)(t)({
    ref: u
  })
}