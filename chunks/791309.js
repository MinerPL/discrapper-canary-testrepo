"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var r = a("37983");
a("884691");
var s = a("414456"),
  l = a.n(s),
  n = a("77078"),
  i = a("153160"),
  o = a("468437"),
  c = e => {
    var t;
    let {
      price: {
        amount: a,
        currency: s
      },
      renderPrice: c,
      icon: u,
      className: d,
      variant: f = "heading-md/semibold",
      alwaysWhiteText: m = !0
    } = e, p = (0, i.formatPrice)(a, s);
    return (0, r.jsxs)(n.Heading, {
      variant: f,
      color: m ? "always-white" : "none",
      className: l(o.heading, d),
      children: [u, null !== (t = null == c ? void 0 : c(p)) && void 0 !== t ? t : p]
    })
  }