"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
}), i("789020"), i("47120"), i("653041");
var l = i("470079"),
  n = i("442837"),
  a = i("630388"),
  d = i("115130"),
  u = i("844797"),
  o = i("694312"),
  r = i("405625"),
  c = i("664097"),
  s = i("981631");

function f(e) {
  let {
    guildId: t,
    enableFilter: i = !1,
    channel: f
  } = e, {
    filter: p
  } = (0, n.useStateFromStoresObject)([d.default], () => ({
    filter: d.default.getFilter()
  })), v = (0, o.useActivityShelfData)(t), E = (0, r.default)(v), A = (0, c.useDeveloperActivityShelfItems)(), m = (0, u.useIsActivityInTextChannel)(f);
  return l.useMemo(() => {
    function e(e) {
      return !!(!i || "" === p || e.application.name.toLowerCase().includes(p.toLowerCase())) || !1
    }

    function t(e) {
      return !m || (0, a.hasFlag)(e.application.flags, s.ApplicationFlags.EMBEDDED_RELEASED)
    }
    let l = [...A].filter(e).filter(t),
      n = new Set(l.map(e => e.application.id));
    for (let i of E) !n.has(i.application.id) && e(i) && t(i) && l.push(i);
    return l
  }, [A, i, p, E, m])
}