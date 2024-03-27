"use strict";
a.r(t), a.d(t, {
  useUsernameLiveCheck: function() {
    return u
  }
});
var s = a("884691"),
  n = a("917351"),
  i = a("65597"),
  l = a("255403"),
  r = a("947962"),
  o = a("2581"),
  d = a("415133");
let u = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    c = (0, i.useStateFromStores)([o.default], () => o.default.validate(e), [e]),
    E = (0, i.useStateFromStores)([o.default], () => o.default.isRateLimited()),
    m = (0, r.usePomeloDebounceDelay)(),
    f = s.useMemo(() => (0, n.debounce)(e => l.default.attemptPomelo(e, a ? "registration" : "modal", a, u), m), [m, a, u]);
  return s.useEffect(() => {
    t && !E && null == c && "" !== e && f(e)
  }, [t, E, c, e, f]), s.useMemo(() => null != c ? (0, d.formatUsernameLiveCheckValidation)(c) : void 0, [c])
}