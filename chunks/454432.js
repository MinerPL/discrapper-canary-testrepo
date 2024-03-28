"use strict";
s.r(t), s("47120"), s("653041");
var a = s("470079"),
  l = s("442837"),
  i = s("430824"),
  n = s("496675"),
  d = s("771845"),
  r = s("99325"),
  o = s("273387"),
  u = s("981631");
t.default = (e, t) => {
  let [s, c] = a.useState(!1), C = (0, l.useStateFromStores)([o.default], () => o.default.getAdminGuildEntryIds(t)), m = (0, l.useStateFromStoresArray)([d.default, i.default, n.default], () => {
    let t = d.default.getFlattenedGuildIds(),
      s = [];
    return t.forEach(t => {
      let a = i.default.getGuild(t);
      null != a && n.default.can(u.Permissions.ADMINISTRATOR, a) && a.id !== e && s.push(a)
    }), s
  }, [e]), f = a.useCallback(async () => {
    c(!0), await r.fetchGuildEntriesForIds(t, m.map(e => e.id)), c(!1)
  }, [t, m]);
  a.useEffect(() => {
    f()
  }, []);
  let T = a.useMemo(() => m.filter(e => !(null == C ? void 0 : C.has(e.id))), [m, C]);
  return {
    availableGuilds: T,
    addedGuilds: a.useMemo(() => m.filter(e => null == C ? void 0 : C.has(e.id)), [m, C]),
    loading: s
  }
}