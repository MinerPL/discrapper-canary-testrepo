"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(718922),
  r = n(55935),
  s = n(745735);

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
    n = arguments.length > 2 ? arguments[2] : void 0,
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = (0, r.TD)(Date.now(), e),
    l = (0, i.Z)();
  return (0, s.Z)(() => {
    if ((0 !== a.days || 0 !== a.hours || 0 !== a.minutes || 0 !== a.seconds) && !o) l(), null == n || n()
  }, o ? null : t), a
}