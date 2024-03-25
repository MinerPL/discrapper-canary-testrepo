"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007"), s("424973");
var a = s("884691"),
  l = s("446674"),
  i = s("305961"),
  n = s("957255"),
  r = s("677099"),
  d = s("71102"),
  o = s("209397"),
  u = s("49111"),
  c = (e, t) => {
    let [s, c] = a.useState(!1), C = (0, l.useStateFromStores)([o.default], () => o.default.getAdminGuildEntryIds(t)), m = (0, l.useStateFromStoresArray)([r.default, i.default, n.default], () => {
      let t = r.default.getFlattenedGuildIds(),
        s = [];
      return t.forEach(t => {
        let a = i.default.getGuild(t);
        null != a && n.default.can(u.Permissions.ADMINISTRATOR, a) && a.id !== e && s.push(a)
      }), s
    }, [e]), f = a.useCallback(async () => {
      c(!0), await d.fetchGuildEntriesForIds(t, m.map(e => e.id)), c(!1)
    }, [t, m]);
    a.useEffect(() => {
      f()
    }, []);
    let E = a.useMemo(() => m.filter(e => !(null == C ? void 0 : C.has(e.id))), [m, C]),
      T = a.useMemo(() => m.filter(e => null == C ? void 0 : C.has(e.id)), [m, C]);
    return {
      availableGuilds: E,
      addedGuilds: T,
      loading: s
    }
  }