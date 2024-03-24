"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
}), i("222007"), i("424973");
var l = i("884691"),
  n = i("446674"),
  a = i("84460"),
  d = i("743925"),
  u = i("807106"),
  r = i("119420");

function o(e) {
  let {
    guildId: t,
    enableFilter: i = !1
  } = e, {
    filter: o
  } = (0, n.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), c = (0, d.useActivityShelfData)(t), s = (0, u.default)(c), f = (0, r.useDeveloperActivityShelfItems)();
  return l.useMemo(() => {
    function e(e) {
      return !!(!i || "" === o || e.application.name.toLowerCase().includes(o.toLowerCase())) || !1
    }
    let t = [...f].filter(e),
      l = new Set(t.map(e => e.application.id));
    for (let i of s) !l.has(i.application.id) && e(i) && t.push(i);
    return t
  }, [f, i, o, s])
}