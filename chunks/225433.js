a.d(n, {
  Z: function() {
return u;
  }
});
var t = a(735250);
a(470079);
var d = a(120356),
  o = a.n(d),
  i = a(481060),
  r = a(689938),
  c = a(727052);
let l = Object.freeze({
  DEFAULT: c.default,
  FILLED: c.filled
});

function u(e) {
  let {
className: n,
onClick: a,
'aria-label': d,
look: u = l.DEFAULT
  } = e;
  return (0, t.jsx)(i.Clickable, {
'aria-label': null != d ? d : r.Z.Messages.REMOVE,
className: o()(c.button, u, n),
onClick: a
  });
}
u.Looks = l;