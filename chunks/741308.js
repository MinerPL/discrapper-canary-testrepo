n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(392711),
  a = n(290421),
  o = n(80132),
  s = n(228168);
let l = {
  [s.y0.BITE_SIZE]: 12,
  [s.y0.FULL_SIZE]: 26,
  [s.y0.PANEL]: 14
};

function u(e) {
  let {
displayProfile: t,
profileType: n,
onClose: s
  } = e, u = (0, a.Z)(t);
  return 0 === u.length ? null : (0, r.jsx)(r.Fragment, {
children: (0, i.chunk)(u, l[n]).map(e => (0, r.jsx)(o.Z, {
  badges: e,
  onClose: s
}, e[0].id))
  });
}