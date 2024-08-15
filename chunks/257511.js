n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(479099),
  s = n(851237);

function l(e) {
  let {
appliedTags: t,
setAppliedTags: n
  } = e, l = null != n ? e => {
t.has(e) && (t.delete(e), n(new Set(t)));
  } : void 0;
  return (0, i.jsx)('div', {
className: s.tags,
children: Array.from(t).map(e => (0, i.jsx)(a.Z, {
  tag: e,
  onRemove: l,
  size: null == l ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM
}, e.id))
  });
}