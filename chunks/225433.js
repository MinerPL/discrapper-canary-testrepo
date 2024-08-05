n.d(a, {
  Z: function() {
return u;
  }
});
var t = n(735250);
n(470079);
var d = n(120356),
  o = n.n(d),
  i = n(481060),
  r = n(689938),
  c = n(727052);
let l = Object.freeze({
  DEFAULT: c.default,
  FILLED: c.filled
});

function u(e) {
  let {
className: a,
onClick: n,
'aria-label': d,
look: u = l.DEFAULT
  } = e;
  return (0, t.jsx)(i.Clickable, {
'aria-label': null != d ? d : r.Z.Messages.REMOVE,
className: o()(c.button, u, a),
onClick: n
  });
}
u.Looks = l;