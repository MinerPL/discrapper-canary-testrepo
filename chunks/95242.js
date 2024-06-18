"use strict";
t.d(s, {
  Z: function() {
    return i
  }
}), t(47120);
var n = t(470079);

function i(e) {
  let [s, t] = n.useState(e), i = n.useRef(null);
  return n.useEffect(() => {
    var s, n;
    t(null !== (n = null === (s = i.current) || void 0 === s ? void 0 : s.offsetHeight) && void 0 !== n ? n : e)
  }), {
    headerHeight: s,
    headerRef: i
  }
}