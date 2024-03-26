"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("37983");
a("884691");
var r = a("414456"),
  l = a.n(r),
  n = a("77078"),
  o = a("153160"),
  i = a("468437"),
  u = e => {
    var t;
    let {
      price: {
        amount: a,
        currency: r
      },
      renderPrice: u,
      icon: c,
      className: d,
      variant: f = "heading-md/semibold",
      alwaysWhiteText: m = !0
    } = e, C = (0, o.formatPrice)(a, r);
    return (0, s.jsxs)(n.Heading, {
      variant: f,
      color: m ? "always-white" : "none",
      className: l(i.heading, d),
      children: [c, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
    })
  }