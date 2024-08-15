n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(338545),
  o = n(481060),
  l = n(42738);
let u = Object.freeze({
tension: 400,
friction: 30
  }),
  c = Object.freeze({
opacity: 0,
height: 8,
x: -4
  });

function d(e) {
  let {
selected: t = !1,
hovered: n = !1,
unread: i = !1,
disabled: d = !1,
className: _
  } = e;
  t = !d && t, n = !d && n, i = !d && i;
  let E = {
  opacity: 1,
  height: t ? 40 : n ? 20 : 8,
  x: 0
},
f = (0, o.useTransition)(t || n || i, {
  config: u,
  keys: e => e ? 'pill' : 'empty',
  initial: t || n || i ? E : null,
  from: c,
  leave: c,
  enter: E,
  update: E
}, n || document.hasFocus() ? 'animate-always' : 'animate-never');
  return (0, r.jsx)('div', {
className: a()(_, l.wrapper),
'aria-hidden': !0,
children: f((e, t) => t && (0, r.jsx)(s.animated.span, {
  className: l.item,
  style: e
}))
  });
}