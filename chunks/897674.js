"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("146282"),
  i = n("327220"),
  r = n("959580");

function o(e) {
  let {
    feed: t,
    filters: n
  } = (0, l.useStateFromStoresObject)([s.default], () => ({
    feed: s.default.getFeed(e),
    filters: s.default.getFilters()
  })), o = a.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => (function(e, t) {
      let {
        types: n
      } = e;
      return !!(null == n || n.has(t.content_type)) || !1
    })(n, e)) : e
  }, [t, n]);
  return o = (0, i.default)(o), o = (0, r.default)(o)
}