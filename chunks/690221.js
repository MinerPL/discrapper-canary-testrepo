var i = t(735250),
  a = t(470079),
  c = t(481060),
  s = t(703656),
  o = t(981631);
n.Z = a.forwardRef(function(e, n) {
  let {
href: t,
children: r,
onClick: _,
onKeyPress: d,
focusProps: l,
...u
  } = e, S = a.useCallback(e => {
if (!e.repeat)
  (e.charCode === o.yXg.SPACE || e.charCode === o.yXg.ENTER) && (e.preventDefault(), null != t && (0, s.uL)(t), null == _ || _()), null == d || d(e);
  }, [
t,
d,
_
  ]), g = a.useCallback(e => {
if (!e.metaKey && !e.shiftKey && 0 === e.button)
  e.preventDefault(), e.stopPropagation(), null != t && (0, s.uL)(t), null == _ || _();
  }, [
t,
_
  ]), N = (0, i.jsx)('a', {
ref: n,
href: t,
onClick: g,
onKeyPress: S,
...u,
children: r
  });
  return (0, i.jsx)(c.FocusRing, {
...l,
children: N
  });
});