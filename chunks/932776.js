"use strict";
l.r(t), l.d(t, {
  useIntegrationPermissionCommandSearch: function() {
    return o
  }
}), l("47120");
var n = l("470079"),
  a = l("442837"),
  s = l("911969"),
  i = l("282923"),
  r = l("905753");

function o() {
  let e = (0, a.useStateFromStoresObject)([r.default], () => {
      var e;
      return Object.values(null !== (e = r.default.getCommands()) && void 0 !== e ? e : {})
    }),
    [t, l] = n.useState(""),
    o = n.useMemo(() => [...e].sort((e, t) => {
      let l = s.ApplicationCommandType.CHAT + 1,
        n = t.type > l ? l : t.type,
        a = n - (e.type > l ? l : e.type);
      return 0 !== a ? a : e.name.localeCompare(t.name)
    }), [e]),
    u = n.useMemo(() => t.startsWith("/") ? o.filter(e => e.type === s.ApplicationCommandType.CHAT) : o, [t, o]),
    c = n.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]);
  return {
    query: t,
    results: n.useMemo(() => (0, i.filterPermissionSearchItems)(u, d, c), [u, c]),
    setQuery: l,
    unfilteredCount: e.length
  }
}

function d(e) {
  return {
    id: e.id,
    names: [e.displayName]
  }
}