n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(547881),
  a = n(382790),
  o = n(430036),
  r = n(374337);

function l(e) {
  let {
dragStart: t,
dragging: n,
pinned: l,
locked: c
  } = e;
  return (0, i.jsxs)(s.ZP, {
className: r.wrapper,
children: [
  (0, i.jsx)(a.Z, {
    contained: !0,
    dragStart: t,
    locked: c
  }),
  (0, i.jsx)(o.Z, {
    dragStart: t,
    locked: c,
    pinned: l,
    dragging: n,
    contained: !0
  })
]
  });
}