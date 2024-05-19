"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmation: function() {
    return C
  },
  PurchaseConfirmation: function() {
    return N
  },
  PurchaseHeader: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  r = n("131388"),
  a = n("409813"),
  s = n("586585"),
  o = n("614277"),
  u = n("465670"),
  d = n("225715"),
  c = n("750143"),
  f = n("689938"),
  m = n("69202"),
  p = n("365627"),
  x = n("753260");
let h = e => {
    let {
      step: t,
      onClose: n
    } = e, s = (0, r.default)(c.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
    return t === a.Step.CONFIRM || t === a.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
      className: m.headerContainer,
      children: [!s && (0, i.jsx)("div", {
        className: m.headerImageContainer,
        "aria-hidden": "true",
        children: (0, i.jsx)("img", {
          src: x,
          alt: "",
          className: m.headerImage
        })
      }), (0, i.jsx)(l.Clickable, {
        className: m.closeContainer,
        onClick: () => n(),
        "aria-label": f.default.Messages.CLOSE,
        children: (0, i.jsx)(u.default, {
          className: m.closeIcon
        })
      })]
    })
  },
  C = e => {
    let {
      icon: t,
      storeListingBenefits: n,
      skuBenefits: l,
      application: r,
      title: a,
      subtitle: s,
      description: o
    } = e;
    return null == r ? null : (0, i.jsx)("div", {
      className: m.confirmationContainer,
      children: (0, i.jsxs)(d.ApplicationBenefitsModalContent, {
        children: [(0, i.jsx)(d.ApplicationBenefitsModalIcon, {
          application: r,
          asset: t
        }), (0, i.jsx)(d.ApplicationBenefitsModalHeading, {
          children: a
        }), (0, i.jsx)(d.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(d.ApplicationBenefitsModalDescription, {
          title: s,
          description: o
        }), (0, i.jsx)(d.ApplicationBenefitsModalBenefits, {
          applicationId: r.id,
          storeListingBenefits: n,
          skuBenefits: l
        })]
      })
    })
  };

function N(e) {
  let {
    tierName: t,
    onConfirm: n,
    subscription: r
  } = e;
  return (0, i.jsxs)("div", {
    className: m.purchaseConfirmation,
    children: [(0, i.jsx)("img", {
      src: p,
      alt: "",
      width: 300,
      height: 126
    }), (0, i.jsx)(l.Heading, {
      className: m.confirmationTitle,
      variant: "heading-xl/extrabold",
      color: "header-primary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: t
      })
    }), (0, i.jsx)(l.Text, {
      className: m.confirmationSubtitle,
      variant: "text-md/medium",
      color: "header-secondary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == r ? void 0 : r.currentPeriodEnd
      })
    }), (0, i.jsx)(o.PaymentPortalFooter, {
      children: (0, i.jsx)(s.default, {
        onPrimary: n,
        primaryCTA: s.CTAType.CONTINUE,
        primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })
    })]
  })
}