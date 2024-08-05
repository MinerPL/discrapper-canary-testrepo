n.d(t, {
  q: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(743236),
  l = n(939350),
  u = n(206227);

function c(e) {
  let {
color: t = 'default',
disabled: n,
isFocused: a,
showDefaultFocus: c = !1,
menuItemProps: d,
children: _
  } = e, E = i.useRef(null);
  return i.useLayoutEffect(() => {
if (!a)
  return;
let e = E.current;
if (null == e)
  return;
(0, o.F)(E);
let t = e.querySelector('[tabindex="0"]');
null == t || t.focus();
  }, [a]), (0, r.jsx)('div', {
ref: E,
className: s()(u.item, l._[t], {
  [u.disabled]: n,
  [u.focused]: c && a,
  [u.hideInteraction]: !c
}),
'aria-disabled': n,
...d,
children: _
  });
}