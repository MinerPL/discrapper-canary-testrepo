"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  l = n.n(r),
  s = n("789978"),
  a = n("790472"),
  o = n("777207"),
  d = n("651550"),
  c = n("113600");

function u(e) {
  let {
    title: t,
    description: n,
    headerImage: r,
    onDetails: u,
    onPurchase: f,
    PurchaseButton: m,
    availabilityLabel: p
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(d.wrapper, c.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != u ? u() : null != f && f()
      },
      children: [(0, i.jsx)("div", {
        className: d.cardHeaderImg,
        style: null != r ? {
          backgroundImage: null != r ? "url(".concat(r.toString(), ")") : void 0
        } : void 0,
        children: null == r && (0, i.jsx)(a.TicketIcon, {
          color: "white",
          height: 80,
          width: 80
        })
      }), (0, i.jsxs)("div", {
        className: d.details,
        children: [(0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != n && (0, i.jsx)(o.Text, {
          className: d.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), null != m && (0, i.jsxs)("div", {
        className: d.footer,
        children: [(0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: p
        }), (0, i.jsx)(m, {
          onClick: e => {
            e.stopPropagation(), null == f || f()
          }
        })]
      })]
    })
  })
}