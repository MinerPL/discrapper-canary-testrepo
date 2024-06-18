"use strict";
t.d(s, {
  F: function() {
    return d
  }
}), t(757143);
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  l = t(481060),
  r = t(937615),
  o = t(884697),
  c = t(87951);
let u = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  d = e => {
    var s;
    let {
      price: {
        amount: t,
        currency: a
      },
      renderPrice: d,
      icon: C,
      className: E,
      discount: f = o.f_,
      variant: m = "heading-md/semibold"
    } = e, p = u((0, r.T4)(t, a)), g = f !== o.f_ && f.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
      children: [p, (0, n.jsx)(l.Heading, {
        variant: m,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(f.discountPercentage, "%)")
      })]
    }) : p;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)(l.Heading, {
        variant: m,
        className: i()(c.container, E),
        children: [C, null !== (s = null == d ? void 0 : d(g)) && void 0 !== s ? s : g]
      })
    })
  }