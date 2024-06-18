"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(392711),
  s = n(290421),
  o = n(80132),
  a = n(228168);
let l = {
  [a.y0.BITE_SIZE]: 12,
  [a.y0.FULL_SIZE]: 26,
  [a.y0.PANEL]: 14
};

function u(e) {
  let {
    displayProfile: t,
    profileType: n,
    onClose: a
  } = e, u = (0, s.Z)(t);
  return 0 === u.length ? null : (0, i.jsx)(i.Fragment, {
    children: (0, r.chunk)(u, l[n]).map(e => (0, i.jsx)(o.Z, {
      badges: e,
      onClose: a
    }, e[0].id))
  })
}