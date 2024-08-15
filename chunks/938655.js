n.d(t, {
  A: function() {
return c;
  },
  T: function() {
return a;
  }
});
var i, a, s = n(735250);
n(470079);
var l = n(120356),
  r = n.n(l),
  o = n(388146);
(i = a || (a = {}))[i.POPOUT = 0] = 'POPOUT', i[i.SECONDARY = 1] = 'SECONDARY', i[i.BLACK = 2] = 'BLACK';
let c = e => {
  let {
left: t,
top: n = 0,
right: i = 0,
bottom: a,
size: l = 8,
alert: c = !1,
maskColor: u = 1
  } = e;
  return (0, s.jsx)('span', {
className: r()(o.dot, {
  [o.alert]: c,
  [o.maskPopout]: 0 === u,
  [o.maskSecondary]: 1 === u,
  [o.maskBlack]: 2 === u
}),
style: {
  height: l,
  width: l,
  left: t,
  top: n,
  right: i,
  bottom: a
}
  });
};