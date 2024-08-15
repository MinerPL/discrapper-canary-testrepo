t.d(r, {
  Z: function() {
return s;
  },
  g: function() {
return c;
  }
}), t(47120);
var a = t(470079),
  n = t(442837),
  i = t(146282),
  o = t(327220),
  l = t(959580);

function c(e, r) {
  let {
types: t
  } = e;
  return !!(null == t || t.has(r.content_type)) || !1;
}

function s(e) {
  let {
feed: r,
filters: t
  } = (0, n.cj)([i.Z], () => ({
feed: i.Z.getFeed(e),
filters: i.Z.getFilters()
  })), s = a.useMemo(() => {
let e = null == r ? void 0 : r.entries.map(e => e.content);
return null != t ? null == e ? void 0 : e.filter(e => c(t, e)) : e;
  }, [
r,
t
  ]);
  return s = (0, o.Z)(s), s = (0, l.Z)(s);
}