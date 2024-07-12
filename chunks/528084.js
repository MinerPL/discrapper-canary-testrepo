s.d(t, {
  a: function() {
return l;
  }
});
var n = s(442837),
  a = s(663389),
  i = s(128277),
  r = s(394644),
  o = s(295545);

function l(e, t) {
  var s;
  let l = (0, o.eA)({
  location: 'settingsTabs'
}),
c = (0, r.Gj)(t),
d = (0, i.Z7)(),
_ = (0, n.e7)([a.Z], () => a.Z.getSubsection()),
E = e.filter(e => null == e.predicate || e.predicate());
  if (l) {
if (null != c && c.size > 0) {
  let e = E.filter(e => c.has(e.setting));
  E = e.length > 0 ? e : E;
}
if (null != d && d.length > 0 && null == _) {
  let e = E.find(e => e.title.toLowerCase() === d.toLowerCase());
  if (null != e)
    return {
      viewableTabs: E,
      selectedTab: e
    };
}
  }
  let u = null !== (s = E.find(e => null != e && e.setting === _)) && void 0 !== s ? s : E[0];
  return {
viewableTabs: E,
selectedTab: u
  };
}