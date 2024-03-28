"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var a = s("470079"),
  n = s("304445"),
  l = s("997383");
let i = [];

function r(e) {
  let {
    visible: t,
    autocompleterResultTypes: s,
    autocompleterOptions: r,
    autocompleterBeforeCreateSearchContext: o
  } = e, [d, u] = a.useState(""), [c, S] = a.useState(i), E = a.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? S(i) : S(e)
  }, []);
  a.useEffect(() => n.default.addRouteChangeListener(() => {
    u("")
  }), []);
  let [T] = a.useState(() => new l.default(E, s, void 0, r));
  return a.useEffect(() => {
    t ? (null == o || o(T), T.createSearchContext()) : (T.clean(), u(""))
  }, [t, T, o]), {
    queryResults: c,
    query: d,
    updateQuery: a.useCallback(e => {
      u(e), T.search(e)
    }, [T])
  }
}