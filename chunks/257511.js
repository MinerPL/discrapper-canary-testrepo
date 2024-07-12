n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(479099),
  l = n(748776);

function s(e) {
  let {
appliedTags: t,
setAppliedTags: n
  } = e, s = null != n ? e => {
t.has(e) && (t.delete(e), n(new Set(t)));
  } : void 0;
  return (0, i.jsx)('div', {
className: l.tags,
children: Array.from(t).map(e => (0, i.jsx)(a.Z, {
  tag: e,
  onRemove: s,
  size: null == s ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM
}, e.id))
  });
}