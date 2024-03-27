"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("884691"),
  l = s("3245"),
  n = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        refreshOnDepChange: t
      } = e,
      [s, n] = a.useState([]),
      [i, r] = a.useState(!0),
      o = async () => {
        r(!0);
        try {
          let e = await l.default.fetchTeams(!0);
          n(e.body)
        } catch (e) {}
        r(!1)
      }, d = a.useRef(!0);
    return a.useEffect(() => {
      (d.current || t) && (d.current = !1, o())
    }, [t]), {
      teams: s,
      loading: i,
      refresh: o
    }
  }