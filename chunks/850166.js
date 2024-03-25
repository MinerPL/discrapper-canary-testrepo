"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("884691"),
  n = s("1501"),
  l = s("337575");
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
  a.useEffect(() => {
    let e = n.default.addRouteChangeListener(() => {
      u("")
    });
    return e
  }, []);
  let [T] = a.useState(() => new l.default(E, s, void 0, r));
  a.useEffect(() => {
    t ? (null == o || o(T), T.createSearchContext()) : (T.clean(), u(""))
  }, [t, T, o]);
  let f = a.useCallback(e => {
    u(e), T.search(e)
  }, [T]);
  return {
    queryResults: c,
    query: d,
    updateQuery: f
  }
}