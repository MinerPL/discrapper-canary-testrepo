"use strict";
n.d(t, {
  L: function() {
    return o
  }
});
var s = n(470079),
  r = n(442837),
  i = n(570140),
  a = n(480387),
  l = n(726745);

function o() {
  let e = (0, r.cj)([l.Z], () => ({
    isLoading: l.Z.getIsValidatingUsers(),
    multiAccountUsers: l.Z.getUsers()
  }));
  return s.useEffect(() => {
    i.Z.wait(() => {
      a.HJ()
    })
  }, []), e
}