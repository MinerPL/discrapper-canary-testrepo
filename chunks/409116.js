"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("481060"),
  i = a("937615"),
  o = a("703000");
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: s
    },
    renderPrice: u,
    icon: c,
    className: d,
    variant: f = "heading-md/semibold",
    alwaysWhiteText: m = !0
  } = e, C = (0, i.formatPrice)(a, s);
  return (0, l.jsxs)(n.Heading, {
    variant: f,
    color: m ? "always-white" : "none",
    className: r()(o.heading, d),
    children: [c, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
  })
}