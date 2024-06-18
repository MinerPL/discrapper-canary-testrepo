"use strict";
t(47120);
var n = t(470079),
  i = t(586739);
s.Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: s
    } = e,
    [t, l] = n.useState([]),
    [a, r] = n.useState(!0),
    o = async () => {
      r(!0);
      try {
        let e = await i.Z.fetchTeams(!0);
        l(e.body)
      } catch (e) {}
      r(!1)
    }, c = n.useRef(!0);
  return n.useEffect(() => {
    (c.current || s) && (c.current = !1, o())
  }, [s]), {
    teams: t,
    loading: a,
    refresh: o
  }
}