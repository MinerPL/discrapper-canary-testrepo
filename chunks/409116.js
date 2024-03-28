"use strict";
a.r(t);
var s = a("735250");
a("470079");
var l = a("803997"),
  r = a.n(l),
  n = a("481060"),
  o = a("937615"),
  i = a("75117");
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: l
    },
    renderPrice: u,
    icon: c,
    className: d,
    variant: f = "heading-md/semibold",
    alwaysWhiteText: m = !0
  } = e, C = (0, o.formatPrice)(a, l);
  return (0, s.jsxs)(n.Heading, {
    variant: f,
    color: m ? "always-white" : "none",
    className: r()(i.heading, d),
    children: [c, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
  })
}