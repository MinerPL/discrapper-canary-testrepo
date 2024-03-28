"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("470079");

function l(e) {
  let [t, s] = a.useState(e), l = a.useRef(null);
  return a.useEffect(() => {
    var t, a;
    s(null !== (a = null === (t = l.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== a ? a : e)
  }), {
    headerHeight: t,
    headerRef: l
  }
}