"use strict";
n.r(t), n.d(t, {
  SubscriptionCard: function() {
    return m
  },
  SubscriptionCardBenefit: function() {
    return p
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  l = n.n(r),
  s = n("789978"),
  a = n("368072"),
  o = n("777207"),
  d = n("752843"),
  c = n("330711"),
  u = n("173459"),
  f = n("113600");

function m(e) {
  let {
    description: t,
    imgSrc: n,
    PurchaseButton: r,
    onPurchase: m,
    subscriptionType: p,
    title: h,
    onDetails: S,
    benefitItems: v,
    benefitsSummary: g
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(u.container, f.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != S ? S() : null != m && m()
      },
      children: [(0, i.jsxs)("div", {
        className: u.card,
        children: [null != p && (0, i.jsx)(d.SubscriptionTag, {
          type: p
        }), (0, i.jsxs)("div", {
          className: u.body,
          children: [(0, i.jsx)(o.Text, {
            tag: "div",
            variant: "heading-lg/semibold",
            children: h
          }), (0, i.jsx)("div", {
            className: u.image,
            children: null != n ? (0, i.jsx)("img", {
              src: n.toString(),
              alt: ""
            }) : (0, i.jsx)(a.BadgeIcon, {
              color: "white",
              height: 48,
              width: 48
            })
          }), null != r && (0, i.jsx)(r, {
            className: u.purchaseBtn,
            onClick: e => {
              e.stopPropagation(), null == m || m()
            }
          }), null != t && "" !== t && (0, i.jsx)(o.Text, {
            className: u.description,
            color: "text-normal",
            variant: "text-sm/medium",
            children: t
          })]
        })]
      }), null != g && (0, i.jsx)("div", {
        className: u.benefitsSummary,
        children: (0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/medium",
          children: c.default.Messages.Storefront.BENEFITS_SUMMARY.format({
            count: g
          })
        })
      }), null != v && (0, i.jsx)("div", {
        className: u.benefits,
        children: (0, i.jsx)("div", {
          className: u.benefitsContainer,
          children: (0, i.jsxs)("div", {
            className: u.benefitsList,
            children: [(0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: c.default.Messages.Storefront.BENEFITS_TITLE
            }), v.length > 3 ? (0, i.jsxs)(i.Fragment, {
              children: [v.slice(0, 3), (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "text-secondary",
                children: c.default.Messages.Storefront.MORE_BENEFITS.format({
                  count: v.length - 3
                })
              })]
            }) : v]
          })
        })
      })]
    })
  })
}

function p(e) {
  let {
    icon: t,
    name: n,
    description: r
  } = e;
  return (0, i.jsxs)("div", {
    className: u.cardBenefit,
    children: [(0, i.jsx)("div", {
      className: u.cardBenefitIcon,
      children: t
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: n
      }), null != r && (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: r
      })]
    })]
  })
}