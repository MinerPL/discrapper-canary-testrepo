n.d(t, {
  A: function() {
return c;
  },
  T: function() {
return a;
  }
});
var i, a, l = n(735250);
n(470079);
var s = n(120356),
  r = n.n(s),
  o = n(386773);
(i = a || (a = {}))[i.POPOUT = 0] = 'POPOUT', i[i.SECONDARY = 1] = 'SECONDARY', i[i.BLACK = 2] = 'BLACK';
let c = e => {
  let {
left: t,
top: n = 0,
right: i = 0,
bottom: a,
size: s = 8,
alert: c = !1,
maskColor: d = 1
  } = e;
  return (0, l.jsx)('span', {
className: r()(o.dot, {
  [o.alert]: c,
  [o.maskPopout]: 0 === d,
  [o.maskSecondary]: 1 === d,
  [o.maskBlack]: 2 === d
}),
style: {
  height: s,
  width: s,
  left: t,
  top: n,
  right: i,
  bottom: a
}
  });
};