var i = n(735250),
  r = n(470079),
  o = n(481060),
  a = n(703656),
  l = n(981631);
t.Z = r.forwardRef(function(e, t) {
  let {
href: n,
children: d,
onClick: u,
onKeyPress: c,
focusProps: f,
...s
  } = e, _ = r.useCallback(e => {
if (!e.repeat)
  (e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != n && (0, a.uL)(n), null == u || u()), null == c || c(e);
  }, [
n,
c,
u
  ]), h = r.useCallback(e => {
if (!e.metaKey && !e.shiftKey && 0 === e.button)
  e.preventDefault(), e.stopPropagation(), null != n && (0, a.uL)(n), null == u || u();
  }, [
n,
u
  ]), I = (0, i.jsx)('a', {
ref: t,
href: n,
onClick: h,
onKeyPress: _,
...s,
children: d
  });
  return (0, i.jsx)(o.FocusRing, {
...f,
children: I
  });
});