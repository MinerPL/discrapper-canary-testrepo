"use strict";
n.r(t), n.d(t, {
  ApplicationBenefitsModalBenefits: function() {
    return p
  },
  ApplicationBenefitsModalContent: function() {
    return x
  },
  ApplicationBenefitsModalDescription: function() {
    return m
  },
  ApplicationBenefitsModalDivider: function() {
    return f
  },
  ApplicationBenefitsModalHeading: function() {
    return c
  },
  ApplicationBenefitsModalIcon: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var l = n("120356"),
  r = n.n(l),
  a = n("481060"),
  s = n("41959"),
  o = n("245561"),
  u = n("635645");
let d = e => {
    let {
      application: t,
      asset: n,
      className: l,
      ...r
    } = e;
    return (0, i.jsx)(s.default, {
      application: t,
      size: s.ApplicationIconSize.MEDIUM,
      asset: n,
      className: l,
      ...r
    })
  },
  c = e => {
    let {
      children: t,
      className: n,
      id: l,
      ...s
    } = e;
    return (0, i.jsx)(a.Heading, {
      className: r()(u.header, n),
      variant: "heading-xl/extrabold",
      id: l,
      ...s,
      children: t
    })
  };

function f() {
  return (0, i.jsx)("hr", {
    className: u.divider
  })
}
let m = e => {
    let {
      className: t,
      title: n,
      description: l,
      ...r
    } = e;
    return (0, i.jsxs)("div", {
      className: t,
      ...r,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        children: n
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: l
      })]
    })
  },
  p = e => {
    let {
      applicationId: t,
      storeListingBenefits: n,
      skuBenefits: l,
      className: a,
      ...s
    } = e;
    return (0, i.jsx)("div", {
      className: r()(u.benefitsContainer, a),
      ...s,
      children: (0, i.jsx)(o.SubscriptionListingBenefits, {
        applicationId: t,
        storeListingBenefits: n,
        skuBenefits: l,
        className: u.benefit
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      ...l
    } = e;
    return (0, i.jsx)("div", {
      className: r()(u.container, n),
      ...l,
      children: t
    })
  }