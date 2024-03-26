"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var i = n("421898"),
  l = n.n(i),
  r = n("15542"),
  a = n("700052"),
  o = n("502026"),
  c = n("370621"),
  d = n("35589");

function u(e) {
  let {
    title: t,
    description: n,
    headerImage: i,
    onDetails: u,
    onPurchase: h,
    PurchaseButton: f,
    availabilityLabel: m
  } = e;
  return (0, s.jsx)(r.FocusRing, {
    children: (0, s.jsxs)("div", {
      className: l(c.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != u ? u() : null != h && h()
      },
      children: [(0, s.jsx)("div", {
        className: c.cardHeaderImg,
        style: null != i ? {
          backgroundImage: null != i ? "url(".concat(i.toString(), ")") : void 0
        } : void 0,
        children: null == i && (0, s.jsx)(a.BadgeIcon, {
          color: "white",
          height: 128,
          width: 128
        })
      }), (0, s.jsxs)("div", {
        className: c.details,
        children: [(0, s.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != n && (0, s.jsx)(o.Text, {
          className: c.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), null != f && (0, s.jsxs)("div", {
        className: c.footer,
        children: [(0, s.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: m
        }), (0, s.jsx)(f, {
          onClick: e => {
            e.stopPropagation(), null == h || h()
          }
        })]
      })]
    })
  })
}