"use strict";
n.d(t, {
  Z: function() {
    return u
  }
}), n(789020);
var i = n(735250),
  r = n(470079),
  s = n(865427),
  o = n(853425),
  a = n(830121);
let l = RegExp("^" + a.oO.source, a.oO.flags);

function u(e) {
  return {
    match: (e, t) => t.allowLinks && t.allowDevLinks ? l.exec(e) : null,
    parse: (e, t) => ({
      target: e,
      type: "devLink"
    }),
    react: (e, t, n) => {
      let a = e.target[0];
      return (0, s.mG)(a) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("span", {
          children: a
        }), (0, i.jsx)(r.Fragment, {
          children: (0, i.jsx)(o.Z, {
            url: a
          }, a)
        }, n.key)]
      }) : (0, i.jsx)("span", {
        children: a
      })
    },
    order: 6
  }
}