"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
}), i("47120"), i("653041");
var l = i("470079"),
  n = i("442837"),
  a = i("115130"),
  d = i("694312"),
  u = i("405625"),
  o = i("664097");

function r(e) {
  let {
    guildId: t,
    enableFilter: i = !1
  } = e, {
    filter: r
  } = (0, n.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), c = (0, d.useActivityShelfData)(t), s = (0, u.default)(c), f = (0, o.useDeveloperActivityShelfItems)();
  return l.useMemo(() => {
    function e(e) {
      return !!(!i || "" === r || e.application.name.toLowerCase().includes(r.toLowerCase())) || !1
    }
    let t = [...f].filter(e),
      l = new Set(t.map(e => e.application.id));
    for (let i of s) !l.has(i.application.id) && e(i) && t.push(i);
    return t
  }, [f, i, r, s])
}