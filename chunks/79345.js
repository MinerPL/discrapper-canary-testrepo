"use strict";
n.r(t), n.d(t, {
  useUsernameStatus: function() {
    return s
  }
}), n("222007");
var a = n("884691"),
  i = n("44984");
let s = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
    o = (0, i.useUsernameLiveCheck)(e, t, n),
    [r, l] = a.useState(void 0);
  return a.useEffect(() => {
    "" === e || e === s ? l(void 0) : null != o && l(o)
  }, [o, e, s]), r
}